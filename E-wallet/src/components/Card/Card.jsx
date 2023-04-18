import './Card.scss'


function Card(props) {



    return(
      
     <section className='card'>
            <h2>{ props.nr }</h2>
            <p>{ props.name }</p>
            <p>{ props.date }</p>
            <img src={ props.vendor[1] } />
          

           
        </section>
    )
}

export default Card