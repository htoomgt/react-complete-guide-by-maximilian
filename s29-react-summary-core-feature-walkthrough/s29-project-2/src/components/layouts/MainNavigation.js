import React from 'react';
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav  >
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