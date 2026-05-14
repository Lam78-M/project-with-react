import React from 'react';

const ShowingCards = ({cards}) => {

   const total = cards.reduce((sum, card) => sum + card.price, 0);
    console.log(total)
    
    
    if(cards.length == 0 ){
        return <div>  </div>
    }
    return (

<div className="container mx-auto mt-20 mb-30">

  <h1 className="text-3xl font-bold mb-6 text-center">
    Your Cart
  </h1>

  <div className="space-y-4">

    {cards.map(card => (

      <div key={card.id} className="card bg-white shadow-md rounded-xl p-4">

        <div className="flex items-center gap-4">

          {/* LEFT IMAGE */}
          <img 
            src={card.image }
            alt={card.name}
            className="2-10 rounded-lg object-cover "
          />

          {/* MIDDLE CONTENT */}
          <div className="flex-1">
            <h2 className="text-xl font-bold">{card.name}</h2>
            <p className="text-gray-600 text-lg">${card.price}</p>
          </div>

          {/* RIGHT REMOVE BUTTON */}
          <button
            className="text-red-500 font-semibold hover:underline"
            onClick={() => console.log("remove clicked")}
          >
            Remove
          </button>

        </div>

      </div>

    ))}

  </div>
</div>

    );
};

export default ShowingCards;