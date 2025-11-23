import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/7] bg-gray-200 overflow-hidden">
      {/* Simplified Static Banner for demo - in real app this would be a slider */}
      <img 
        src="https://picsum.photos/seed/jd_banner1/800/350" 
        alt="Banner 1" 
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-100"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
      </div>
    </div>
  );
};

export default Banner;