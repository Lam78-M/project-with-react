import React from 'react';
import toast from 'react-hot-toast';




const ShowingCards = ({cards, setCards}) => {

   const total = cards.reduce((sum, card) => sum + card.price, 0);
    console.log(total)

    const removeCartItem = (id) =>{
     const filteredCard = cards.filter(cart => cart.id !=id)
     console.log(filteredCard)
     setCards(filteredCard)
    }
    
    
    if(cards.length == 0 ){
        return <div className='container mx-auto items-center flex justify-center p-50 bg-gray-100 mt-20 mb-20 text-2xl'>
          No Cards found 
           </div>
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

          <img 
            src={card.image }
            alt={card.name}
            className="2-10 rounded-lg object-cover "
          />

          <div className="flex-1">
            <h2 className="text-xl font-bold">{card.name}</h2>
            <p className="text-gray-600 text-lg">${card.price}</p>
          </div>

          <button 
  onClick={() => {
    toast.success("Item Removed")
    removeCartItem(card.id)
  }} 
  className='btn rounded-2xl text-red-500'
>
  Remove
</button>

        </div>
      </div>

    ))}
<div className="flex justify-between items-center mt-8 border-t pt-4">

  <h1 className="text-2xl font-bold">
    Total Price
  </h1>

  <h1 className="text-2xl font-bold text-green-600">
    ${total}
  </h1>

</div>
<button 
  onClick={() => {toast.success("Checkout Successful")
     setCards([])
     }}
  className='btn btn-primary rounded-2xl w-full mt-6'
>
  Proceed to Checkout
</button>

  </div>
</div>

    );
};

export default ShowingCards;