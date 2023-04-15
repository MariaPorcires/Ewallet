import './CardForm.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCardAction } from '../../actions/addCardAction';
import chipLight from '../../assets/assets/chip-light.svg'
import bitcoin from '../../assets/assets/vendor-bitcoin.svg'
import ninja from '../../assets/assets/vendor-ninja.svg'
import blockhain from '../../assets/assets/vendor-blockchain.svg'
import evil from '../../assets/assets/vendor-evil.svg'


function CardForm() {
    const [nr, setNr] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [ccv, setCcv] = useState();
    const [vendor, setVendor] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleClick() {

        const vendorSplit = vendor.split(' ')

        const showCard = {nr, name, date, ccv, vendorSplit};
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
                    <option value={`bitcoin ${bitcoin} #FFAE34 #FFFFFF ${chipLight}`}>BITCOIN INC</option>
                    <option value={`ninja ${ninja} #222222 #FFFFFF ${chipLight}`}>NINJA BANK</option>
                    <option value={`blockchain ${blockhain} #8B58F9 #FFFFFF ${chipLight}`}>BLOCK CHAIN INC</option>
                    <option value={`evil ${evil} #F33355 #FFFFFF ${chipLight}`}>EVIL CORP</option>
                </select>

                <button onClick={ handleClick }>ADD CARD</button>

        </section>
    )
}


export default CardForm