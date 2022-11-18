import img from '../../assets/bg-card-back.png'
import React, {useState} from 'react'


import css from'./Style.module.css'

export function BackCard({cvc}) {




    return (
        <div className="absolute-box">
            <div className={css.card} id="back">
                <img src={img} alt="Verso do cartão" />
                <span className={css.cvv}>{cvc}</span>
            </div>
        </div>
    )
}