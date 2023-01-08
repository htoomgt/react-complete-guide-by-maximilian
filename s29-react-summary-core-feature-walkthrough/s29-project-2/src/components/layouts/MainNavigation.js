import React from 'react';
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/new-meetup"> New Meet Up</Link></li>
                <li><Link to="/favorites"> Favorites</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation