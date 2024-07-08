import marcinCropped from './assets/marcinIntro.webp';
import './Introduction.css';

function Introduction({introRef, contactRef})
{
    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <section className='scrollSnapItem introContainer' ref={introRef}>
            <div className='introLeft hiddenLeft'>
                <h4 className='introTopicSmall'>Kim jestem?</h4>
                <h2 className='introShortDescription'>Front-End Dev,<br></br>Freelancer</h2>
                <p className='introLongDescription'>Młody, szukający nowych wyzwań. Jestem doświadczony w HTML, CSS, Wordpress. Obecnie uczę się React'a.</p>
            </div>
            <figure className='hiddenCenter'>
                <img src={marcinCropped} className='introPic' alt='Zdjecie profilowe'></img>
            </figure>
            <div className='introRight hiddenRight'>
                <span className='introNameAndLineContainer'>
                    <h1 className='introName'>Marcin<br></br>Bieliński</h1>
                    <hr className='introNameLine'></hr>
                </span>
                <button className='introContactBtn' onClick={handleContactClick}>Skontaktuj się<br></br> ze mną!</button>
            </div>
        </section>
    );
}
export default Introduction;