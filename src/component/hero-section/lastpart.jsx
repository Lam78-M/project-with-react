import React from 'react';
import User from "../hero-section/assets/user.png"
import Package from "../hero-section/assets/rocket.png"
import Rocket from "../hero-section/assets/package.png"


const Lastpart = () => {
    return (
      <div className='w-[75%]  mx-auto'>
          <div className=''>
            <h1 className='text-4xl font-bold text-black text-center mt-[100px]'>Get Started In 3 Steps</h1>
            <p className='text-[#627382] text-center mt-[15px] '>
                Start using premium digital tools in minutes, not hours.
                
            </p>
        </div>
         <div className='grid  md:grid-cols-3 lg:grid-cols-3 mt-[50px] items-center justify-between gap-5 '>
            <div className='bg-[#FFFFFF] shadow-2xl rounded-2xl px-8 py-20'>
                <div className='flex justify-center'>
                    <img src={User} alt="" className='items-center bg-[#8000803b] w-20 h-20 p-2  rounded-full' />
                </div>
                <p className='text-xl text-center font-bold mt-[10px]'>Create Account</p>
                <p  className='text-[#627382] text-center mt-[10px] '>Sign up for free in seconds. No credit card <br></br>required to get started.</p>


            </div>
              <div className='bg-[#FFFFFF] shadow-2xl rounded-2xl px-8 py-20'>
               <div className='flex justify-center'>
                    <img src={Package} alt="" className='items-center bg-[#8000803b] w-20 h-20 p-3   rounded-full' />
                </div>
                <p className='text-xl text-center font-bold mt-[10px]'>Choose Products</p>
                <p className='text-[#627382] text-center mt-[10px]'>Sign up for free in seconds. No credit card <br></br>required to get started.</p>
            </div>
              <div className='bg-[#FFFFFF] shadow-2xl rounded-2xl px-8 py-20'>
               <div className='flex justify-center'>
                    <img src={Rocket} alt="" className='items-center bg-[#8000803b] w-20 h-20 p-2   rounded-full' />
                </div>
                <p className='text-xl text-center font-bold mt-[10px]'>Start Creating</p>
                <p  className='text-[#627382] text-center mt-[10px]'>Sign up for free in seconds. No credit card <br></br>required to get started.</p>
            </div>
         </div>

      </div>
    );
};

export default Lastpart;