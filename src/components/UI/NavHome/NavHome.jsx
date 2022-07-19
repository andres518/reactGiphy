import React from 'react'
import { Link } from 'react-router-dom'


export const NavHome = () => {
  return (
    <div>
    <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Search">Search</Link></li>
            <li><Link to="/Tenor">Api Tenor</Link></li>
            <li><Link to="/Count">Count</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Giphy">Giphy</Link></li>
           
    </nav>
    
    
    </div>
    
  )
}




