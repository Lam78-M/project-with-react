import React from 'react';

const Lastsection = () => {
    return (
       <div>
         <div className='w-full h-[400px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-[100px] p-6 '>
             <h1 className='text-center pt-[80px] text-3xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
             <p className='text-center text-white mt-[25px]'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>

             <div className='flex gap-3 justify-center mt-[40px]'>
                <button className='px-4 py-2 rounded-full bg-white'>Explore Products</button>

                 <button className="p-[1px] rounded-full border border-white">
                       <span className="flex items-center justify-center  px-4 py-2  rounded-full ">
                        
                         <span className=" text-white">
                           Watch Demo
                         </span>
                       </span>   
                     </button>
             </div>
             <p className='text-center text-white  mt-[10px]'>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
           <div className='grid grid-cols-5 bg-[#101727] '>
           <div>
             <h2 className='text-white'>DigiTools</h2>
            <p className='text-white' >Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
           </div>
           <div className='text-white'>
             <li>Product</li>
             <li>Features</li>
             <li>Pricing</li>
             <li>Templates</li>
             <li>Templates</li>
           </div>
           <div className='text-white'>
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
           </div>
           <div className='text-white'>
            <li>Resources</li>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Comunity</li>
            <li>Contact</li>
           </div>
           <div className='text-white'>
            <p>   </p>
           </div>
           </div>
           {/* ddf */}
         
       </div>
    );
};

export default Lastsection;