import React from 'react';

const Mainmid = () => {
    return (
        <div>
            <div className=' w-full  p-5  lg:h-[200px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-[250px] flex flex-col lg:flex-row justify-center
         items-center gap-10 lg:gap-50 '>
           <div>
             <h1 className='text-5xl  text-white font-bold '>50K+</h1>
             <p className='text-white'>Active Users</p>
           </div>

           <div>
             <h1 className='text-5xl text-white font-bold '>200+</h1>
             <p className='text-white'>Premium Tools</p>
           </div>
             <div>
             <h1 className='text-5xl text-white font-bold '>4.9</h1>
             <p className='text-white'>Premium Tools</p>
           </div>
        </div>
          <div className='w-[75%] mx-auto'>
             <h1 className='font-bold text-black text-4xl  text-center mt-[150px]'>Premium Digital Tools</h1>
           <p className='text-center mt-[10px] '>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
           <div className='flex items-center justify-center gap-2 mt-[10px]'>
            <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl px-4 py-2 text-white'>Products</button>
            <button className='px-4 py-2'>Cart (0)</button>
           </div>
          </div>
        </div>
    );
};

export default Mainmid