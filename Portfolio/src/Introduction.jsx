import marcinCropped from './assets/marcinCropped.png';
import './Introduction.css';

function Introduction({introRef})
{
    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <section className='scrollSnapItem introContainer' ref={introRef}>
            <div className='introLeft hiddenLeft'>
                <h4 className='introTopicSmall'>Kim jestem?</h4>
                <h2 className='introShortDescription'>Front-End Dev,<br></br>Freelancer</h2>
                <p className='introLongDescription'>Młody, szukający wyzwań. Doświadczony w HTML, CSS, Wordpress. Obecnie uczę się React'a.</p>
            </div>
            <figure className='introMiddle hiddenCenter'>
                <img src={marcinCropped} className='introPic'></img>
            </figure>
            <div className='introRight hiddenRight'>
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
                        <a href='https://github.com/CodinGeo' target='_blank' className='introSocialsLink'>Github</a>
                    </div>
                </section>
                <button className='introContactBtn' onClick={handleContactClick}>Skontaktuj się<br></br> ze mną!</button>
            </div>
        </section>
    );
}
export default Introduction;