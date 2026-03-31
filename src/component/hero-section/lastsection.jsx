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
                <button className='px-4 py-2 rounded-full bg-white '><span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-bold'>Explore Products</span></button>

                 <button className="p-1 rounded-full border border-white">
                       <span className="flex items-center justify-center  px-4 py-2  rounded-full ">
                        
                         <span className=" text-white ">
                           Watch Demo
                         </span>
                       </span>   
                     </button>
             </div>
             <p className='text-center text-white  pt-2'>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
          {/* fgdddddffffffffffff */}
           <div className='grid md:grid-cols-2 lg:grid-cols-5  justify-center  bg-[#101727] gap-10 px-35 py-16  '>
           <div className='space-y-4'>
           <h2 className='text-white  pt-20 text-4xl font-bold'>DigiTools</h2>
           <p className='text-white md:line-clamp-3 lg:line-clamp-5' >Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.</p>
           </div>
          
            <ul className='text-white  pt-20 space-y-3 pl-15 '>
            <li className='text-2xl font-bold '>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Templates</li>
            </ul>
            <ul className='text-white  pt-20 space-y-3 pl-15 '>
            <li className='text-2xl font-bold'>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            </ul> 
          
            <ul className='text-white  pt-20 space-y-3 pl-15'>
            <li className='text-2xl font-bold'>Resources</li>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Comunity</li>
            <li>Contact</li>
            </ul>
            <div className='text-white pt-20 space-y-3 pl-15'>
            <p className='text-2xl font-bold'>Social Links</p>
            <div className='flex gap-6 pt-2'>
            <img className='bg-white rounded-2xl p-1' src={Insta} alt="" />  
            <img className='bg-white rounded-2xl p-1' src={Fb} alt="" />
            <img className='bg-white rounded-2xl p-1' src={Xst} alt="" />
            </div>
            </div>    
            </div>
           
      <div className='bg-[#101727]'>
      <div className='flex justify-center items-center' >
            <hr className='text-white w-[90%] opacity-15'></hr>
         </div>
         <div className='grid md:grid-cols-1 lg:grid-cols-2 justify-center p-12'>
         <div>
            <p className='text-white pl-10'>© 2026 Digitools. All rights reserved.</p>
         </div>
         <div className='text-white flex flex-wrap justify-end gap-5 space-y-4 '>
            <p className=''>Privacy Policy</p>
            <p className=''>Terms of Service</p>
            <p className='pr-10'>Cookies</p> 
         </div>
         </div>  
       </div>
       </div>
    );
};

export default Lastsection;