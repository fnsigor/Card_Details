import img from '../../assets/bg-card-back.png'
import React, {useState} from 'react'


import './style.css'

export function BackCard({cvc}) {




    return (
        <div className="absolute-box">
            <div className="card" id="back">
                <img src={img} alt="Verso do cartão" />
                <span className="cvv">{cvc}</span>
            </div>
        </div>
    )
}