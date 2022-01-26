import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Breadcrumbs.module.css'

type PropsType = {
    linkOne?: string
    linkTwo?: string
    activeLink?: string
}

let Breadcrumbs: React.FC<PropsType> = (props) => {
    return(
        <div className={s.breadcrumbs__container}>
            <ul>
                {props.linkOne &&
                <li>
                    <NavLink to="/Home"><span>{props.linkOne}</span></NavLink> 
                    <span>/</span>
                </li>
                }
                {props.linkTwo &&
                <li>
                    <NavLink to="/Gallery"><span>{props.linkTwo}</span></NavLink>
                    <span>/</span> 
                </li>
                }
                <li className={s.breadcrumbs__active}>
                    <span>{props.activeLink}</span>
                </li>
            </ul>
        </div>
    )
} 

export default Breadcrumbs