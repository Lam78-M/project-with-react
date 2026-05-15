import React, { use } from 'react';
import toast from 'react-hot-toast';

const toolsPromise = fetch('/data.json').then(res => res.json())



const ProductCard = ({cards, setCards}) => {
  const tools = use(toolsPromise)
  console.log(tools)

   const  addToCart =(tool) =>{
    const isExist = cards.find(c=> c.id == tool.id);
    if(isExist){
      toast.error('Item is already in cart')
      return;
    }
    setCards([...cards, tool])
    toast.success('Item added to cart')
    
   }

   const isInCard = (id)=>  cards.find(cart => cart.id == id)

  return (
    <div>
    
  <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto  mt-25 mb-40'>
         {
        tools.map(tool => <div key={tool.id}>

<div className="card  bg-[#ffc0cb20] shadow-sm">
  <div className="card-body">
    {/* ]]]]]]]]]]]]]]] */}
    <div className='flex items-center justify-between'>
          <img 
            src={tool.image }
            alt={tool.name}
            className="2-10 rounded-lg object-cover "
          />
          <span
  className={`badge text-md p-3 
    ${tool.tagType === "new" && "bg-green-100 text-green-600"}
    ${tool.tagType === "best seller" && "bg-yellow-100 text-yellow-600"}
    ${tool.tagType === "popular" && "bg-purple-100 text-purple-600"}
  `}
>
  {tool.tagType}
</span>
    </div>
  
    <div className="flex justify-between">
      <h2 className="text-2xl font-bold">{tool.name} </h2>
      <span className="text-xl">${tool.price} </span>
    </div>
    <h1 className='text-md' >{tool.description} </h1>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{tool.features1}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{tool.features2}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{tool.features3}</span>
      </li>
      
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div className="mt-6">
      <button
      disabled={isInCard(tool.id)}
       onClick={ ()=> addToCart(tool)} className="btn btn-primary btn-block">Buy Now</button>
    </div>
  </div>
</div>


        </div>)
      }
  </div>
   
    </div>
  );
};

export default ProductCard;