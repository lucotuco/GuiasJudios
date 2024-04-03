import React, {useRef} from "react";
import './App.css';
import emailjs from '@emailjs/browser';
import {Link} from './Link';
import Swal from 'sweetalert2'

export default function Busco_Guia()
{
    const refForm = useRef();
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const serviceId = 'service_fg4gd65';
        const templateId = 'template_1xil2m4';
        
        const apikey = 'aYGlOcUlrXdRMWXl-';
        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then((result => Swal.fire({
            icon: 'success',
            title: 'Success',
            text:'Message sent successfully!'})))
        .catch((error => 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })))
    }
    return (
        <div className='App' >
            <header className="App-header">
            <form ref={refForm} action = "" onSubmit = {handleSubmit}>
            <div className="header-contact">
            <h2>Please fill this form</h2>
            <h2>and we will contact you soon</h2>
            </div>
            <div className="fondoForm">
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="name">Name and surname</label>
                <input name="username" type="text" placeholder="Ej:Lucas salem" required/>
            </fieldset>
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="name">city were you live</label>
                <input name="city" type="text" placeholder="Ej:Rio de Janeiro" required/>
            </fieldset>
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="name">Country and city you will be visiting</label>
                <input name="country" type="text" placeholder="Ej:Argentina" required/>
            </fieldset>
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="name">Date you are traveling</label>
                <input name="date" type="text" placeholder="Ej:08/05/2024" required/>
            </fieldset>
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="name">Number of passangers</label>
                <input name="passangers" type="number" placeholder="Ej:25" required/>
            </fieldset>
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="name">Phone number</label>
                <input name="number" type="number" placeholder="Ej:+54 11 30201883" required/>
            </fieldset>
            <fieldset className="field-name">
                <label className="symbol-required" name="email">Email</label>
                <input type="email" placeholder="Ej:Example@gmail.com" name="email" id="email" required/>
            </fieldset>
            <fieldset className="field-message">
                <label>Message</label>
                <textarea maxLength="500" placeholder="Type your message" name="message" id="" cols="30" rows="5"></textarea>
            </fieldset>

            <button className='btn-send'>Send</button>
            </div>
        </form>
        </header>
        </div>
    )
}