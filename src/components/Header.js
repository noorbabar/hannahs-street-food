import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
    <img src="/logo192.png" alt="Hannah's Street Food Logo" className="logo" />
    <h1>Hannah's Street Food</h1>
      <p className="subtitle">Delicious food & drinks served with a smile</p>
    </header>
  );
}

export default Header;