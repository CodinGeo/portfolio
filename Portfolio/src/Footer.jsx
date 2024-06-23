import './Footer.css';
import linkedInLogo from './assets/linkedInLogo.svg';
import facebookLogo from './assets/facebookLogo.svg';
import instagramLogo from './assets/instagramLogo.svg';
import gitHubLogo from './assets/gitHubLogo.svg';

function Footer({introRef, footerRef})
{
    const handleIntroClick = () => {
        introRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const FooterSocial = (props) => {
        return(
            <a href={props.link} target='_blank' className='footerSocialIconLink'>
                <div className='footerSocialContainer' style={{border: '0.15vw solid' + props.color}}>
                    <img className='footerSocialIcon' style={{filter: props.filter, height: props.height}} src={props.icon}/>
                    <div className='footerSocialBg' style={{backgroundColor: props.color}}>
                        <img className='footerSocialIcon' style={{filter: 'invert(94%) sepia(100%) saturate(0%) hue-rotate(122deg) brightness(102%) contrast(103%)', height: props.height}} src={props.icon}/>
                    </div>
                </div>
            </a>
        );
    }
    return(
        <footer className='scrollSnapItem footerContainer' ref={footerRef}>
            <figure><img className='footerLogo'src='/portfolioLogo.png' onClick={handleIntroClick}></img></figure>
            <p className='footerText'>&copy; 2024 Marcin Bieliński, Wszelkie Prawa Zastrzeżone </p>
            <section className='footerSocials'>
                <FooterSocial icon={linkedInLogo} link='https://www.linkedin.com/in/marcin-bieli%C5%84ski-9078a92a1/' height='0.95vw' color='#0e76a8' filter='invert(26%) sepia(93%) saturate(1626%) hue-rotate(177deg) brightness(95%) contrast(89%)'></FooterSocial>
                <FooterSocial icon={instagramLogo} link='https://www.instagram.com/marcin.bieli/' height='1.3vw' color='#c0007a' filter='invert(19%) sepia(76%) saturate(5728%) hue-rotate(310deg) brightness(74%) contrast(111%)'></FooterSocial>
                <FooterSocial icon={facebookLogo} link='https://www.facebook.com/marcin.bielinski.125/' height='1.1vw' color='#4267B2' filter='invert(36%) sepia(76%) saturate(414%) hue-rotate(180deg) brightness(95%) contrast(96%)'></FooterSocial>
                <FooterSocial icon={gitHubLogo} link='https://github.com/CodinGeo' height='3vw' color='#555555' filter='invert(8%) sepia(64%) saturate(810%) hue-rotate(133deg) brightness(95%) contrast(97%)'></FooterSocial>
            </section>
        </footer>
    );
}
export default Footer;