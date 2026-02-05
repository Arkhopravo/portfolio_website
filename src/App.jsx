// App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Experience from './components/Experience';
import Shell from './components/Shell';



function App() {
  return (
    <Shell>
      <Home />
      <Experience />
      <About />
      <Work />
      <Contact />
    </Shell>
  );
}

export default App;
