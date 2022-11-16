
import './style.css'
import { ErrorMessage } from "@hookform/error-message";

export function Form({ holderInput, numberInput, monthInput, yearInput, cvcInput, submit, errors }) {




    return (
        <form onSubmit={submit()}>
            <div className="inputBox">
                <label htmlFor="cardholder" >Cardholder name</label>
                {holderInput}
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

            <div className="inputBox">
                <label htmlFor="cardnumber" >Card Number</label>
                {numberInput}
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

            <div className=" numbers">

                <div className="containerInputs">

                    <div className="exp inputBox"  >
                        <label id='lblRange'>EXP. DATE &#40;MM&#47;YY&#41;</label>
                        <div className="exp-inputs">
                            {monthInput}
                            {yearInput}
                        </div>
                    </div>

                    <div className="inputBox cvc">
                        <label htmlFor="cvc" >CVC</label>
                        {cvcInput}
                    </div>
                </div>

                <div className="containerErrors">
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