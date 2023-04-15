import { useSelector } from "react-redux";
import Card from "../Card/Card";

function CardStack() {
    const card = useSelector((state) => state.card )

    const newCard = card.map(function (item) {
        console.log(item);
        return <Card nr={item.nr} name={item.name} date={item.date} vendor={item.vendor} key={item.id} />
    })
    

    return(
        <section>
            
            { newCard }
        </section>
        
    )
}

export default CardStack