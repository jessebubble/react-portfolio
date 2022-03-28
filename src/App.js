import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Nav from './components/Nav';


function App() {

  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
