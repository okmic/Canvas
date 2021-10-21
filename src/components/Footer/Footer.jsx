import React, { useEffect, useState } from 'react';
import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { GiBasket } from "react-icons/gi";

const Footer = (props) => {

    const [activeBasket, setActiveBasket] = useState(false)

    useEffect(() => {
        if(props.namber > 0) {
            setActiveBasket(true)
        }
    }, [props.namber])


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
            {activeBasket && props.namber > 0 ?
            <sup className={!activeBasket ? styles.links__sup : styles.links__sup + " " + styles.active}>
                {"+" + props.namber}
            </sup>
            : ""
            } 
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