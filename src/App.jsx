import { useState } from 'react';
import './App.css';

import Cardsection from './component/hero-section/Cardsection';
import Hero from './component/hero-section/Hero';
import Lastpart from './component/hero-section/lastpart';
import Lastsection from './component/hero-section/lastsection';
import Mainmid from './component/hero-section/mainmid';
import MidSsection from './component/hero-section/midSsection';
import Transparent from './component/hero-section/transparent';
import ShowingCards from './component/ShowingCards';

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