import React from 'react';
import ContactForm from './ContactForm.jsx';
import './Contact.css';

function Contact({contactRef, currentSection})
{
    return(
        <section ref={contactRef} className='scrollSnapItem contactContainer'>
            <h3 className={'contactInfoTitle hiddenCenter'+`${currentSection==='contact'?' visible':''}`}>Napisz do mnie!</h3>
            <div className='contactFormContainer'>
                <ContactForm currentSection={currentSection}></ContactForm>
            </div>
        </section>
    );
}
export default Contact;