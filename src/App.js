import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
