import './CardForm.scss'
import { useState } from 'react'

function CardForm() {
    const [form, setForm] = useState()

    

    return(
        <section>
            <label htmlFor='cardnumber'>Card Number</label>
            <input type='text' id='cardnumber' name='cardnumber' onChange={ (event) => { setForm(event.target.value)} }></input>
            <label htmlFor='cardname'>Cardholder Name</label>
            <input type='text' id='cardname' name='cardname' value='FIRSTNAME LASTNAME'></input>
            <input type='text'></input>
            <input type='text'></input>
            <label htmlFor='vendor'>Vendor</label>
                <select name='vendor' id='vendor'>
                <option value=''></option>
                    <option value='bitcoin'>BITCOIN INC</option>
                    <option value='ninja'>NINJA BANK</option>
                    <option value='block'>BLOCK CHAIN INC</option>
                    <option value='evil'>EVIL CORP</option>
                </select>
        </section>
    )
}

export default CardForm