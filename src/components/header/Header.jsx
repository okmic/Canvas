import React from 'react';
import  styles from './header.module.css';
import { NavLink } from 'react-router-dom';



const Header = (props) => {
    return (
        <header>
            <div className={styles.linksCont}>
                <NavLink to="/Home" activeClassName={styles.activeClassName}><snan className={styles.linksHead}>Главная</snan></NavLink>
                <NavLink to="/Paintings" activeClassName={styles.activeClassName}><snan className={styles.linksHead}>Картины</snan></NavLink>
                <NavLink to="/Contact" activeClassName={styles.activeClassName}><snan className={styles.linksHead}>Контакты</snan></NavLink>
            </div>

        </header>
    )
}

export default Header