import React from 'react';
import Writing from "../hero-section/assets/products/writing_2327400 1.png"

const ProductCard = ({cards}) => {
    console.log(cards, "cards")
    return (
        <div>  
            {
                cards.map(card => {
                    console.log(card, 'card')
                    return <div className=''>
                        <div className="card  bg-white shadow-lg rounded-2xl relative  ">
  <div className="card-body ">
   
    <span className="absolute bottom-100 right-4  
  bg-[#edee9b] px-4 py-1 rounded-full font-bold text-[#BB4B00] shadow-md text-[15px]"><span className='
    '>{card.bar}</span></span>
    <div className="">
       <img className='shadow-2xl rounded-full p-2 w-12' src={card.image} alt="" />
      <h2 className="text-3xl font-bold text-black">{card.name}</h2>
      <p className='text-black'>{card.description}</p>
      <p className='text-4xl text-black'>{card.price}<span className='text-[20px] text-black'>{card.period}</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>{card.features1}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>{card.features2}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>{card.features3}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Advanced analytics</span>
      </li>
    </ul>
    <br></br>
    <button className="btn   btn-block text-black rounded-full border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  "><span className='text-white font-bold'>Start Pro Trial</span></button>
  </div> 
</div>
                    </div>
                })
            }
            <div className="card  bg-white shadow-lg rounded-2xl relative  ">
  <div className="card-body">
    <span className="absolute bottom-100 right-4  
  bg-[#edee9b] px-4 py-1 rounded-full font-bold text-[#BB4B00] shadow-md text-[15px]"><span className='
    '>Most Popular</span></span>
    <div className="">
       <img className='shadow-2xl rounded-full p-2 w-12' src={Writing} alt="" />
      <h2 className="text-3xl font-bold text-black">Pro</h2>
      <p className='text-black'>Generate high-quality content, blogs, and<br></br>marketing copy in seconds with advanced AI.</p>
      <p className='text-4xl text-black'>$29<span className='text-[20px] text-black'>/Month</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-black'>Advanced analytics</span>
      </li>
    </ul>
    <br></br>
    <button className="btn   btn-block text-black rounded-full border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  "><span className='text-white font-bold'>Start Pro Trial</span></button>
  </div> 
</div>
        </div>
    );
};

export default ProductCard;