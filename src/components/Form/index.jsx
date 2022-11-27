import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import React, { useState } from 'react'
import css from'./Index.module.css'


export function Form({ setCardHolder, setCardNumber, setCardMonth, setCvc, setCardYear, setDetailsStatus }) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        criteriaMode: "all"
    });


    return (
        <form onSubmit={handleSubmit( e => setDetailsStatus(true))}>
            <div className={css.inputBox}>
                <label htmlFor="cardholder" >Cardholder name</label>
                <input
                    maxLength={23} placeholder="e.g Jane Appleseed"
                    {...register("holder", {
                        onChange: e => setCardHolder(e.target.value),
                        required: "This input is required.",
                        pattern: {
                            value: /^[A-Za-z\s]+$/i,
                            message: "Alphabetical characters only"
                        },
                        minLength: {
                            value: 3,
                            message: "This input must exceed 2 characters"
                        },
                    })} />
                <ErrorMessage

                    errors={errors}
                    name="holder"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                            : null;
                    }}
                />
            </div>

            <div  className={css.inputBox}>
                <label htmlFor="cardnumber" >Card Number</label>
                <input
                    maxLength={16} placeholder="e.g 1234 5678 9123 0000"
                    {...register("number", {
                        onChange: e => setCardNumber(e.target.value),
                        required: "This input is required.",
                        pattern: {
                            value: (/^[0-9]+$/),
                            message: "This input is number only."
                        },
                        minLength: {
                            value: 16,
                            message: "This input must have 16 characters"
                        },
                    })} />
                <ErrorMessage
                    errors={errors}
                    name="number"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                            : null;
                    }}
                />
            </div>

            <div className={css.numbers}>

                <div className={css.containerInputs}>

                    <div className={`${css.inputBox} ${css.exp}`} >
                        <label id='lblRange'>EXP. DATE &#40;MM&#47;YY&#41;</label>
                        <div className={css.expInputs}>
                            <input
                                maxLength={2} placeholder="MM"
                                {...register("month", {
                                    onChange: e => setCardMonth(e.target.value),
                                    required: "Month input is required.",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Month input is number only."
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Month input must have 2 characters"
                                    },
                                })} />
                            <input
                                maxLength={2} placeholder="YY"
                                {...register("year", {
                                    onChange: e => setCardYear(e.target.value),
                                    required: "Year input is required.",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Year input is number only."
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Year input must have 2 characters"
                                    },
                                })} />

                        </div>
                    </div>

                    <div className={`${css.inputBox} ${css.cvc}`}>
                        <label >CVC</label>
                        <input
                            maxLength={3} placeholder="e.g 123"
                            {...register("cvc", {
                                onChange: e => setCvc(e.target.value),
                                required: "CVC input is required.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "CVC input is number only."
                                },
                                minLength: {
                                    value: 3,
                                    message: "CVC input must have 3 characters"
                                },
                            })} />
                    </div>
                </div>

                <div className={css.containerErrors}>
                    <ErrorMessage
                        errors={errors}
                        name="month"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                                : null;
                        }}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="year"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                                : null;
                        }}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="cvc"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                                : null;
                        }}
                    />
                </div>
            </div>


            <button>Confirm</button>
        </form>
    )
}