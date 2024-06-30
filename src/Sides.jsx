import linkedInLogo from './assets/linkedInLogo.svg';
import gitHubLogo from './assets/gitHubLogo.svg';
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
            <a href={props.link} target='_blank' className='sideSocialIconLink'>
                <div className='sideSocialContainer' style={{border: '0.15vw solid' + props.color}}>
                    <img className='sideSocialIcon' style={{filter: props.filter, height: props.height}} src={props.icon}/>
                    <div className='sideSocialBg' style={{backgroundColor: props.color}}>
                        <img className='sideSocialIcon' style={{filter: 'invert(94%) sepia(100%) saturate(0%) hue-rotate(122deg) brightness(102%) contrast(103%)', height: props.height}} src={props.icon}/>
                    </div>
                </div>
            </a>
        );
    }
    return(
        <>
            <section className='sideSocials'>
                <SideSocial icon={linkedInLogo} link='https://www.linkedin.com/in/marcin-bieli%C5%84ski-9078a92a1/' height='1.25vw' color='#0e76a8' filter='invert(26%) sepia(93%) saturate(1626%) hue-rotate(177deg) brightness(95%) contrast(89%)'></SideSocial>
                <SideSocial icon={gitHubLogo} link='https://github.com/CodinGeo' height='2.5vw' color='#555555' filter='invert(94%) sepia(100%) saturate(0%) hue-rotate(122deg) brightness(102%) contrast(103%)'></SideSocial>
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