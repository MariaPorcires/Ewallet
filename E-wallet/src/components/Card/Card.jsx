import './Card.scss'


function Card(props) {

    function handleClick() {
        console.log('klick');
    }

    return(
      
     <section className='card' >
        <section className='card__section'>
            <section className='card__img' onClick={ handleClick } style={{background: `${props.vendor[2] }` }}>
                <img className='card__chip' src={ props.vendor[4]} />
                
                <h2 className='card__nr' style={{color: `${props.vendor[3] }` }}>{ props.nr }</h2>
                <p className='card__name'>CARDHOLDER NAME</p>
                <p className='card__font' style={{color: `${props.vendor[3] }` }}>{ props.name }</p>
                <p className='card__date'>VALID THRU</p>
                <p style={{color: `${props.vendor[3] }` }}>{ props.date }</p>
                <img className='card__logo' src={ props.vendor[1] } />
            </section>
        </section>    
           
    </section>
    )
}

export default Card