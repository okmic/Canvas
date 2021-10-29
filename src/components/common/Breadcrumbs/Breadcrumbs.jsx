import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Breadcrumbs.module.css'

let Breadcrumbs = (props) => {
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