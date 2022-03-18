import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {

  const [projectsSelected, setProjectsSelected] = useState(false);

  return (
    <div className="App">
      <Header
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected} />
      <main>
        {projectsSelected ? (
          <Projects></Projects>
        ) : (
          <About></About>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
