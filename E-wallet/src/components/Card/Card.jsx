import './Card.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { activeCard } from '../../actions/cardAction';


function Card(props) {
    const dispatch = useDispatch()
    

    function handleClick() {
        dispatch(activeCard(props))
    }

    return(
      
     <section className='card' >
        <section className='card__section'>
            <section className='card__img' onClick={ handleClick } style={{background: `${props.vendor[2] }` }}>
                <img className='card__logo' src={ props.vendor[1] } />  
                <img className='card__chip' src={ props.vendor[4]} />
                
                <h2 className='card__nr' style={{color: `${props.vendor[3] }` }}>{ props.nr }</h2>
                <p className='card__name'>CARDHOLDER NAME</p>
                <p className='card__fname' style={{color: `${props.vendor[3] }` }}>{ props.name }</p>
                
                <p className='card__date'>VALID THRU</p>
                <p className='card__valid' style={{color: `${props.vendor[3] }` }}>{ props.date }</p>

            </section>
        </section>    
           
    </section>
    )
}

export default Card