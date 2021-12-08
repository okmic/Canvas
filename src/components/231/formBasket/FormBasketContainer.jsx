import React, { useState } from "react";
import FormBasket from "./FormBasket";

let FormBasketContainer = (props) => {
    const [name, setName] = useState({name: ''})
    const [surname, setSurname] = useState({surname: ''})
    const [phone, setPhone] = useState({phone: ''})
    const [email, setEmail] = useState({email: ''})

    let handleSubmit = (event) => {
        event.preventDefault()
    }

    let handleNameChanged = (event) => {
        setName({name: event.target.value})
    } 

    let handleSurnameChanged = (event) => {
        setSurname({surname: event.target.value})
    } 

    let handlePfoneChanged = (event) => {
        setPhone({phone: event.target.value})
    } 

    let handleEmailChanged = (event) => {
        setEmail({email: event.target.value})
    } 

    const handleButton = (name, surname, phone, email) => {
        let array = [
            { "Имя пользователя: ": name },
            {"Фамилия пользователя: ": surname},
            {"Телефон: ": phone},
            {"Email: " : email}
        ]
        console.log(array);
    }


    return <FormBasket 
    order={props.order}
    name={name.name}
    surname={surname.surname}
    phone={phone.phone}
    email={email.email}  
    handleSubmit={handleSubmit}
    handleNameChanged={handleNameChanged}
    handleSurnameChanged={handleSurnameChanged}
    handlePfoneChanged={handlePfoneChanged}
    handleEmailChanged={handleEmailChanged}
    handleButton={handleButton}
    />
}

export default FormBasketContainer