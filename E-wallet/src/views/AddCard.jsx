//import './AddCart.scss'
import CardForm from "../components/CardForm/CardForm"
import Header from "../components/Header/Header"
import './AddCard.scss'


function AddCard() {

    return(
        <section className="add-card">
            <Header title={ 'ADD A NEEW BANK CARD' } />
           <article className="add-card__img">
           </article>
            <CardForm />
           
        </section>
    )
}

export default AddCard