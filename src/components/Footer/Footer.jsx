import React from 'react';
import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { GiBasket } from "react-icons/gi";

const Footer = (props) => {
    return (
        <footer className={styles.header}>
        <NavLink to="/Home" activeClassName={styles.activeLink}>
            <div className={styles.links__container}>
            <div className={styles.links__icon}>
            <BiHome  />
            </div>
            <div className={styles.links__description}>
                <span>Главная</span>
            </div>
            </div>
        </NavLink>
        <NavLink to="/Gallery" activeClassName={styles.activeLink}>
            <div className={styles.links__container}>
            <div className={styles.links__icon}>
                <RiGalleryLine />
            </div>
            <div className={styles.links__description}>
                <span>Галерея</span>
            </div>
            </div>
        </NavLink>

        <NavLink to="/Contacts" activeClassName={styles.activeLink}>
            <div className={styles.links__container}>
            <div className={styles.links__icon}>
            <MdCall />
            </div>
            <div className={styles.links__description}>
                <span>Контакты</span>
            </div>
            </div>
        </NavLink>

        <NavLink to="/Basket" activeClassName={styles.activeLink}>
            <div className={styles.links__container}>
            <div className={styles.links__icon}>
            <GiBasket />
            </div>
            <div className={styles.links__description}>
                <span>Корзина</span>
            </div>
            </div>
        </NavLink>
        </footer>
    )
}

export default Footer