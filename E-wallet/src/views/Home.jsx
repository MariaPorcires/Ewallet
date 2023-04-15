import Header from "../components/Header/Header";
import './Home.scss'
import { useSelector } from "react-redux";
import CardStack from "../components/CardStack/CardStack";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate()
   

    function handleClick() {
        navigate("/AddCard")
    }
    
    

    return(
        <section className="home">
        <Header />
            
            <section className="home__cardStack">
                <CardStack />
                <button className="home__button" onClick={ handleClick }>ADD A NEW CARD</button>
            </section>
        </section>
        
    )
 }

export default Home