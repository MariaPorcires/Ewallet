import './CardForm.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CardForm() {
    const [nr, setNr] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [ccv, setCcv] = useState();
    const [vendor, setVendor] = useState();

    //const navigate = useNavigate();

    function handleClick() {
        const showCard = {nr, name, date, ccv, vendor};
        console.log(showCard);
        //navigate('/')

    }

    
    return(
        <section>
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
                    <option value='bitcoin'>BITCOIN INC</option>
                    <option value='ninja'>NINJA BANK</option>
                    <option value='block'>BLOCK CHAIN INC</option>
                    <option value='evil'>EVIL CORP</option>
                </select>

                <button onClick={ handleClick }>ADD CARD</button>

        </section>
    )
}


export default CardForm