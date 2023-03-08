import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/footer';
import Experience from './components/experience';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Work />
      <Contact />
      <Footer/>
       {/* <div className='h-[3500px]'></div> */}
    </div>
  );
};

export default App;
