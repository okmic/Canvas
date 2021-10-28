import React from "react";
import styles from "./Accordion.module.css"

let DescriptionAccord = (props) => {
    return(
        <div className={styles.description__container}>
        {props.descriptionAccord &&
        <div className={props.descriptionAccord ? styles.accordion_description + " " + styles.active : styles.accordion_description} >
            <p>{props.description}</p>
        </div>
        }
        </div>
    )
}
export default DescriptionAccord