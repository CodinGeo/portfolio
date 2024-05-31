import './Contact.css';
import React from 'react';
import ContactUs from './ContactForm.jsx';
function Contact() {
    return (
        <section id="contact" className="contactWrapper">
            <h3 className="contactInfoTitle">Napisz coś do mnie!</h3>
            <div className="contactFormContainer">
                <ContactUs></ContactUs>
            </div>
        </section>
    );
}
export default Contact;