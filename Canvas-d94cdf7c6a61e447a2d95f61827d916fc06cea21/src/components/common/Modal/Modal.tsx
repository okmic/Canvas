import React from "react";
import styles from './Modal.module.css'

type PropsType = {
    active: boolean
    setActive: (b: boolean) => void
    children: any
}

 const Modal: React.FC<PropsType> = ({active, setActive, children}) => {
     return(
            <div className={active ? styles.modal + " " + styles.active : styles.modal } onClick={() => setActive(false)}>
                <div className={active ? styles.modal__content + " " + styles.active : styles.modal__content } onClick={e => e.stopPropagation()}>
                <b className={styles.closeModal} onClick={() => setActive(false)} >&#10006;</b>
                   <div className={styles.content}> {children} </div>
                </div>
            </div>
     )
 }

export default Modal