import React from 'react';
import { Product } from '../../types';
import { MoreHorizontal } from 'lucide-react';

const mockProducts: Product[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `p-${i}`,
  title: i % 2 === 0 
    ? 'Apple iPhone 15 Pro Max (256GB) 钛金属原色 移动联通电信5G双卡双待' 
    : 'Logitech 罗技 MX Master 3S 无线蓝牙鼠标 人体工学 办公商务',
  price: i % 2 === 0 ? 9999 : 599,
  imageUrl: `https://picsum.photos/seed/prod${i}/400/400`,
  reviews: 1000 + i * 50,
  rating: 98,
  shopName: i % 2 === 0 ? 'Apple产品京东自营旗舰店' : '罗技外设旗舰店',
  isSelfOperated: true,
  tags: i % 3 === 0 ? ['满减', '免息'] : ['新品']
}));

const ProductFeed: React.FC = () => {
  return (
    <div className="px-2 pb-16">
      {/* Title */}
      <div className="flex items-center justify-center py-4">
        <div className="h-[1px] w-8 bg-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm font-medium">为你推荐</span>
        <div className="h-[1px] w-8 bg-gray-300"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-2">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
            <div className="aspect-square w-full bg-gray-100 relative">
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-2 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-sm text-gray-900 line-clamp-2 leading-snug mb-1">
                  {product.isSelfOperated && (
                    <span className="inline-block bg-red-600 text-white text-[10px] px-1 rounded-sm mr-1 align-middle">自营</span>
                  )}
                  {product.title}
                </h3>
                
                {product.tags && product.tags.length > 0 && (
                   <div className="flex flex-wrap gap-1 mb-1">
                       {product.tags.map(tag => (
                           <span key={tag} className="text-[10px] text-red-600 border border-red-600 px-0.5 rounded">{tag}</span>
                       ))}
                   </div>
                )}
              </div>
              
              <div className="mt-2">
                <div className="flex items-baseline gap-1">
                   <span className="text-xs text-red-600 font-bold">¥</span>
                   <span className="text-lg text-red-600 font-bold">{product.price}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] text-gray-400">{product.reviews}+条评价</span>
                    <button className="text-gray-300">
                        <MoreHorizontal size={14} />
                    </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="py-4 text-center text-xs text-gray-400">
        已经到底了，去别处看看吧 ~
      </div>
    </div>
  );
};

export default ProductFeed;