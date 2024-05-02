import React from 'react'
import { Link } from 'react-router-dom'
// import '../styles/menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
