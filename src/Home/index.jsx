import React, { useState } from 'react'
import { Form } from '../components/Form'
import { FrontCard } from '../components/FrontCard'
import { BackCard } from '../components/BackCard'
import { Thanks } from '../components/Thanks'
import './style.css'


import { useForm } from "react-hook-form";


export function Home() {

    const [cardHolder, setCardHolder] = useState("Jane Appleseed")
    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
    const [cardMonth, setCardMonth] = useState("MM")
    const [cardYear, setCardYear] = useState("YY")
    const [cvc, setCvc] = useState('000')
    const [detailsStatus, setDetailsStatus] = useState(false)

    function resetCard(){
        setCardHolder("Jane Appleseed")
        setCardNumber("0000 0000 0000 0000")
        setCardMonth("MM")
        setCardYear("YY")
        setCvc('000')
    }

    return (
        <>
            <div className="cards-container">
                <FrontCard
                    name={cardHolder}
                    number={cardNumber}
                    mm={cardMonth}
                    yy={cardYear}
                />
                <BackCard cvc={cvc} />
            </div>

            {detailsStatus
                ? <Thanks setDetailsStatus={setDetailsStatus} resetCard={resetCard} />
                : <Form
                    setCardHolder={setCardHolder}
                    setCardNumber={setCardNumber}
                    setCardMonth={setCardMonth}
                    setCvc={setCvc}
                    setCardYear={setCardYear}
                    setDetailsStatus={setDetailsStatus}
                />
            }


        </>
    )
}