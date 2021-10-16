import React, { useEffect, useState } from "react";
import styles from "./Accordion.module.css"
import Aos from "aos";
import 'aos/dist/aos.css'

const Accordion = (props) => {

    const [description, setDescription] = useState(false)
    useEffect(()=> {
        Aos.init({
            duration: 1100
        })
    })


    return(
        <div className={styles.accordion_container}> 
            <div className={styles.accordion_title} >
               <div >
                    <li>{props.paintingName}</li>
                    <li>{props.price} &#8381;</li>
                </div>
                <div className={styles.title_event_accordion} onClick={() => setDescription(!description)}>
                    <li>Описание {description ? <span>&#10006;</span> : <span>&#9660;</span> }</li>
                    
                </div> 
            </div>
            {description &&
            <div className={styles.accordion_description} data-aos="zoom-out-down">
                <p>{props.description}</p>
            </div>
            }
        </div>
    )
}

export default Accordion