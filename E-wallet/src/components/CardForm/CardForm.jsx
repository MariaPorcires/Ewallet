import './CardForm.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCardAction } from '../../actions/addCardAction';


function CardForm() {
    const [nr, setNr] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [ccv, setCcv] = useState();
    const [vendor, setVendor] = useState();


    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleClick() {
        const showCard = {nr, name, date, ccv, vendor};
        console.log(showCard);
        dispatch(addCardAction(showCard))
        navigate('/')

    }

    
    return(
        <section className='form'>
            <label htmlFor='cardnumber'>Card Number</label>
            <input type='text' id='cardnumber' name='cardnumber' onChange={ (event) => { setNr(event.target.value)} } required />
            <label htmlFor='cardname'>Cardholder Name</label>
            <input type='text' id='cardname' name='cardname' onChange={ (event) => { setName(event.target.value)} } required />
            <label htmlFor='date'>Valid thru</label>
            <input type='text' id='date' name='date' onChange={ (event) => { setDate(event.target.value)} } required />
            <label htmlFor='ccv'>CCV</label>
            <input type='text' id='ccv' name='ccv' onChange={ (event) => { setCcv(event.target.value)} } required />
            <label htmlFor='vendor'>Vendor</label>
                <select name='vendor' id='vendor' onChange={ (event) => { setVendor(event.target.value)} }>
                <option value=''></option>
                    <option value='Bitcoin Inc'>BITCOIN INC</option>
                    <option value='Ninja Bank'>NINJA BANK</option>
                    <option value='Block Chain Inc'>BLOCK CHAIN INC</option>
                    <option value='Evil Corp'>EVIL CORP</option>
                </select>

                <button onClick={ handleClick }>ADD CARD</button>

        </section>
    )
}


export default CardForm