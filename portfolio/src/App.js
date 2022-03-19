import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {

  const [displayedContent, setDisplayedContent] = useState('about');

  const [projects] = useState([
    {
      title: 'project 1',
      description: 'project 1',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 2',
      description: 'project 2',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 3',
      description: 'project 3',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 4',
      description: 'project 4',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 5',
      description: 'project 5',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    }
  ], []);

  return (
    <div className="App">
      <Header
        displayedContent={displayedContent}
        setDisplayedContent={setDisplayedContent} />
      <main>
        {displayedContent === 'about' && <About />}
        {displayedContent === 'projects' &&
          <section className="project-section">
            <Project project={projects[0]}></Project>
            <Project project={projects[1]}></Project>
            <Project project={projects[2]}></Project>
            <Project project={projects[3]}></Project>
            <Project project={projects[4]}></Project>
          </section >
        }
        {displayedContent === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
