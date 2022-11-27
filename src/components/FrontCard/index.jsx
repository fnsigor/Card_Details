import img from '../../assets/bg-card-front.png'
import css from'./Style.module.css'
import React, {useState} from 'react'
import { mask as masker } from 'remask'


export function FrontCard({ number, name, mm, yy }) {

    const [mask, setMask] = useState(["9999 9999 9999 9999"]);
    const maskedNumber= masker(number, mask)




    return (

        <div className="absoluteBox">
            <div className={css.card} id="front">
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