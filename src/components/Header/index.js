import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#DC143C' }} className="text-white p-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 m-0">🍄 Mario Universe</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#inicio">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#personagens">Personagens</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
