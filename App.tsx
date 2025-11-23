import React, { useState } from 'react';
import Header from './components/Home/Header';
import Banner from './components/Home/Banner';
import Categories from './components/Home/Categories';
import Seckill from './components/Home/Seckill';
import ProductFeed from './components/Home/ProductFeed';
import BottomNav from './components/BottomNav';
import CategoryPage from './components/Category/CategoryPage';
import CartPage from './components/Cart/CartPage';
import UserPage from './components/User/UserPage';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return (
          <main className="min-h-screen bg-gray-100 w-full pb-[60px]">
            <Header />
            {/* Banner Container with background gradient to blend with header */}
            <div className="relative">
               <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-red-600 to-red-500 rounded-b-[30px] z-0" />
               <div className="relative z-10 pt-12 px-3">
                   <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-2">
                       <Banner />
                   </div>
               </div>
            </div>
            
            {/* Main Content flow */}
            <div className="mt-4">
                <Categories />
                <Seckill />
                
                {/* Promotion Grid (Simple visual placeholders) */}
                <div className="grid grid-cols-2 gap-2 px-3 mb-3">
                    <div className="bg-gradient-to-r from-pink-50 to-white p-2 rounded-lg h-24 flex justify-between">
                        <div className="flex flex-col justify-center">
                             <span className="font-bold text-gray-800">京东小魔方</span>
                             <span className="text-xs text-gray-500">新品首发</span>
                        </div>
                        <img src="https://picsum.photos/seed/cube/80/80" className="w-16 h-16 self-center object-contain mix-blend-multiply" alt="" />
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg h-24 flex justify-between">
                         <div className="flex flex-col justify-center">
                             <span className="font-bold text-gray-800">频道广场</span>
                             <span className="text-xs text-gray-500">逛出好生活</span>
                        </div>
                        <img src="https://picsum.photos/seed/square/80/80" className="w-16 h-16 self-center object-contain mix-blend-multiply" alt="" />
                    </div>
                </div>

                <ProductFeed />
            </div>
          </main>
        );
      case Tab.CATEGORY:
        return <CategoryPage />;
      case Tab.CART:
        return <CartPage />;
      case Tab.MY_JD:
        return <UserPage />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
};

export default App;