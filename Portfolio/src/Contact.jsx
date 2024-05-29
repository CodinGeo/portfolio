import './Contact.css';
function Contact() {
    return (
        <section className="contactWrapper">
            <h3 className="contactInfoTitle">Napisz coś do mnie!</h3>
            <div className="contactFormContainer">
                <div className="contactFormText">
                    <form className="contactForm" action="https://formspree.io/f/xnqoqkqz" method="POST">
                        <div className="contactFormInside">
                            <div className="contactFormGreeting">Cześć!</div> 
                            <div className="contactFormLine">Nazywam się<input type="text" name="name" placeholder="Twoje imię i nazwisko" className="contactFormInput" required/>. Mój mail to<input type="text" name="mail" placeholder="Twój mail" className="contactFormMailInput contactFormInput" required/>.</div>
                            <div className="contactFormMessageContainer">Mam do Ciebie wiadomość:<br></br>
                                <textarea name="message" placeholder="Twoja wiadomość" className="contactFormMessage contactFormInput" required></textarea>
                            </div>
                            <div className="contactFormButtonContainer"><button type="submit" className="contactFormButton">Wyślij</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;