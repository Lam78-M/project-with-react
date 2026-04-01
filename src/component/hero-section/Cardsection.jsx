import React, {use} from 'react';
import ProductCard from './ProductCard';


const Cardsection = ({cardPromise}) => {
    console.log(cardPromise);
    const cards = use(cardPromise);
    console.log(cards)
    return (
        <div className='w-[75%] mx-auto'>
            cards: {cards.length}
            <ProductCard cards={cards} />
        </div>
    );
};

export default Cardsection;