import React from "react";
import styles from "./FormBasket.module.css"

type PropsType = {
    name: string
    surname: string
    phone: string
    email: string
    order: boolean
    handleSubmit: (event: React.MouseEvent<HTMLFormElement>) => any
    handleNameChanged: (event: React.ChangeEvent<HTMLInputElement>) => any
    handleSurnameChanged: (event: React.ChangeEvent<HTMLInputElement>) => any
    handlePfoneChanged: (event: React.ChangeEvent<HTMLInputElement>) => any
    handleEmailChanged: (event: React.ChangeEvent<HTMLInputElement>) => any
    handleButton: (name: string, surname: string, phone: string, email: string) => any
}

let FormBasket: React.FC<PropsType> = (props) => {
    return (
                <div className={styles.formbasket__container }>
                    <form className={styles.formbasket__form} onSubmit={props.handleSubmit}>
                        <div className={styles.form__item  + " " +  styles.one}> 
                            <span>First Name:</span>
                            <input type="text" placeholder="First Name"  value={props.name} onChange={props.handleNameChanged} />
                        </div>
                        <div className={styles.form__item + " " + styles.two}> 
                            <span>Last Name:</span>
                            <input type="text" placeholder="Last Name" value={props.surname} onChange={props.handleSurnameChanged} />
                        </div>
                        <div className={styles.form__item  + " " + styles.three}> 
                            <span>Your phone:</span>
                            <input id="name" type="tel" placeholder="+7(988)888-88-88" value={props.phone} onChange={props.handlePfoneChanged} />
                        </div>
                        <div className={styles.form__item + " " + styles.four}> 
                            <span>Your email:</span>
                            <input id="name" type="text" placeholder="alex@alex.com" value={props.email} onChange={props.handleEmailChanged} />
                        </div>
                        <div className={styles.form__item + " " + styles.five}> 
                            <button className="button" onClick={() => props.handleButton(props.name, props.surname, props.phone, props.email)}>To order</button>
                        </div>
                    </form>
                </div>
    )
}

export default FormBasket