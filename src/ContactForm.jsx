import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import ReCAPTCHA from 'react-google-recaptcha';
const ContactForm = ({currentSection}) => {
  const form = useRef();
  const sendEmail = (e) => {
    setButtonText('Czekaj...');
    e.preventDefault();
    emailjs
      .sendForm('service_shu0hom', 'template_szgzkrj', form.current,{
        publicKey: 'FTiHEPk47_MpccAdK',})
      .then(() => {
        updateButton();
        setCapVal(false);
        grecaptcha.reset();
      },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [buttonText, setButtonText] = useState('Wyślij');
  function updateButton()
  {
    const navItems = document.querySelectorAll('.contactFormButton');
    navItems.forEach(item => {
        item.classList.add('contactFormButtonSent');
        setButtonText('Wysłano!');
        setTimeout(() => {
          item.classList.remove('contactFormButtonSent');
          setButtonText('Wyślij');
        }, 3000);
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setCaptchaScale(Math.min(window.innerWidth, window.innerHeight) / 770);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  const [capVal, setCapVal] = useState(0);
  const Captcha = (props) => {
    return(
      <div className='contactFormCaptcha' style={{transform: `scale(${captchaScale})`, transformOrigin: `top left`, marginBottom: (captchaScale-1)*100}}>
        <ReCAPTCHA sitekey='6LfPWxMqAAAAAGb4hytdwfkxxjexIiOZnOMIPOaQ' onChange={()=>{setCapVal(true)}} theme='dark'/>
      </div>
    );
  }

  const [captchaScale, setCaptchaScale] = useState(Math.min(window.innerWidth, window.innerHeight)/770);
  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
        <div className='contactFormInside'>
          <div className={'contactFormGreeting hiddenLeft'+`${currentSection==='contact'?' visible':''}`}>Cześć!</div> 
          <div className={'contactFormDetails hiddenLeft'+`${currentSection==='contact'?' visible':''}`}>
            <div className='contactFormLine'>
              <div className='contactFormInputPrefix'>
                <label htmlFor='name'>Nazywam się</label>
              </div>
              <input id='name' type='text' name='name' className='contactFormInput' title='Podaj swoje imię' onInvalid={e=>{e.target.setCustomValidity('Podaj swoje imię')}} onInput={e => e.target.setCustomValidity('')} required autoComplete='on'/>
            </div>
            <div className='contactFormLine'>
              <div className='contactFormInputPrefix'>
                <label htmlFor='email'>Mój mail to</label>
              </div>
              <input id='email' type='email' name='mail' className='contactFormInput'  title='Podaj swój e-mail' onInvalid={e=>{e.target.setCustomValidity('Podaj swój e-mail')}} onInput={e => e.target.setCustomValidity('')} required autoComplete='on'/>
            </div>
          </div>
          <div className={'contactFormMessageContainer hiddenLeft'+`${currentSection==='contact'?' visible':''}`}>
            <div className='contactFormInputPrefix'>
              <label htmlFor='message'>Mam do Ciebie wiadomość:</label>
            </div>
            <textarea id='message' name='message' className='contactFormMessage contactFormInput' title='Napisz swoją wiadomość!' onInvalid={e=>{e.target.setCustomValidity('Napisz swoją wiadomość')}} onInput={e => e.target.setCustomValidity('')} required></textarea>
          </div>
          <div className='contactFormSubmission'>
            <Captcha></Captcha>
            <div className={'hiddenRight'+`${currentSection==='contact'?' visible':''}`}><input type='submit' className='contactFormButton' value={buttonText} disabled={!capVal}/></div>
          </div>
        </div>
    </form>
  );
};
export default ContactForm;