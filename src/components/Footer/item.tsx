import React from "react"
import { NavLink } from "react-router-dom"
import styles from './footer.module.css'

type PropsType = {
    path: string
    children: any
    number?: any
    title: string
    activeBasket?: boolean | undefined
}
const Item: React.FC<PropsType> = (props) =>  <NavLink to={props.path}>
            <div className={styles.links__container}>
            <div className={styles.links__icon}>
            <props.children /> 
            {props.activeBasket && props.number > 0 ?
            <sup className={!props.activeBasket ? styles.links__sup : styles.links__sup + " " + styles.active}>
                {"+" + props.number}
            </sup>
            : ""
            } 
            </div>
            <div className={styles.links__description}>
                <span>{props.title}</span>
            </div>
            </div>
</NavLink>

export default Item