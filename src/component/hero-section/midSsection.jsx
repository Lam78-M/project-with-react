import React from 'react';
import Rectangle from "../hero-section/assets/Rectangle 4.png"
import Arrow from "../hero-section/assets/Play.png"
import Banner from "../hero-section/assets/banner.png"

const MidSsection = () => {
    return (
        
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto mt-[100px] lg:mt-[100px] max-w-[90%] lg:max-w-[75%] gap-10">

  {/* LEFT TEXT */}
  <div className="space-y-8 text-center lg:text-left">
    
    <button className="flex items-center justify-center lg:justify-start gap-2 py-2 px-4 bg-[#E1E7FF] rounded-full mx-auto lg:mx-0">
      <img className="w-[10px]" src={Rectangle} alt="" />
      <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-bold text-sm lg:text-base">
        New: AI-Powered Tools Available
      </span>
    </button>

    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
      Supercharge Your
    </h1>

    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
      Digital Workflow
    </h1>

    <p className="text-[#627382] text-sm sm:text-base">
      Access premium AI tools, design assets, templates, and productivity<br></br> software—all in one place. Start creating faster today.<br></br>
      Explore Products
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
      
      <button className="rounded-full px-5 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm lg:text-base">
        Explore Products
      </button>

      <button className="p-[1px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
        <span className="flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full text-sm lg:text-base">
          <img className="w-4" src={Arrow} alt="" />
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-bold">
            Watch Demo
          </span>
        </span>
      </button>

    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img className="w-[550px] max-w-md lg:max-w-full h-auto object-contain" src={Banner} alt="" />
  </div>

</div>
    );
};

export default MidSsection;