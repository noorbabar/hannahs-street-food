import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CoffeeMenu from './components/CoffeeMenu';
import DrinksMenu from './components/DrinksMenu';
import FoodMenu from './components/FoodMenu';
import IceCreamMenu from './components/IceCreamMenu';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <section id="food" className="menu-section">
          <h2>Food Menu</h2>
          <FoodMenu />
        </section>
        
        <section id="coffees" className="menu-section">
          <h2>Coffee Menu</h2>
          <CoffeeMenu />
        </section>
        
        <section id="drinks" className="menu-section">
          <h2>Drinks</h2>
          <DrinksMenu />
        </section>
        
        <section id="icecreams" className="menu-section">
          <h2>Ice Creams</h2>
          <IceCreamMenu />
        </section>
      </main>
      
      <section id="contact">
        <div className="contact-container">
          <h2>Contact Hannah's Street Food</h2>
          <p>Have questions or want to book us for your next event? Get in touch!</p>
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;