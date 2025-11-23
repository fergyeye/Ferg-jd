import React from 'react';
import { MapPin, MoreHorizontal, Circle, CheckCircle2, Minus, Plus } from 'lucide-react';
import ProductFeed from '../Home/ProductFeed';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-[110px]"> {/* Extra padding for stacked bottom bars */}
      {/* Header */}
      <div className="h-12 bg-white flex items-center justify-between px-4 sticky top-0 z-30 border-b border-gray-100">
        <span className="text-lg font-bold">购物车</span>
        <div className="flex items-center gap-1 text-gray-600 text-xs">
            <MapPin size={12} />
            <span className="truncate max-w-[100px]">北京市朝阳区三环中路...</span>
            <button className="ml-2 text-sm">编辑</button>
            <MoreHorizontal size={20} className="ml-2" />
        </div>
      </div>

      {/* Cart Items */}
      <div className="p-3 space-y-3">
        {/* Shop Group 1 */}
        <div className="bg-white rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={20} className="text-red-600" />
                <span className="font-bold text-sm">Apple产品京东自营旗舰店</span>
            </div>
            <div className="flex gap-3">
                <CheckCircle2 size={20} className="text-red-600 mt-8" />
                <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img src="https://picsum.photos/seed/iphone/200/200" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                    <h4 className="text-sm line-clamp-2">Apple iPhone 15 Pro Max (256GB) 钛金属原色 移动联通电信5G双卡双待手机</h4>
                    <div className="bg-gray-50 inline-block px-1 rounded text-xs text-gray-500 w-fit mt-1">钛金属原色, 256GB</div>
                    <div className="flex justify-between items-end mt-2">
                        <span className="text-red-600 font-bold">¥9999</span>
                        <div className="flex items-center border rounded">
                            <button className="p-1 px-2 text-gray-400"><Minus size={10} /></button>
                            <span className="px-2 text-xs font-medium">1</span>
                            <button className="p-1 px-2 text-gray-800"><Plus size={10} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Shop Group 2 */}
        <div className="bg-white rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
                <Circle size={20} className="text-gray-300" />
                <span className="font-bold text-sm">罗技外设旗舰店</span>
            </div>
            <div className="flex gap-3">
                <Circle size={20} className="text-gray-300 mt-8" />
                <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img src="https://picsum.photos/seed/mouse/200/200" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                    <h4 className="text-sm line-clamp-2">Logitech 罗技 MX Master 3S 无线蓝牙鼠标</h4>
                    <div className="bg-gray-50 inline-block px-1 rounded text-xs text-gray-500 w-fit mt-1">黑色</div>
                    <div className="flex justify-between items-end mt-2">
                        <span className="text-red-600 font-bold">¥599</span>
                        <div className="flex items-center border rounded">
                            <button className="p-1 px-2 text-gray-400"><Minus size={10} /></button>
                            <span className="px-2 text-xs font-medium">1</span>
                            <button className="p-1 px-2 text-gray-800"><Plus size={10} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Recommendations */}
      <ProductFeed />

      {/* Sticky Bottom Checkout Bar (Above Nav) */}
      <div className="fixed bottom-[57px] left-0 right-0 h-12 bg-white border-t border-b border-gray-100 flex items-center justify-between px-3 z-40">
         <div className="flex items-center gap-2">
             <CheckCircle2 size={20} className="text-red-600" />
             <span className="text-xs text-gray-500">全选</span>
         </div>
         <div className="flex items-center gap-3">
             <div className="text-right">
                 <div className="text-sm font-bold">
                     合计: <span className="text-red-600">¥9999.00</span>
                 </div>
                 <div className="text-[10px] text-gray-400">已优惠: ¥100.00</div>
             </div>
             <button className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">
                 去结算(1)
             </button>
         </div>
      </div>
    </div>
  );
};

export default CartPage;