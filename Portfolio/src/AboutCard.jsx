import marcinAbout from './assets/marcinAbout.png';
import './AboutCard.css';
function AboutCard()
{
    return(
    <section id="about" className="aboutCardContainer">
        <figure className="aboutCardPicWrapper">
            <img src={marcinAbout} className="aboutCardPic"></img>
        </figure>
        <div className="aboutCardTexts">
            <h2 className="aboutCardTitle">O mnie słów kilka</h2>
            <p className="aboutCardDesc">Informatyką zaczałęm interesować się kilka lat temu. Na początku uczestniczyłem w różnych kursach z C#, HTML, CSS. Potem zacząłem uczyć się C++ i algorytmiki pod kątem Olimpiady Informatycznej. Obecnie zdobywam kolejne doświadczenia do pracy jako Front-End Developer. Dodatkowo interesuję się militariami, outdoorem i wycieczkami w góry.</p>
        </div>
    </section>
    );
}
export default AboutCard;