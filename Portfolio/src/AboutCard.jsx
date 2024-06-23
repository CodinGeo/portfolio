import marcinAbout from './assets/marcinAbout.png';
import './AboutCard.css';

function AboutCard({aboutRef}) {
    return(
        <section id='about' className='scrollSnapItem aboutCardContainer' ref={aboutRef}>
            <figure className='aboutCardPicContainer hiddenLeft'>
                <img src={marcinAbout} className='aboutCardPic' alt='Marcin About'/>
            </figure>
            <div className='aboutCardTexts'>
                <h2 className='aboutCardTitle hiddenCenter'>O mnie słów kilka</h2>
                <p className='aboutCardDesc hiddenCenter'>Informatyką zaczałęm interesować się kilka lat temu. Na początku uczestniczyłem w różnych kursach z C#, HTML, CSS. Potem zacząłem uczyć się C++ i algorytmiki pod kątem Olimpiady Informatycznej. Obecnie zdobywam kolejne doświadczenia do pracy jako Front-End Developer. Dodatkowo interesuję się militariami, outdoorem i wycieczkami w góry.</p>
            </div>
        </section>
    );
}
export default AboutCard;