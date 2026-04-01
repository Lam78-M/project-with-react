import React, { use, useState} from 'react';
import ProductCard from './ProductCard';
import SelectedCard from './SelectedCard';
import Hero  from './Hero';

const Cardsection = ({ cardPromise }) => {
  const cards = use(cardPromise);

  const [selectedType, setSelectedType] = useState("available");
; // 🔥 এখানে রাখো

  const handleAddToCart = () => {
    
  };


    return (
        <div>
            
             <div className='w-[75%] mx-auto'>
             <h1 className='font-bold text-black text-4xl  text-center mt-[150px]'>Premium Digital Tools</h1>
           <p className='text-center mt-[10px] '>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
           <div className='flex items-center justify-center  mt-[10px]'>

              
            <button onClick={() => setSelectedType("available")} className={` px-4 py-2 rounded-r-none rounded-l-2xl ${
    selectedType === "available"
      ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
      : "bg-gray-200 text-black"
  }`}>Products</button>
     
            <button onClick={() => setSelectedType("selected")} className={` px-5 py-2 rounded-l-none rounded-r-2xl ${selectedType === "selected"? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
      : "bg-gray-200 text-black"
  }`}>Cart (0)</button>
           </div>
          </div>
             <div>
     
      {selectedType === "available" && (
        <ProductCard cards={cards} onAddToCart={handleAddToCart} />
      )}

      {selectedType === "selected" && (
        <SelectedCard cart={cards} />
      )}
   
      </div>
  </div>
    );
};

export default Cardsection;