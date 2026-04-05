
import {useState} from 'react'
import logo from '../assets/logo.png'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header(){
	return(
	<header className="header">
	<div className="logo-container">
	<img src={logo} alt="company-logo" className="logo-img"/>
	</div>
	
      <div className="search-container">
        <div className="search-wrapper"> 
          <input 
            type="text" 
            placeholder="Search books, authors..." 
            className="search-input" 
          />
		  </div>
		  </div>
		  
	<nav>
        <NavLink to="/login" style={({ isActive }) => ({ marginRight: '15px', color: isActive ? 'gold' : 'white' })}>
          Login
        </NavLink> 
        <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}>
          Cart (0)
        </NavLink>
      </nav>
		  
		  
      
	</header>
	)
}	
export default Header
	