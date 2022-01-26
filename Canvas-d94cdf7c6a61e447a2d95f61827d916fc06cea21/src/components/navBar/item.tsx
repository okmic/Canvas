import React from "react"
import { NavLink } from "react-router-dom"

type PropsType = {
    path: string
    children: any
    title: string
}
const Item: React.FC<PropsType> = (props) => <NavLink to={props.path}>
<div className="links__container_header" >
  <div className="links__icon_header">
    <props.children />
  </div>
  <div className="links__description_header" >
    <span>{props.title}</span>
  </div>
</div>
</NavLink>

export default Item