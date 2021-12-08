import React, { useState } from "react";
import FormBasket from "./FormBasket";

type PropsType = {
    order: boolean
}

let FormBasketContainer: React.FC<PropsType> = (props) => {
    const [name, setName] = useState({name: ''})
    const [surname, setSurname] = useState({surname: ''})
    const [phone, setPhone] = useState({phone: Number('')})
    const [email, setEmail] = useState({email: ''})

    let handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    let handleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName({name: event.target.value})
    } 

    let handleSurnameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSurname({surname: event.target.value})
    } 

    let handlePfoneChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone({phone: Number(event.target.value)})
    } 

    let handleEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail({email: event.target.value})
    } 

    const handleButton = (name: string, surname: string, phone: number, email: string) => {
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