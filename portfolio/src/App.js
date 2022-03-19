import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
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
        {displayedContent === 'projects' && <Projects />}
        {displayedContent === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
