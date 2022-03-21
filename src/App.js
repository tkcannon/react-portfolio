import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
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
        {displayedContent === 'resume' && <Resume />}
        {displayedContent === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
