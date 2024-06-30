import marcinAbout from './assets/marcinAbout.webp';
import './About.css';

function About({aboutRef}) {
    return(
        <section id='about' className='scrollSnapItem aboutContainer' ref={aboutRef}>
            <figure className='aboutPicContainer hiddenLeft'>
                <img src={marcinAbout} className='aboutPic' alt='Marcin About'/>
            </figure>
            <div className='aboutTexts'>
                <h2 className='aboutTitle hiddenCenter'>O mnie słów kilka</h2>
                <p className='aboutDesc hiddenCenter'>Informatyką zaczałęm interesować się kilka lat temu. Na początku uczestniczyłem w różnych kursach z C#, HTML, CSS. Potem zacząłem uczyć się C++ i algorytmiki pod kątem Olimpiady Informatycznej. Obecnie zdobywam kolejne doświadczenia do pracy jako Front-End Developer. Dodatkowo interesuję się militariami, outdoorem i wycieczkami w góry.</p>
            </div>
        </section>
    );
}
export default About;