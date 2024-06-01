import React from 'react';
import ContactForm from './ContactForm.jsx';
import './Contact.css';
function Contact({contactRef})
{
    return(
        <section ref={contactRef} className="contactWrapper element">
            <h3 className="contactInfoTitle">Napisz coś do mnie!</h3>
            <div className="contactFormContainer">
                <ContactForm></ContactForm>
            </div>
        </section>
    );
}
export default Contact;