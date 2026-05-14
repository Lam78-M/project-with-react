import { Suspense, useState } from 'react';
import './App.css'
import Cardsection from './component/hero-section/Cardsection';
import Hero from './component/hero-section/Hero';
import Lastpart from './component/hero-section/lastpart';
import Lastsection from './component/hero-section/lastsection';
import Mainmid from './component/hero-section/mainmid'
import MidSsection from './component/hero-section/midSsection'
import Sidecart from './component/hero-section/sidecart';
import Transparent from './component/hero-section/transparent';
import ProductCard from './component/hero-section/ProductCard';
import ShowingCards from './component/ShowingCards';
import { Toaster } from 'react-hot-toast';




function App  ()  {                   

const [cards, setCards] = useState([])


  return (



    <div>
      <Toaster></Toaster>

      <Hero cards={cards}  />

      <MidSsection />
      <Mainmid />
   
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Cardsection cards={cards} setCards={setCards} />
      </Suspense>
    
        

      <Lastpart />
      <Transparent />
      <Lastsection />
  

    </div>
  );
};

export default App;