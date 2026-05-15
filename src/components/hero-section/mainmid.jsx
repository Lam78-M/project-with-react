import React from 'react';

const Mainmid = () => {
    return (
        <div>
     <div className='w-full p-5 lg:h-[300px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-[250px] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-30'>

  <div className='flex flex-col lg:flex-row items-center gap-5'>
    <div className='text-center lg:text-left'>
      <h1 className='text-5xl text-white font-bold'>50K+</h1>
      <p className='text-white'>Active Users</p>
    </div>

    <hr className='w-20 h-[2px] bg-white border-none lg:w-[2px] lg:h-25 lg:ml-45 opacity-40' />
  </div>
  <div className='flex flex-col lg:flex-row items-center gap-5'>
    <div className='text-center lg:text-left'>
      <h1 className='text-5xl text-white font-bold'>200+</h1>
      <p className='text-white'>Premium Tools</p>
    </div>
    <hr className='w-20 h-[2px] bg-white border-none lg:w-[2px] lg:h-25  lg:ml-45 opacity-40' />
  </div>
  <div className='text-center lg:text-left'>
    <h1 className='text-5xl text-white font-bold'>4.9</h1>
    <p className='text-white'>Rating</p>
  </div>

</div>
        </div>
    );
};

export default Mainmid