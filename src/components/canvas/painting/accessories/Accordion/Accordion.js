import React from "react";
import styles from "./Accordion.module.css"


const Accordion = (props) => {
    return(
        <div className={styles.accordion_container}> 
            <div className={styles.accordion_title} >
               <div >
                    <li>{props.paintingName}</li>
                    <li>{props.price} &#8381;</li>
                    <li>{props.description.meterial}</li>
                    <li>{props.description.size}</li>  
                </div>
                
                <div className={styles.title_event_accordion} >

                </div> 
            </div>
        
        </div>
    )
}

export default Accordion