import { useState } from 'react';
import './App.css';


import Hero from "./components/hero-section/Hero";
import Cardsection from './components/hero-section/Cardsection';
import Lastpart from './components/hero-section/lastpart';
import Lastsection from './components/hero-section/lastsection';
import Mainmid from './components/hero-section/mainmid';
import MidSsection from './components/hero-section/midSsection';
import Transparent from './components/hero-section/transparent';
import ShowingCards from './components/ShowingCards';

import { Toaster } from 'react-hot-toast';

function App() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState("home");

  return (
    <div>
      <Toaster />
      {page === "home" && (
        <>
          <Hero cards={cards} setPage={setPage} />
         <MidSsection></MidSsection>
          <Mainmid />
          <Cardsection cards={cards} setCards={setCards} setPage={setPage} />
          <Lastpart />
          <Transparent />
          <Lastsection />
        </>
      )}
      {page === "cart" && (
        <ShowingCards
          cards={cards}
          setCards={setCards}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;