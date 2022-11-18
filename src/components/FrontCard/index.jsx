import img from '../../assets/bg-card-front.png'
import css from'./Style.module.css'

export function FrontCard({ number, name, mm, yy }) {

   




    return (

        <div className="absoluteBox">
            <div className={css.card} id="front">
                <img src={img} alt="Frente do cartão" />
                
                <div className={css.cardElements}>
                    <div className={css.circles}>
                        <div></div>
                        <div></div>
                    </div>
                    <span className={css.cardNumber}> {number}</span>
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