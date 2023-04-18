import './Card.scss'


function Card(props) {



    return(
      
     <section className='card' style={{background: `${props.vendor[2] }` }}>
            <img src={ props.vendor[4]} />
            <h2 style={{color: `${props.vendor[3] }` }}>{ props.nr }</h2>
            <p style={{color: `${props.vendor[3] }` }}>{ props.name }</p>
            <p style={{color: `${props.vendor[3] }` }}>{ props.date }</p>
            <img src={ props.vendor[1] } />
           
        </section>
    )
}

export default Card