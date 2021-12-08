import React from "react";
import styles from "./FormBasket.module.css"

let FormBasket = (props) => {
    return (
                <div className={styles.formbasket__container }>
                    <form className={styles.formbasket__form} onSubmit={props.handleSubmit}>
                        <div className={styles.form__item  + " " +  styles.one}> 
                            <span>Ваше Имя:</span>
                            <input type="text" placeholder="Иван"  value={props.name} onChange={props.handleNameChanged} />
                        </div>
                        <div className={styles.form__item + " " + styles.two}> 
                            <span>Ваше Фамилие:</span>
                            <input type="text" placeholder="Смирнов" value={props.surname} onChange={props.handleSurnameChanged} />
                        </div>
                        <div className={styles.form__item  + " " + styles.three}> 
                            <span>Ваш номер телефона:</span>
                            <input id="name" type="tel" placeholder="+7(988)888-88-88" value={props.phone} onChange={props.handlePfoneChanged} />
                        </div>
                        <div className={styles.form__item + " " + styles.four}> 
                            <span>Ваша электронная почта:</span>
                            <input id="name" type="text" placeholder="ivan@ivan.ru" value={props.email} onChange={props.handleEmailChanged} />
                        </div>
                        <div className={styles.form__item + " " + styles.five}> 
                            <button className="button" onClick={() => props.handleButton(props.name, props.surname, props.phone, props.email)}>Заказать</button>
                        </div>
                    </form>
                </div>
    )
}

export default FormBasket