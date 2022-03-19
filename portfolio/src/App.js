import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import './App.css';

function App() {

  const [displayedContent, setDisplayedContent] = useState('about');



  return (
    <div className="App">
      <Header
        displayedContent={displayedContent}
        setDisplayedContent={setDisplayedContent} />
      <main>
        {displayedContent === 'about' && <About />}
        {displayedContent === 'portfolio' && <Portfolio />}
        {displayedContent === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
