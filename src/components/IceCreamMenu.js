import React from 'react';

function IceCreamMenu() {
  const iceCreamItems = [
    { name: 'Icey Pops', price: '4.00' },
    { name: 'Crown', price: '4.00' },
    { name: 'Choc Bars', price: '4.00' },
  ];

  return (
    <div className="menu-items">
      <div className="menu-item">
        <h3>Frozen Treats</h3>
        {iceCreamItems.map((item, index) => (
          <div key={index} className="price-box">
            <span>{item.name}</span>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IceCreamMenu;
