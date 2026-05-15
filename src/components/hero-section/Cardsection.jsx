import { useState } from 'react';
import SelectedCard from './SelectedCard';
import ProductCard from './ProductCard';
import ShowingCards from '../ShowingCards';

const Cardsection = ({ cards, setCards }) => {

const [activeTab, setActiveTab] = useState('tools');

  return (
    <div>
      <div className='w-[75%] mx-auto mb-20'>
        <h1 className='font-bold text-black text-4xl text-center mt-50 mb-5'>
          Premium Digital Tools
        </h1>
        <p className='text-center'>
          Choose from our curated collection of premium digital products designed
          <br />
          to boost your productivity and creativity.
        </p>
        <div className='flex items-center justify-center mt-5'>
          <div className="flex items-center bg-white border border-gray-200 rounded-full p-2 w-fit shadow-sm">
            {/* Products Button------------------- */}
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300
              ${
                activeTab === 'tools'
                  ? 'text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 shadow-[0_8px_25px_rgba(168,85,247,0.45)] scale-105'
                  : 'text-indigo-950 hover:bg-gray-100'
              }`}
            >
              Products
            </button>

            {/* Cart Button----------------------- */}
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300
              ${
                activeTab === 'cards'
                  ? 'text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 shadow-[0_8px_25px_rgba(168,85,247,0.45)] scale-105'
                  : 'text-indigo-950 hover:bg-gray-100'
              }`}
            >
              Cart {cards.length}
            </button>

          </div>

        </div>

        {
          activeTab === 'tools'
            ? <ProductCard cards={cards} setCards={setCards} />
            : <ShowingCards setCards={setCards} cards={cards} />
        }
        
      </div>
    </div>
  );
};

export default Cardsection;