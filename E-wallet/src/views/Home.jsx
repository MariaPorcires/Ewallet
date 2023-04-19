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
                <p className="add-card__type">ACTIVE CARD</p>
                

                <section className='home__img' style={{...activeCard?.vendor ? {background: `${activeCard.vendor[2] }`} : '' }}>
                    <img className='card__chip' src={ activeCard?.vendor ? activeCard.vendor[4] : '' } />
                    <h2 className='card__nr' style={{ ...activeCard?.vendor ? {color: `${activeCard.vendor[3] }` } : '' }}>{ activeCard?.vendor ? activeCard.nr : '' }</h2>
                    <p className='card__name'>CARDHOLDER NAME</p>
                    <p className='card__font' style={{...activeCard?.vendor ? {color: `${activeCard.vendor[3] }` } : '' }}>{ activeCard?.vendor ? activeCard.name : '' }</p>
                    <img className='card__logo' src={ activeCard?.vendor? activeCard.vendor[1] : '' } />
                    <p className='card__date'>VALID THRU</p>
                    <p style={{...activeCard?.vendor ? {color: `${activeCard.vendor[3] }` } : '' }}>{ activeCard?.vendor ? activeCard.date : '' }</p>
                </section>

                
            <section className="home__cardStack">
                <CardStack />
                <button className="home__button" onClick={ handleClick }>ADD A NEW CARD</button>
            </section>
        </section>
        
    )
 }

export default Home