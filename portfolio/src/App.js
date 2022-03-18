import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {


  return (
    <div className="App">
      <Header />
      <main>
        <About></About>
        <Projects></Projects>
      </main>
      <Footer />
    </div>
  );
}

export default App;
