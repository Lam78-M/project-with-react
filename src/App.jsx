
import { Suspense } from 'react';
import './App.css'
import Cardsection from './component/hero-section/Cardsection';
import Hero from './component/hero-section/Hero'
import Lastpart from './component/hero-section/lastpart';
import Lastsection from './component/hero-section/lastsection';
import Mainmid from './component/hero-section/mainmid'
import MidSsection from './component/hero-section/midSsection'
import Sidecart from './component/hero-section/sidecart';
import Transparent from './component/hero-section/transparent';

const fetchCard = async()=>{
  const res = await fetch("/data.json");
  return res.json()
}


function App() {
  const cardPromise  = fetchCard()

  
  
  return (
    <div>
      <Hero/>
      <MidSsection/>
      <Mainmid/>
     <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
       <Cardsection cardPromise={cardPromise}/>
     </Suspense>
      <Lastpart/>
      <Transparent/>
      <Lastsection/>
      <Sidecart/>
    </div>
  );

     
  
};

export default App
