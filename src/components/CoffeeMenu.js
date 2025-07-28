import React from 'react';
import './CoffeeMenu.css';

function CoffeeMenu() {
  const coffeeItems = [
    { name: 'Cappuccino', regular: '4.00', large: '5.00' },
    { name: 'Flat White', regular: '4.00', large: '5.00' },
    { name: 'Mocha', regular: '5.00', large: '6.00' },
    { name: 'Piccolo', regular: '3.50', large: '-' },
    { name: 'Latte', regular: '4.00', large: '5.00' },
    { name: 'Long Black', regular: '4.00', large: '5.00' },
    { name: 'Espresso/Short Black', regular: '3.00 (1 shot)', large: '4.00 (2 shots)' }
  ];

  const milkOptions = ['Soy', 'Almond', 'Lactose Free', 'Oat', 'Skim'];

  return (
    <div className="coffee-menu-container">
      <table className="coffee-menu">
        <thead>
          <tr>
            <th>Coffee</th>
            <th>Regular</th>
            <th>Large</th>
          </tr>
        </thead>
        <tbody>
          {coffeeItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.regular}</td>
              <td>{item.large !== '-' ? `$${item.large}` : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="additional-options">
        <h4>Additional Milk Options (+$0.50)</h4>
        <div className="options-list">
          {milkOptions.map((option, index) => (
            <span key={index} className="option-item">{option}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoffeeMenu;
