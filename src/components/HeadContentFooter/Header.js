import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './images/logo.svg';
import items from "../UserCompactViews/menu";
import './css/Header.css';

class Header extends Component {
  
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <ul className="Menu">
              {
                items && items.map(
                  (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                )
              }
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;