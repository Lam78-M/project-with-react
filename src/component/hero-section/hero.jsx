import React from 'react';
import Icon from "../hero-section/assets/Icon (Stroke) (1).png"

const hero = () => {
    return (
        <div>
              <div className="navbar bg-base-100 mx-auto  max-w-[90%] lg:max-w-[75%]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        <li><a className='text-[#101727]'>Products</a></li>
      <li><a className='text-[#101727]'>Features</a></li>
      <li><a className='text-[#101727]'>Pricing</a></li>
      <li><a className='text-[#101727]'>Testimonials</a></li>
      <li><a className='text-[#101727]'>FAQ</a></li>
      </ul>
    </div>
    <a className="font-bold text-2xl lg:text-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-[#101727]'>Products</a></li>
      <li><a className='text-[#101727]'>Features</a></li>
      <li><a className='text-[#101727]'>Pricing</a></li>
      <li><a className='text-[#101727]'>Testimonials</a></li>
      <li><a className='text-[#101727]'>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <img src={Icon} alt="" />
    <button>Login</button>
    <a className="btn rounded-full  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white ">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default hero;