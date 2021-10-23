import React from "react";
import styles from "./FormBasket.module.css"

let FormBasket = (props) => {
    return (
                <div className={styles.formbasket__container }>
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <span>Ваше Имя:</span>
                            <input type="text" placeholder="Иван"  value={props.name} onChange={props.handleNameChanged} />
                        </div>
                        <div>
                            <span>Ваше Фамилие:</span>
                            <input type="text" placeholder="Смирнов" value={props.surname} onChange={props.handleSurnameChanged} />
                        </div>
                        <div>
                            <span>Ваш номер телефона:</span>
                            <input id="name" type="tel" placeholder="+7(988)888-88-88" value={props.phone} onChange={props.handlePfoneChanged} />
                        </div>
                        <div>
                            <span>Ваша электронная почта:</span>
                            <input id="name" type="text" placeholder="ivan@ivan.ru" value={props.email} onChange={props.handleEmailChanged} />
                        </div>
                        <div>
                            <button onClick={() => props.handleButton(props.name, props.surname, props.phone, props.email)}>Заказать</button>
                        </div>
                    </form>
                </div>
    )
}

export default FormBasket