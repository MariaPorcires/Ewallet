import Header from "../components/Header/Header";
import './Home.scss'
import { useSelector } from "react-redux";

function Home() {
    const card = useSelector((state) => state.card )

    const newCard = card.map(function (item) {
        console.log(item);
        return (
            <section>
                <p>{item.nr}</p>
                <p>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.ccv}</p>
                <p>{item.vendor}</p>
            </section>
        )
    })
    

    return(
        <section>
        <Header />
            <p>{newCard}</p>
        
        </section>
        
    )
}

export default Home