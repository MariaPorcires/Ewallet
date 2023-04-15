import './CardForm.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addCardAction } from '../../actions/addCardAction';
import chipLight from '../../assets/assets/chip-light.svg';
import bitcoin from '../../assets/assets/vendor-bitcoin.svg';
import ninja from '../../assets/assets/vendor-ninja.svg';
import blockchain from '../../assets/assets/vendor-blockchain.svg';
import evil from '../../assets/assets/vendor-evil.svg'


function CardForm() {
    let [nr, setNr] = useState();
    let [name, setName] = useState();
    let [date, setDate] = useState();
    let [ccv, setCcv] = useState();
    let [vendor, setVendor] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useId();

    function handleClick() {

        const vendorSplit = vendor.split(' ')

        let showCard = {
            id: id,
            nr: nr,
            name: name,
            date: date, 
            ccv: ccv, 
            vendor: vendorSplit
        };

        console.log(showCard);
        dispatch(addCardAction(showCard))
        navigate('/')

    }

    
    return(
        <section className='form'>
            <label className="form__label" htmlFor='cardnumber'>CARD NUMBER</label>
            <input className='form__input' type='text' id='cardnumber' name='cardnumber' onChange={ (event) => { setNr(event.target.value)} } required />
            <label className="form__label" htmlFor='cardname'>CARDHOLDER NAME</label>
            <input className='form__input' type='text' id='cardname' name='cardname' placeholder="FIRSTNAME LASTNAME" onChange={ (event) => { setName(event.target.value)} } required />
            
            <section className='form__section'>
                <section className='form__small'>
                    <label className="form__label" htmlFor='date'>VALID TRHU</label>
                    <input className='form__input' type='text' id='date' name='date' placeholder="MM/YY" onChange={ (event) => { setDate(event.target.value)} } required />
                </section>
                <section className='form__small'>
                    <label className="form__label" htmlFor='ccv'>CCV</label>
                    <input className='form__input' type='text' id='ccv' name='ccv' onChange={ (event) => { setCcv(event.target.value)} } required />
            </section>
            </section>
            
            <label className="form__label" htmlFor='vendor'>VENDOR</label>
                <select className='form__input' name='vendor' id="" onChange={ (event) => { setVendor(event.target.value)} }>
                <option value=''></option>
                    <option value={`bitcoin ${bitcoin} #FFAE34 #FFFFFF ${chipLight}`}>BITCOIN INC</option>
                    <option value={`ninja ${ninja} #222222 #FFFFFF ${chipLight}`}>NINJA BANK</option>
                    <option value={`blockchain ${blockchain} #8B58F9 #FFFFFF ${chipLight}`}>BLOCK CHAIN INC</option>
                    <option value={`evil ${evil} #F33355 #FFFFFF ${chipLight}`}>EVIL CORP</option>
                </select>

                <button className="form__button" onClick={ handleClick }>ADD CARD</button>

        </section>
    )
}


export default CardForm