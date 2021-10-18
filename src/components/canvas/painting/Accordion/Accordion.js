import React, { useState } from "react";
import styles from "./Accordion.module.css"
import DescriptionAccord from "./DescriptionAccord";

const Accordion = (props) => {

    const [descriptionAccord, setDescriptionAccord] = useState(false)

    return(
        <div className={styles.accordion_container}> 
            <div className={styles.accordion_title} >
               <div >
                    <li>{props.paintingName}</li>
                    <li>{props.price} &#8381;</li>
                </div>
                <div className={styles.title_event_accordion} onClick={() => setDescriptionAccord(!descriptionAccord)}>
                    <li>Описание {descriptionAccord ? <span>&#10006;</span> : <span>&#9660;</span> }</li>
                    
                </div> 
            </div>
        <DescriptionAccord descriptionAccord={descriptionAccord} setDescriptionAccord={setDescriptionAccord} {...props} />
        </div>
    )
}

export default Accordion