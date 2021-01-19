// import './App.css';
import React, { Component } from 'react';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';

class App extends Component {
  render() {
    return (
      <div class="page-wrapper">
        <Header />
        <Banner />
        <WhyChooseUs />
        <Services />
        {/* <Technologies /> */}
        <AboutUs />
        <Career />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
