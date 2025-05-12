
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        {/* Yellow corner */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-demla-lime"></div>
        
        {/* Green arcs */}
        <div className="absolute w-full h-full">
          <div className="absolute top-0 right-0 w-5/6 h-5/6 border-r-8 border-t-8 rounded-tr-full border-demla-green-100"></div>
          <div className="absolute top-[15%] right-[10%] w-4/6 h-4/6 border-r-8 border-t-8 rounded-tr-full border-demla-green-200"></div>
          <div className="absolute top-[30%] right-[20%] w-3/6 h-3/6 border-r-8 border-t-8 rounded-tr-full border-demla-green-300"></div>
          <div className="absolute top-[45%] right-[30%] w-2/6 h-2/6 border-r-8 border-t-8 rounded-tr-full border-demla-green-400"></div>
          <div className="absolute top-[60%] right-[40%] w-1/6 h-1/6 border-r-8 border-t-8 rounded-tr-full border-demla-green-500"></div>
        </div>
      </div>
      <div className="mt-2 font-serif font-bold text-lg sm:text-xl uppercase tracking-wider">Demla</div>
      <div className="text-xs sm:text-sm uppercase tracking-widest text-demla-green-400">Foundation</div>
    </div>
  );
};

export default Logo;
