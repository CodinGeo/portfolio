import marcinIntro from './assets/marcinIntro.webp';
import './Intro.css';
import {React, useEffect, useState} from 'react';

function Intro({introRef, contactRef, currentSection})
{
    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }

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
            <section className='scrollSnapItem introContainer' ref={introRef}>
                <div className={'introLeft hiddenLeft'+`${currentSection==='intro'?' visible':''}`}>
                    <h4 className='introTopicSmall'>Kim jestem?</h4>
                    <h2 className='introShortDesc'>Front-End Dev,<br></br>Freelancer</h2>
                    <p className='introLongDesc'>Młody, szukający nowych wyzwań. Jestem doświadczony w HTML, CSS, Wordpress. Obecnie uczę się React'a.</p>
                </div>
                <figure className={'introPicContainer hiddenCenter'+`${currentSection==='intro'?' visible':''}`}>
                    <img src={marcinIntro} className='introPic' alt='Zdjecie profilowe'></img>
                </figure>
                <div className={'introRight hiddenRight'+`${currentSection==='intro'?' visible':''}`}>
                    <span className='introNameContainer'>
                        <h1 className='introName'>Marcin<br></br>Bieliński</h1>
                        <hr className='introNameLine'></hr>
                    </span>
                    <button className='introContactBtn' onClick={handleContactClick}>Skontaktuj się<br></br> ze mną!</button>
                </div>
            </section>
        );
    }
    else
    {
        return(
            <section className='scrollSnapItem introContainer' ref={introRef}>
                <div className='introMobileMain'>
                    <img src={marcinIntro} className={'introPic hiddenLeft'+`${currentSection==='intro'?' visible':''}`} alt='Zdjecie profilowe'></img>
                    <div className={'introMobileMainTexts hiddenRight'+`${currentSection==='intro'?' visible':''}`}>
                        <h1 className='introName'>Marcin<br></br>Bieliński</h1>
                        <hr className='introNameLine'></hr>
                        <h2 className='introShortDesc'>Front-End Dev,<br></br>Freelancer</h2>
                    </div>
                </div>
                <p className={'introLongDesc hiddenLeft visible'+`${currentSection==='intro'?' visible':''}`}>Młody, szukający nowych wyzwań. Jestem doświadczony w HTML, CSS, Wordpress. Obecnie uczę się React'a.</p>
            </section>
        );
    }
}
export default Intro;