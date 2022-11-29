import React, { useState } from 'react'
import { Form } from '../components/Form'
import { FrontCard } from '../components/FrontCard'
import { BackCard } from '../components/BackCard'
import { Thanks } from '../components/Thanks'
import css from './index.module.css'

export function Home() {

    const [cardHolder, setCardHolder] = useState("Jane Appleseed")
    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
    const [cardMonth, setCardMonth] = useState("MM")
    const [cardYear, setCardYear] = useState("YY")
    const [cvc, setCvc] = useState('000')
    const [detailsStatus, setDetailsStatus] = useState(false)

    const [frontFloat, setFrontFloat] = useState(false)
    const [backFloat, setBackFloat] = useState(false)

    function resetCard() {
        setCardHolder("Jane Appleseed")
        setCardNumber("0000 0000 0000 0000")
        setCardMonth("MM")
        setCardYear("YY")
        setCvc('000')
    }

    return (
        <main>
            <div className={css.cardsContainer}>           
                <div className={css.space}>
                    <FrontCard
                        frontFloat={frontFloat}
                        name={cardHolder}
                        number={cardNumber}
                        mm={cardMonth}
                        yy={cardYear}
                    />

                    <BackCard
                        cvc={cvc}
                        backFloat={backFloat}
                    />
                </div>
            </div>
            <div className={css.content}>

                {detailsStatus
                    ? <Thanks setDetailsStatus={setDetailsStatus} resetCard={resetCard} />
                    : <Form
                        setBackFloat={setBackFloat}
                        setFrontFloat={setFrontFloat}

                        setCardHolder={setCardHolder}
                        setCardNumber={setCardNumber}
                        setCardMonth={setCardMonth}
                        setCvc={setCvc}
                        setCardYear={setCardYear}
                        setDetailsStatus={setDetailsStatus}
                    />
                }
            </div>



        </main>
    )
}