import React, { useState, useEffect } from 'react';
import { ScanLine, MessageSquareText, Search, Camera } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-red-600 shadow-md' : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-3 py-2 h-12 gap-3">
        {/* Left Icon: Scan */}
        <button className="text-white flex flex-col items-center min-w-[30px]">
          <ScanLine size={20} />
          <span className="text-[10px] mt-0.5">扫一扫</span>
        </button>

        {/* Search Bar */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <span className="text-red-600 font-bold text-sm pr-2 border-r border-gray-300">JD</span>
            <Search size={14} className="text-gray-400 ml-2" />
          </div>
          <input
            type="text"
            placeholder="iPhone 16 Pro Max"
            className="w-full h-8 pl-20 pr-8 bg-white rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
           <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <Camera size={16} className="text-gray-400" />
          </div>
        </div>

        {/* Right Icon: Messages */}
        <button className="text-white flex flex-col items-center min-w-[30px]">
          <MessageSquareText size={20} />
          <span className="text-[10px] mt-0.5">消息</span>
        </button>
      </div>
    </header>
  );
};

export default Header;