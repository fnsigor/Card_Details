import img from '../../assets/bg-card-back.png'
import css from'./Style.module.css'

export function BackCard({cvc, backFloat}) {

    return (
        <div  className={ `absoluteBox notBugBackCardAnimation ${backFloat ? "animate" : "pausedAnimation" }` }  id="back">
            <div className={css.card} >
                <img src={img} alt="Verso do cartão" />
                <span className={css.cvv}>{cvc}</span>
            </div>
        </div>
    )
}