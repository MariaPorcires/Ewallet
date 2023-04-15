import './Card.scss'
import chipDark from '../../assets/assets/chip-dark.svg'
import chipLight from '../../assets/assets/chip-light.svg'
import bitcoin from '../../assets/assets/vendor-bitcoin.svg'


function Card(props) {
    return(
        <section className='card' >
            <h2>{ props.nr }</h2>
            <p>{ props.name }</p>
            <p>{ props.date }</p>
            <p>{ props.vendor}</p>
            <img src={props.item ? props.item.Vendor[1]: bitcoin} alt="vendor logo" className='card__img'/>
            <img src={props.item ? props.item.Vendor[4]: chipDark} alt="chip"/> 
        </section>
    )
}

export default Card