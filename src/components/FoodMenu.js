import React from 'react';

function FoodMenu() {
  const burgers = [
    { name: 'Chicken Burger', price: '14.00' },
    { name: 'Beef Burger', price: '14.00' },
    { name: 'Burger Meal', price: '20.00' }
  ];

  const fries = [
    { name: 'Small Fries', price: '6.00' },
    { name: 'Large Fries', price: '10.00' }
  ];

  const chips = [
    { name: 'Chip On A Stick', price: '7.00' }
  ];

  return (
    <div className="menu-items">
      <div className="menu-item">
        <h3>Burgers</h3>
        {burgers.map((item, index) => (
          <div key={index} className="price-box">
            <span>{item.name}</span>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </div>
      
      <div className="menu-item">
        <h3>Fries</h3>
        {fries.map((item, index) => (
          <div key={index} className="price-box">
            <span>{item.name}</span>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </div>
      
      <div className="menu-item">
        <h3>Chip On A Stick</h3>
        {chips.map((item, index) => (
          <div key={index} className="price-box">
            <span>{item.name}</span>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;