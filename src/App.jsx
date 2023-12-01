// App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

import Testimonies from './components/Testimonies';
import Contact from './components/Contact';
import Work from './components/Work';
import Experience from './components/Experience';



function App() {
  return (
  <main className='font-serif'>
    {/* <Navbar/> */}
    <Home/>
    <About/>
    
    <Experience/>
    <Work/>
    <Testimonies/>
    <Contact/>
  </main>
  );
}

export default App;
