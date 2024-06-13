import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_shu0hom', 'template_szgzkrj', form.current,{
        publicKey: 'FTiHEPk47_MpccAdK',})
      .then(() => {
        console.log('SUCCESS!');},
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
        <div className='contactFormInside'>
            <div className='contactFormGreeting'>Cześć!</div> 
            <div className='contactFormLine'>Nazywam się<input type='text' name='name' placeholder='Twoje imię i nazwisko' className='contactFormInput' required/>Mój mail to<input type='email' name='mail' placeholder='Twój mail' className='contactFormMailInput contactFormInput' required/></div>
            <div className='contactFormMessageContainer'>Mam do Ciebie wiadomość:<br></br>
                <textarea name='message' placeholder='Twoja wiadomość' className='contactFormMessage contactFormInput' required></textarea>
            </div>
            <div className='contactFormButtonContainer'><input type='submit' className='contactFormButton' value='Wyślij'/></div>
        </div>
    </form>
  );
};
export default ContactForm;