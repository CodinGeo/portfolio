import marcinCropped from './assets/marcinCropped.png';
import './Introduction.css';

function Introduction({contactRef})
{
    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <section className='introContainer'>
            <div className='introLeft'>
                <h4 className='introTopicSmall'>Kim jestem?</h4>
                <h2 className='introShortDescription'>Front-End Dev,<br></br>Freelancer</h2>
                <p className='introLongDescription'>Naukę Wordpress’a zacząłem już na początku liceum, a obecnie zdobywam doświadczenie w React.</p>
            </div>
            <figure className='introMiddle'>
                <img src={marcinCropped} className='introPic'></img>
            </figure>
            <div className='introRight'>
                <span className='introNameAndLineContainer'>
                    <h1 className='introName'>Marcin<br></br>Bieliński</h1>
                    <hr className='introNameLine'></hr>
                </span>
                <section className='introSocials'>
                    <div className='introSocialsLinkContainer'>
                        <a href='https://www.linkedin.com/in/marcin-bieli%C5%84ski-9078a92a1/' target='_blank' className='introSocialsLink'>LinkedIn</a>
                    </div>
                    <div className='introSocialsLinkContainer'>
                        <hr className='introSocialsLine'></hr>
                    </div>
                    <div className='introSocialsLinkContainer'>
                        <a href='https://www.facebook.com/marcin.bielinski.125/?locale=pl_PL' target='_blank' className='introSocialsLink'>Facebook</a>
                    </div>
                </section>
                <button className='introContactBtn' onClick={handleContactClick}>Skontaktuj się<br></br> ze mną!</button>
            </div>
        </section>
    );
}
export default Introduction;