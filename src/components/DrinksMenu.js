import React from 'react';
import '../App.css';

function DrinksMenu() {
  const coldDrinks = [
    { name: 'Large Slushy', price: '6.00' },
    { name: 'Small Slushy', price: '3.00' },
    { name: 'Iced Coffee', price: '6.00' },
    { name: 'Iced Chocolate', price: '6.00' },
    { name: 'Cans', price: '3.00' },
    { name: 'Water Bottle', price: '3.00' },
    { name: 'Energy Cans', price: '4.00' },
    { name: 'Prime', price: '8.00' },
    { name: 'Juice Box', price: '2.50' },
    { name: 'Energy Drinks', price: '5.00' },
  ];

  const hotDrinks = [
    { name: 'Hot Chocolate', price: '6.00' },
    { name: 'Green Tea', price: '5.00' },
    { name: 'Black Tea', price: '5.00' },
    { name: 'Chai Latte', price: '5.00' },
    { name: 'Kashmiri Chai', price: '5.00' },
    { name: 'Karak Chai', price: '5.00' },
    { name: 'Cardimon Chai', price: '5.00' },

  ];

  return (
    <div className="menu-items">
      <div className="menu-item">
        <h3>Cold Drinks</h3>
        {coldDrinks.map((drink, index) => (
          <div key={index} className="price-box">
            <span>{drink.name}</span>
            <span className="price">${drink.price}</span>
          </div>
        ))}
      </div>
      
      <div className="menu-item">
        <h3>Hot Drinks</h3>
        {hotDrinks.map((drink, index) => (
          <div key={index} className="price-box">
            <span>{drink.name}</span>
            <span className="price">${drink.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrinksMenu;