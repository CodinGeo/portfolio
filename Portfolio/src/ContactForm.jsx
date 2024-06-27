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
    <form ref={form} onSubmit={sendEmail} className='contactForm hiddenLeft'>
        <div className='contactFormInside'>
            <div className='contactFormGreeting'>Cześć!</div> 
            <div className='contactFormDetails'>
              <div className='contactFormLine'><div className='contactFormInputPrefix'>Nazywam się</div><input type='text' name='name' className='contactFormInput' required/></div>
              <div className='contactFormLine'><div className='contactFormInputPrefix'>Mój mail to</div><input type='email' name='mail' className='contactFormInput' required/></div>
            </div>
            <div className='contactFormMessageContainer'>Mam do Ciebie wiadomość:<br></br>
                <textarea name='message' className='contactFormMessage contactFormInput' required></textarea>
            </div>
            <div className='contactFormButtonContainer'><input type='submit' className='contactFormButton' value='Wyślij'/></div>
        </div>
    </form>
  );
};
export default ContactForm;