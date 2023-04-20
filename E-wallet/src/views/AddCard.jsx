//import './AddCart.scss'
import CardForm from "../components/CardForm/CardForm"
import Header from "../components/Header/Header"
import './AddCard.scss'


function AddCard() {

    return(
        <section className="add-card">
            <Header title={ 'ADD A NEW BANK CARD' } />
                <p className="add-card__type">NEW CARD</p>
                    <article className="add-card__img">
                        <img className='add-card__chip' src='./src/assets/assets/chip-dark.svg' />
                        <img className='add-card__logo' src='./src/assets/assets/vendor-bitcoin.svg' />
                        <h2 className="add-card__x">XXXX XXXX XXXX XXXX</h2>
                        <p className='card__name'>CARDHOLDER NAME</p>
                        <p className='add-card__fname'>FIRSTNAME LASTNAME</p>
                        <p className='card__date'>VALID THRU</p>
                        <p className='add-card__mmyy'>MM/YY</p>

                    </article>
                    
            <CardForm />
           
        </section>
    )
}

export default AddCard