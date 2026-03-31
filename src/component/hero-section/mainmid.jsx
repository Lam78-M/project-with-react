import React from 'react';

const Mainmid = () => {
    return (
        <div>
     <div className='w-full p-5 lg:h-[300px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-[250px] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-30'>

  {/* Item 1 */}
  <div className='flex flex-col lg:flex-row items-center gap-5'>
    <div className='text-center lg:text-left'>
      <h1 className='text-5xl text-white font-bold'>50K+</h1>
      <p className='text-white'>Active Users</p>
    </div>

    {/* 🔥 Divider */}
    <hr className='w-20 h-[2px] bg-white border-none lg:w-[2px] lg:h-25 lg:ml-45 opacity-40' />
  </div>

  {/* Item 2 */}
  <div className='flex flex-col lg:flex-row items-center gap-5'>
    <div className='text-center lg:text-left'>
      <h1 className='text-5xl text-white font-bold'>200+</h1>
      <p className='text-white'>Premium Tools</p>
    </div>

    {/* 🔥 Divider */}
    <hr className='w-20 h-[2px] bg-white border-none lg:w-[2px] lg:h-25  lg:ml-45 opacity-40' />
  </div>

  {/* Item 3 */}
  <div className='text-center lg:text-left'>
    <h1 className='text-5xl text-white font-bold'>4.9</h1>
    <p className='text-white'>Rating</p>
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