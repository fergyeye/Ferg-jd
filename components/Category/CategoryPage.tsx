import React, { useState } from 'react';
import { Search, ChevronLeft, MoreHorizontal } from 'lucide-react';

const categories = [
  '热门推荐', '手机数码', '电脑办公', '家用电器', '美妆护肤', 
  '个护清洁', '汽车生活', '京东超市', '男装', '女装', 
  '鞋靴', '箱包皮具', '内衣配饰', '珠宝首饰'
];

const subCategories = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: ['手机', '耳机', '充电宝', '数据线', '手机壳', '贴膜', '支架', '智能手表', '路由器'][i],
  img: `https://picsum.photos/seed/cat${i}/100/100`
}));

const CategoryPage: React.FC = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="h-12 border-b flex items-center px-3 gap-3 bg-white z-10">
        <ChevronLeft size={24} className="text-gray-600" />
        <div className="flex-1 h-8 bg-gray-100 rounded-full flex items-center px-3">
            <Search size={16} className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-400">搜索京东商品/店铺</span>
        </div>
        <MoreHorizontal size={24} className="text-gray-600" />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex overflow-hidden pb-[56px]"> {/* 56px for bottom nav */}
        {/* Sidebar */}
        <div className="w-[86px] h-full bg-gray-50 overflow-y-auto no-scrollbar">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => setActiveId(idx)}
              className={`h-12 flex items-center justify-center text-xs relative ${
                activeId === idx ? 'bg-white font-bold text-gray-900' : 'text-gray-600'
              }`}
            >
              {activeId === idx && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-red-600 rounded-r"></div>
              )}
              {cat}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 h-full overflow-y-auto p-3">
          <div className="mb-6">
             <div className="w-full h-24 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img src={`https://picsum.photos/seed/promo${activeId}/500/200`} className="w-full h-full object-cover" alt="promo" />
             </div>
             
             <h3 className="font-bold text-sm text-gray-900 mb-3">{categories[activeId]}</h3>
             <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                {subCategories.map((sub) => (
                    <div key={sub.id} className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-gray-50 rounded mb-1">
                            <img src={sub.img} className="w-full h-full object-cover rounded" alt={sub.name} />
                        </div>
                        <span className="text-xs text-gray-600">{sub.name}</span>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;