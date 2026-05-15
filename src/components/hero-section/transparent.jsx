import React from 'react';

const Transparent = () => {
    return (
        <div className='w-[75%] mx-auto mt-[150px]'>
            <h1 className='text-5xl font-bold text-center '>Simple, Transparent Pricing</h1>
            <p className='text-[#627382] text-center mt-[10px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-6 mt-[60px]'>
                {/* helllo brother */}
            <div className="card  bg-base-100 shadow-lg rounded-3xl ">
  <div className="card-body">
    <span className="text-3xl font-bold">Starter</span>
    <div className="">
      <h2 className="">Perfect for getting started</h2>
     <p className='text-4xl'>$0<span className='text-[20px]'>/Month</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic template</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      <li className="opacity-50">
        <br></br>
      </li>
      <li className="opacity-50">
        <br></br>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full">Get Started Free</button>
      {/* ///////////////// */}
    </div>
  </div>
</div>
<div className="card  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-lg rounded-3xl relative  ">
  <div className="card-body">
    <span className="absolute -top-4 left-1/2 -translate-x-1/2 
  bg-[#edee9b] px-4 py-1 rounded-full font-bold text-[#BB4B00] shadow-md text-[18px]"><span className='
    '>Most Popular</span></span>
    <div className="">
      <h2 className="text-3xl font-bold text-white">Pro</h2>
      <p className='text-white'>Best for professionals</p>
      <p className='text-4xl text-white'>$29<span className='text-[20px] text-white'>/Month</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Advanced analytics</span>
      </li>
    </ul>
    <br></br>
    <button className="btn   btn-block text-black rounded-full border-none "><span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-bold'>Start Pro Trial</span></button>
  </div> 
</div>
<div className="card  bg-base-100 shadow-lg rounded-3xl">
  <div className="card-body">
    <span className="text-3xl font-bold">Enterprise</span>
    <div className="">
      <h2 className="">For teams and businesses</h2>
      <p className='text-4xl'>$99<span className='text-[20px]'>/Month</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
    </ul>
    <br></br>
 
    <button className="btn  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full">Contact Sales</button>
  </div>
</div>
            </div>
        </div>
    );
};

export default Transparent;