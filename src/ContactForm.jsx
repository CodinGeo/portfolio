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
          <div className='contactFormGreeting hiddenLeft'>Cześć!</div> 
          <div className='contactFormDetails hiddenLeft'>
            <div className='contactFormLine'>
              <div className='contactFormInputPrefix'>
                <label htmlFor='name'>Nazywam się</label>
              </div>
              <input id='name' type='text' name='name' className='contactFormInput' required autoComplete='on'/>
            </div>
            <div className='contactFormLine'>
              <div className='contactFormInputPrefix'>
                <label htmlFor='email'>Mój mail to</label>
              </div>
              <input id='email' type='email' name='mail' className='contactFormInput' required autoComplete='on'/>
            </div>
          </div>
          <div className='contactFormMessageContainer hiddenLeft'>
            <div className='contactFormInputPrefix'>
              <label htmlFor='message'>Mam do Ciebie wiadomość:</label>
            </div>
            <textarea id='message' name='message' className='contactFormMessage contactFormInput' required></textarea>
          </div>
          <div className='contactFormButtonContainer'>
            <input type='submit' className='contactFormButton' value='Wyślij'/>
          </div>
        </div>
    </form>
  );
};
export default ContactForm;