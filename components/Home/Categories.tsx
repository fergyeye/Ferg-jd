import React from 'react';
import { ShoppingBag, Smartphone, Shirt, Coffee, Gamepad2, Sofa, Car, Gift, Ticket, Zap } from 'lucide-react';
import { Category } from '../../types';

const categories: Category[] = [
  { id: '1', name: '京东超市', iconColor: 'bg-green-500', iconName: 'ShoppingBag' },
  { id: '2', name: '数码电器', iconColor: 'bg-blue-500', iconName: 'Smartphone' },
  { id: '3', name: '京东服饰', iconColor: 'bg-pink-500', iconName: 'Shirt' },
  { id: '4', name: '京东生鲜', iconColor: 'bg-lime-500', iconName: 'Coffee' },
  { id: '5', name: '京东到家', iconColor: 'bg-teal-500', iconName: 'Car' },
  { id: '6', name: '充值缴费', iconColor: 'bg-orange-500', iconName: 'Zap' },
  { id: '7', name: '京东国际', iconColor: 'bg-purple-500', iconName: 'Gift' },
  { id: '8', name: '领券中心', iconColor: 'bg-red-500', iconName: 'Ticket' },
  { id: '9', name: '家具', iconColor: 'bg-amber-600', iconName: 'Sofa' },
  { id: '10', name: '玩3C', iconColor: 'bg-indigo-500', iconName: 'Gamepad2' },
];

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag, Smartphone, Shirt, Coffee, Car, Zap, Gift, Ticket, Sofa, Gamepad2
};

const Categories: React.FC = () => {
  return (
    <div className="bg-white pb-2 pt-1">
      <div className="grid grid-cols-5 gap-y-3 px-2 py-3">
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.iconName];
          return (
            <div key={cat.id} className="flex flex-col items-center justify-center gap-1">
              <div className={`w-10 h-10 rounded-full ${cat.iconColor} flex items-center justify-center text-white shadow-sm`}>
                <IconComponent size={20} />
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;