import Header from "../components/Header/Header";
import './Home.scss'
import { useSelector } from "react-redux";
import CardStack from "../components/CardStack/CardStack";


function Home() {
   <></>
    
    

    return(
        <section className="home">
        <Header />
            
            <section className="home__cardStack">
                <CardStack />
                <button className="home__button">ADD A NEW CARD</button>
            </section>
        </section>
        
    )
 }

export default Home