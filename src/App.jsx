
import './App.css'
import Hero from './component/hero-section/hero'
import Lastpart from './component/hero-section/lastpart';
import Lastsection from './component/hero-section/lastsection';
import Mainmid from './component/hero-section/mainmid'
import MidSsection from './component/hero-section/midSsection'
import Sidecart from './component/hero-section/sidecart';
import Transparent from './component/hero-section/transparent';

  


function App() {
  
  return (
    <div>
      <Hero/>
      <MidSsection/>
      <Mainmid/>
      <Lastpart/>
      <Transparent/>
      <Lastsection/>
      <Sidecart/>
    </div>
  );

     
  
};

export default App
