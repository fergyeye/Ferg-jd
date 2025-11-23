import React from 'react';
import { Settings, MessageSquareText, Wallet, Ticket, Package, Truck, Gift, Star, Clock } from 'lucide-react';

const UserPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 pb-16 pt-12 px-4 rounded-b-[5%] relative">
         <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-3">
                 <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                     <img src="https://picsum.photos/seed/user/100/100" alt="avatar" />
                 </div>
                 <div className="text-white">
                     <div className="flex items-center gap-2">
                         <span className="font-bold text-lg">京东用户_9527</span>
                         <span className="bg-black/20 text-[10px] px-2 py-0.5 rounded-full border border-white/20">京享值 5000</span>
                     </div>
                     <div className="flex items-center gap-2 mt-1">
                         <span className="text-xs bg-red-800/40 px-1.5 py-0.5 rounded text-red-50">PLUS | 试用中 &gt;</span>
                     </div>
                 </div>
             </div>
             <div className="flex gap-3 text-white">
                 <Settings size={20} />
                 <MessageSquareText size={20} />
             </div>
         </div>
         
         {/* Stats Row */}
         <div className="flex justify-around text-white mb-2">
             <div className="flex flex-col items-center">
                 <span className="font-bold text-sm">12</span>
                 <span className="text-xs opacity-80">商品收藏</span>
             </div>
             <div className="flex flex-col items-center">
                 <span className="font-bold text-sm">5</span>
                 <span className="text-xs opacity-80">店铺关注</span>
             </div>
             <div className="flex flex-col items-center">
                 <span className="font-bold text-sm">20</span>
                 <span className="text-xs opacity-80">浏览记录</span>
             </div>
             <div className="flex flex-col items-center">
                 <span className="font-bold text-sm">8</span>
                 <span className="text-xs opacity-80">优惠券</span>
             </div>
         </div>
      </div>

      {/* Orders Card */}
      <div className="mx-3 -mt-10 bg-white rounded-xl p-4 shadow-sm relative z-10 mb-3">
          <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm">我的订单</span>
              <span className="text-xs text-gray-400">全部订单 &gt;</span>
          </div>
          <div className="flex justify-between items-center px-2">
              <div className="flex flex-col items-center gap-1">
                  <Wallet size={24} className="text-gray-600" />
                  <span className="text-xs text-gray-600">待付款</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                  <Package size={24} className="text-gray-600" />
                  <span className="text-xs text-gray-600">待收货</span>
                  <span className="absolute top-10 ml-6 bg-red-600 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-white">1</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                  <Truck size={24} className="text-gray-600" />
                  <span className="text-xs text-gray-600">待评价</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                  <Clock size={24} className="text-gray-600" />
                  <span className="text-xs text-gray-600">退换/售后</span>
              </div>
          </div>
      </div>

      {/* Assets Card */}
      <div className="mx-3 bg-white rounded-xl p-4 shadow-sm mb-3">
           <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm">我的钱包</span>
              <span className="text-xs text-gray-400">查看资产 &gt;</span>
          </div>
           <div className="flex justify-around items-center">
              <div className="flex flex-col items-center gap-1">
                  <span className="font-bold text-base">200</span>
                  <span className="text-xs text-gray-600">京豆</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                  <span className="font-bold text-base">5.00</span>
                  <span className="text-xs text-gray-600">红包</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                  <span className="font-bold text-base">0.00</span>
                  <span className="text-xs text-gray-600">礼品卡</span>
              </div>
               <div className="flex flex-col items-center gap-1">
                  <Ticket size={20} className="text-black mb-0.5" />
                  <span className="text-xs text-gray-600">我的资产</span>
              </div>
          </div>
      </div>

      {/* Tools Grid */}
      <div className="mx-3 bg-white rounded-xl p-4 shadow-sm">
           <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm">工具与服务</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
              {[
                {icon: Gift, label: "客户服务"}, 
                {icon: Star, label: "我的预约"},
                {icon: Package, label: "闲置换钱"}, 
                {icon: Truck, label: "寄件服务"}
              ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                      <item.icon size={24} className="text-gray-700" />
                      <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default UserPage;