import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import './App.css';

function App() {


  return (
    <div className="App">
      <Header />
      <main>
        <Projects></Projects>
      </main>
      <Footer />
    </div>
  );
}

export default App;
