import React from 'react';
import { Home, LayoutGrid, ShoppingCart, User } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: Tab.HOME, label: '首页', icon: Home },
    { id: Tab.CATEGORY, label: '分类', icon: LayoutGrid },
    { id: Tab.CART, label: '购物车', icon: ShoppingCart },
    { id: Tab.MY_JD, label: '我的', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe pt-1 z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="flex flex-col items-center justify-center w-full h-full active:scale-95 transition-transform duration-100"
            >
              <div className="relative">
                <Icon
                  size={24}
                  className={isActive ? 'text-red-600 fill-current' : 'text-gray-500'}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {item.id === Tab.CART && (
                   <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full border border-white">2</span>
                )}
              </div>
              <span className={`text-[10px] mt-0.5 font-medium ${isActive ? 'text-red-600' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;