import linkedInLogo from './assets/linkedInLogo.svg';
import gitHubLogo from './assets/gitHubLogo.svg';
import cvLogo from './assets/cvLogo.webp';
import cvPDF from './assets/CV.pdf';
import phoneLogo from './assets/phoneLogo.svg';
import {useEffect} from 'react';
import './Sides.css';
function Sides({introRef, aboutRef, projectsRef, contactRef, currentSection}) {
    const handleIntroClick = () => {
        introRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const handleAboutClick = () => {
        aboutRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const handleProjectsClick = () => {
        projectsRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: "smooth"});
    };
    useEffect(() => {
        const updateSideNavDots = () => {
            const navItems = document.querySelectorAll('.sideNavDot');
            navItems.forEach(item => {
                item.classList.remove('sideNavDotActive');
                if (item.dataset.section === currentSection) {
                    item.classList.add('sideNavDotActive');
                }
            });
        };
        updateSideNavDots();
    }, [currentSection]);
    const SideSocial = (props) => {
        return(
            <a href={props.link} target='_blank' className='sideSocialIconLink' aria-label={props.label}>
                <div className='sideSocialContainer' style={{border: '0.15vw solid' + props.color}}>
                    <img className='sideSocialIcon' style={{filter: props.filter, height: props.height}} src={props.icon} alt={props.alt}/>
                    <div className='sideSocialBg' style={{backgroundColor: props.color}}>
                        <img className='sideSocialIcon' style={{filter: 'invert(94%) sepia(100%) saturate(0%) hue-rotate(122deg) brightness(102%) contrast(103%)', height: props.height}} src={props.icon} alt={props.alt}/>
                    </div>
                </div>
            </a>
        );
    }
    return(
        <>
            <section className='sideSocials'>
                <SideSocial icon={gitHubLogo} link='https://github.com/CodinGeo' height='2.5vw' color='#555555' filter='invert(94%) sepia(100%) saturate(0%) hue-rotate(122deg) brightness(102%) contrast(103%)' label='Profil GitHub' alt='GitHub logo'></SideSocial>
                <SideSocial icon={cvLogo} link={cvPDF} height='2.5vw' color='#7EF9C2' filter='invert(90%) sepia(6%) saturate(2548%) hue-rotate(90deg) brightness(96%) contrast(104%)' label='CV' alt='CV'></SideSocial>
                <SideSocial icon={linkedInLogo} link='https://www.linkedin.com/in/marcin-bieli%C5%84ski-9078a92a1/' height='1.25vw' color='#0e76a8' filter='invert(26%) sepia(93%) saturate(1626%) hue-rotate(177deg) brightness(95%) contrast(89%)' label='Profil LinkedIn' alt='LinkedIn logo'></SideSocial>
                <SideSocial icon={phoneLogo} link='tel:+48503409129' height='1.7vw' color='#C36BDC' filter='invert(54%) sepia(67%) saturate(1661%) hue-rotate(236deg) brightness(90%) contrast(90%)' label='Telefon' alt='Telefon'></SideSocial>
                {/*svgrepo.com, changed color, licence: https://www.svgrepo.com/page/licensing/#CC%20Attribution*/}
            </section>
            <section className='sideNav'>
                <div className='sideNavDot sideNavDotActive' data-section='intro' onClick={handleIntroClick}></div>
                <div className='sideNavDot' data-section='about' onClick={handleAboutClick}></div>
                <div className='sideNavDot' data-section='projects' onClick={handleProjectsClick}></div>
                <div className='sideNavDot' data-section='contact' onClick={handleContactClick}></div>
            </section>
        </>
    );
}
export default Sides;