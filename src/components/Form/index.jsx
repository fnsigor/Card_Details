
import './style.css'


export function Form({nameInput, numberInput, monthInput, yearInput, cvcInput}) {




    return (
        <form action="">
            <div className="inputBox">
                <label htmlFor="cardholder" >Cardholder name</label>
                {nameInput}
            </div>

            <div className="inputBox">
                <label htmlFor="cardnumber" >Card Number</label>
                {numberInput}
            </div>

            <div className="inputBox numbers">
                
                <div className=" exp">
                    <label id='lblRange'>EXP. DATE &#40;MM&#47;YY&#41;</label>
                    <div className="exp-inputs">
                        {monthInput}
                        {yearInput}
                    </div>
                </div>

                <div className=" cvc">
                    <label htmlFor="cvc" >CVC</label>
                   {cvcInput}
                </div>
            </div>


            <button>Confirm</button>
        </form>
    )
}