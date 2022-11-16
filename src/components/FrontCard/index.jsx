import img from '../../assets/bg-card-front.png'
import './style.css'

export function FrontCard({ number, name, mm, yy }) {

   




    return (

        <div className="absolute-box">
            <div className="card" id="front">
                <img src={img} alt="Frente do cartão" />
                
                <div className="card-elements">
                    <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" /><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" /></svg>
                    <span className="card-number"> {number}</span>
                    <div className="card-name-exp">
                        <span className="card-name">{name}</span>
                        <div className="card-exp">
                            <span className="card-mm">{mm}</span>
                            &#47;
                            <span className="card-yy">{yy}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}