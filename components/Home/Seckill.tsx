import React, { useState, useEffect } from 'react';
import { ChevronRight, Timer } from 'lucide-react';

const Seckill: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  const items = [
    { id: 1, price: 199, oldPrice: 299, img: 'https://picsum.photos/seed/seckill1/200/200' },
    { id: 2, price: 9.9, oldPrice: 29.9, img: 'https://picsum.photos/seed/seckill2/200/200' },
    { id: 3, price: 4599, oldPrice: 5299, img: 'https://picsum.photos/seed/seckill3/200/200' },
    { id: 4, price: 59, oldPrice: 120, img: 'https://picsum.photos/seed/seckill4/200/200' },
    { id: 5, price: 299, oldPrice: 599, img: 'https://picsum.photos/seed/seckill5/200/200' },
    { id: 6, price: 12, oldPrice: 24, img: 'https://picsum.photos/seed/seckill6/200/200' },
  ];

  return (
    <div className="m-3 bg-white rounded-xl p-3 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="font-bold italic text-lg text-black">京东秒杀</span>
          <div className="flex items-center gap-1 border border-red-200 rounded-full px-2 py-0.5 bg-red-50">
            <Timer size={12} className="text-red-600" />
            <span className="text-xs text-red-600 font-bold">14点场</span>
            <div className="flex gap-0.5 items-center">
                <span className="bg-black text-white text-[10px] px-0.5 rounded-sm font-mono">{formatTime(timeLeft.hours)}</span>
                <span className="text-black text-[10px]">:</span>
                <span className="bg-black text-white text-[10px] px-0.5 rounded-sm font-mono">{formatTime(timeLeft.minutes)}</span>
                <span className="text-black text-[10px]">:</span>
                <span className="bg-black text-white text-[10px] px-0.5 rounded-sm font-mono">{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center text-xs text-red-600">
            <span>更多秒杀</span>
            <ChevronRight size={12} />
        </div>
      </div>

      {/* Scrollable List */}
      <div className="flex overflow-x-auto gap-3 no-scrollbar pb-1">
        {items.map((item) => (
            <div key={item.id} className="flex-none w-20 flex flex-col items-center">
                <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 mb-1 relative">
                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-red-600 font-bold text-sm">¥{item.price}</span>
                <span className="text-gray-400 text-xs line-through">¥{item.oldPrice}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Seckill;