import marcinAbout from './assets/marcinAbout.webp';
import './About.css';
import {React, useEffect, useState} from 'react';

function About({aboutRef}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const breakpoint = 750;
    useEffect(() => {
        const handleWindowResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    },[]);
    if(screenWidth > breakpoint)
    {
        return(
            <section id='about' className='scrollSnapItem aboutContainer' ref={aboutRef}>
                <figure className='aboutPicContainer hiddenLeft'>
                    <img src={marcinAbout} className='aboutPic' alt='Zdjęcie profilowe'/>
                </figure>
                <div className='aboutTexts'>
                    <h2 className='aboutTitle hiddenCenter'>O mnie słów kilka</h2>
                    <p className='aboutDesc hiddenCenter'>Informatyką zaczałęm interesować się kilka lat temu. Na początku uczestniczyłem w różnych kursach z C#, HTML, CSS. Potem zacząłem uczyć się C++ i algorytmiki pod kątem Olimpiady Informatycznej. Obecnie zdobywam kolejne doświadczenia do pracy jako Front-End Developer. Dodatkowo interesuję się militariami, outdoorem i wycieczkami w góry.</p>
                </div>
            </section>
        );
    }
    else
    {
        return(
            <section id='about' className='scrollSnapItem aboutMobileContainer' ref={aboutRef}>
                <div className='aboutMobileHead'>
                    <div className='aboutMobileTitleContainer'>
                        <h2 className='aboutMobileTitle'>Kilka słów o mnie</h2>
                    </div>
                    <figure className='aboutMobilePicContainer'>
                        <img src={marcinAbout} className='aboutMobilePic' alt='Zdjęcie profilowe'/>
                    </figure>
                </div>
                <div className='aboutMobileDescContainer'>
                    <p className='aboutMobileDesc'>Informatyką zaczałęm interesować się kilka lat temu. Na początku uczestniczyłem w różnych kursach z C#, HTML, CSS. Potem zacząłem uczyć się C++ i algorytmiki pod kątem Olimpiady Informatycznej. Obecnie zdobywam kolejne doświadczenia do pracy jako Front-End Developer. Dodatkowo interesuję się militariami, outdoorem i wycieczkami w góry.</p>
                </div>
            </section>
        );
    }
}
export default About;