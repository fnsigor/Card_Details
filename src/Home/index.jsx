import React, { useState } from 'react'
import { Form } from '../components/Form'
import { FrontCard } from '../components/FrontCard'
import { BackCard } from '../components/BackCard'
import { Thanks } from '../components/Thanks'
import './style.css'

export function Home() {

    const [cardHolder, setCardHolder] = useState("Jane Appleseed")

    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
    const [cardMonth, setCardMonth] = useState("MM")
    const [cardYear, setCardYear] = useState("YY")
    const [cvc, setCvc] = useState('000')
    const [detailsStatus, setDetailsStatus] = useState(false)


    const handleChange = event => {
    

        setCardHolder(event.target.value);
    };


    const nameInput = <input type="text" minLength={6} maxLength={24} placeholder="e.g Jane Appleseed" id="cardholder" onChange={handleChange}  />
    const numberInput = <input type="text" minLength={16} maxLength={16} placeholder="e.g 1234 5678 9123 0000" id="cardnumber" onChange={e => setCardNumber(e.target.value)} />
    const monthInput = <input type='text' minLength={2} maxLength={2} id='start' aria-labelledby='lblRange' placeholder="MM" onChange={e => setCardMonth(e.target.value)} />
    const yearInput = <input type='text' minLength={2} maxLength={2} id='end' aria-labelledby='lblRange' placeholder="YY" onChange={e => setCardYear(e.target.value)} />

    const cvcInput = <input type="text" minLength={3} maxLength={3} title="please enter number only" placeholder="e.g 123" id="cvc" onChange={e => setCvc(e.target.value)} />


    return (
        <>
            <div className="cards-container">
                <FrontCard name={cardHolder} number={cardNumber} mm={cardMonth} yy={cardYear} />
                <BackCard cvc={cvc} />
            </div>

            <Form nameInput={nameInput} numberInput={numberInput} monthInput={monthInput} yearInput={yearInput} cvcInput={cvcInput} />




        </>
    )
}