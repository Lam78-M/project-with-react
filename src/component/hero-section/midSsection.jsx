import React from 'react';
import Rectangle from "../hero-section/assets/Rectangle 4.png"
import Arrow from "../hero-section/assets/Play.png"

const MidSsection = () => {
    return (
        <div className='container mx-auto mt-[60px] space-y-4'>
            <button className='flex justify-between gap-2 py-2 px-4 bg-[#E1E7FF] rounded-full '>
                <img className='w-[10px]' src={Rectangle} alt="" />
                <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-bold' >New: AI-Powered Tools Available</span></button>


                <h1 className='text-6xl font-bold mt-[10px] line-clamp-2'>Supercharge YourDigital Workflow</h1>
                    <p className=''>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
</p>
        <div className='flex'>
            <button className='btn rounded-full  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
        
       
             <button   class=" p-[3px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
  <span class=" flex gap-2 block px-3 py-1 bg-white rounded-full">
    <img className='w-4' src={Arrow} alt="" /> Watch Demo
  </span>
</button>
        
        </div>

  
 
        </div>
        
    );
};

export default MidSsection;