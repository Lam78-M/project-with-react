import React from 'react';
import Insta from "../hero-section/assets/Instagram (1).png"
import Fb from  "../hero-section/assets/Facebook.png"
import Xst from "../hero-section/assets/fi_5968958.png"

const Lastsection = () => {
    return (
       <div className=' mx-auto'>
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
          {/* fgdddddffffffffffff */}
           <div className='grid md:grid-cols-2 lg:grid-cols-5  justify-center  bg-[#101727] gap-10 px-35 py-16  '>
           <div className='space-y-4'>
             <h2 className='text-white mt-[100px] text-4xl font-bold'>DigiTools</h2>
            <p className='text-white ' >Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.</p>
           </div>
          
             <ul className='text-white mt-[100px] space-y-3 '>
                <li className='text-2xl font-bold'>Product</li>
             <li>Features</li>
             <li>Pricing</li>
             <li>Templates</li>
             <li>Templates</li>
             </ul>
           <ul className='text-white mt-[100px] space-y-3  '>
            <li className='text-2xl font-bold'>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            </ul> 
          
           <ul className='text-white mt-[100px] space-y-3 '>
               <li className='text-2xl font-bold'>Resources</li>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Comunity</li>
            <li>Contact</li>
           </ul>
           <div className='text-white mt-[100px] space-y-3 '>
            <p className='text-2xl font-bold'>Social Links</p>
            <div className='flex gap-6 mt-[5px]'>
                <img className='bg-white rounded-2xl p-1' src={Insta} alt="" />
                <img className='bg-white rounded-2xl p-1' src={Fb} alt="" />
                <img className='bg-white rounded-2xl p-1' src={Xst} alt="" />
            </div>
           </div>
           </div>
           {/* ddf */}
         
       </div>
    );
};

export default Lastsection;