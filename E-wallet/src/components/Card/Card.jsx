import './Card.scss'

function Card(props) {
    return(
        <section className='card'>
            <h2>{ props.nr }</h2>
            <p>{ props.name }</p>
            <p>{ props.date }</p>
            <p>{ props.vendor} </p>
        </section>
    )
}

export default Card