import React from 'react';
import Books from "../hero-section/assets/products/writing_2327400 1.png"

const Sidecart = () => {
    return (
        <div>
            <div className='w-[75%] mx-auto'>
            <h1 className='text-4xl font-bold text-center'>Premium Digital Tools</h1>
            <p className='text-center'>Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
            <div className='flex justify-center items-center'>
                <button className='px-4 py-2 '>Products</button>
                <button className='px-4 py-2 '>Cart(0)</button>
            </div>  
        </div>
        {/* start */}
        <div className='w-[75%] mx-auto'>
<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
<br></br>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>
        </div>
        {/* finsish       */}
        </div>
    );
};

export default Sidecart;