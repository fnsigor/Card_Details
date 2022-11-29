import img from '../../assets/bg-card-front.png'
import css from './Style.module.css'
import React, { useState } from 'react'
import { mask as masker } from 'remask'


export function FrontCard({ number, name, mm, yy, frontFloat }) {

    const [mask, setMask] = useState(["SSSS SSSS SSSS SSSS"]);
    const maskedNumber= masker(number, mask)




    return (

        <div className={ `absoluteBox x ${frontFloat ? "animateFrontCard" : "pausedAnimation" }` } id="front">
            <div className={css.card} >
                <img src={img} alt="Frente do cartão" />

                <div className={css.cardElements}>
                    <div className={css.circles}>
                        <div></div>
                        <div></div>
                    </div>
                    <span className={css.cardNumber}> {maskedNumber}</span>
                    <div className={css.cardNameExp}>
                        <span className={css.cardName}>{name}</span>
                        <div className={css.cardExp}>
                            <span>{mm}</span>
                            &#47;
                            <span>{yy}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}