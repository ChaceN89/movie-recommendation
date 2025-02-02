import React from "react";

const TailwindBreakpoints: React.FC = () => {
  return (
    <div className="opacity-30 fixed top-0 left-0 m-1 p-1 z-[100] font-mono text-white h-10 w-10 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-black">
      <div className="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
    </div>
  );
};

export default TailwindBreakpoints;
