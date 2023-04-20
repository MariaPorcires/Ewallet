import Header from "../components/Header/Header";
import './Home.scss'
import { useSelector } from "react-redux";
import CardStack from "../components/CardStack/CardStack";
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate()

    const activeCard = useSelector((state) => state.activeCard)
    console.log(activeCard);
   

    function handleClick() {
        navigate("/AddCard")
    }
    

    return(
        <section className="home">
            <Header title={ 'E-WALLET' } />
                <p className="home__type">ACTIVE CARD</p>
                
                { activeCard?.nr ?
                <section className='home__img' style={{...activeCard?.vendor ? {background: `${activeCard.vendor[2] }`} : '' }}>
                    <img className='home__chip' src={ activeCard?.vendor ? activeCard.vendor[4] : '' } />
                    <h2 className='card__nr' style={{ ...activeCard?.vendor ? {color: `${activeCard.vendor[3] }` } : '' }}>{ activeCard?.vendor ? activeCard.nr : '' }</h2>
                    <p className='card__name'>CARDHOLDER NAME</p>
                    <p className='card__font' style={{...activeCard?.vendor ? {color: `${activeCard.vendor[3] }` } : '' }}>{ activeCard?.vendor ? activeCard.name : '' }</p>
                    <img className='card__logo' src={ activeCard?.vendor? activeCard.vendor[1] : '' } />
                    <p className='card__date'>VALID THRU</p>
                    <p style={{...activeCard?.vendor ? {color: `${activeCard.vendor[3] }` } : '' }}>{ activeCard?.vendor ? activeCard.date : '' }</p>
                </section>

               : <article className="add-card__img">
               <img className='add-card__chip' src='./src/assets/assets/chip-dark.svg' />
               <h2 className="add-card__x">NO ACTIVE CARD</h2>

           </article> }

            <section className="home__cardStack">
                <CardStack />
            </section>
            <button className="home__button" onClick={ handleClick }>ADD A NEW CARD</button>
            
        </section>
        
    )
 }

export default Home