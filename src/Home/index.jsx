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

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        criteriaMode: "all"
    });

    const holderInput = <input
        maxLength={23} placeholder="e.g Jane Appleseed"
        {...register("holder", {
            onChange: e => setCardHolder(e.target.value),
            required: "This input is required.",
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Alphabetical characters only"
            },
            minLength: {
                value: 3,
                message: "This input must exceed 2 characters"
            },
        })}

    />

    const numberInput = <input
        maxLength={16} placeholder="e.g 1234 5678 9123 0000"
        {...register("number", {
            onChange: e => setCardNumber(e.target.value),
            required: "This input is required.",
            pattern: {
                value: /\d+/,
                message: "This input is number only."
            },
            minLength: {
                value: 16,
                message: "This input must have 16 characters"
            },
        })} />

    const monthInput = <input
        maxLength={2} placeholder="MM"
        {...register("month", {
            onChange: e => setCardMonth(e.target.value),
            required: "Month input is required.",
            pattern: {
                value: /\d+/,
                message: "Month input is number only."
            },
            minLength: {
                value: 2,
                message: "Month input must have 2 characters"
            },
        })} />
    const yearInput = <input
        maxLength={2} placeholder="YY"
        {...register("year", {
            onChange: e => setCardYear(e.target.value),
            required: "Year input is required.",
            pattern: {
                value: /\d+/,
                message: "Year input is number only."
            },
            minLength: {
                value: 2,
                message: "Year input must have 2 characters"
            },
        })} />

    const cvcInput = <input
        maxLength={3} placeholder="e.g 123"
        {...register("cvc", {
            onChange: e => setCvc(e.target.value),
            required: "CVC input is required.",
            pattern: {
                value: /\d+/,
                message: "CVC input is number only."
            },
            minLength: {
                value: 3,
                message: "CVC input must have 2 characters"
            },
        })} />


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

            <Form
                holderInput={holderInput}
                numberInput={numberInput}
                monthInput={monthInput}
                yearInput={yearInput}
                cvcInput={cvcInput}
                submit={handleSubmit}
                errors={errors}
            />




        </>
    )
}