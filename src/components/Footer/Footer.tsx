import React, { useEffect, useState } from 'react';
import styles from './footer.module.css';
import { BiHome } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { GiBasket } from "react-icons/gi";
import { MapStateToPropsFooter } from './FooterContainer';
import Item from './item';

const Footer: React.FC<MapStateToPropsFooter > = (props) => {

    const [activeBasket, setActiveBasket] = useState(false)

    useEffect(() => {
        if(props.number > 0) {
            setActiveBasket(true)
        }
    }, [props.number])


    return (
        <footer className={styles.header}>
        <Item path="/Home" children={BiHome} title="Главная" />
        <Item path="/Gallery" children={RiGalleryLine} title="Галерея" />
        <Item path="/Contacts" children={MdCall} title="Контакты" />
        <Item path="/Basket" children={GiBasket} title="Корзина" activeBasket={activeBasket} number={props.number} />
        </footer>
    )
}

export default Footer