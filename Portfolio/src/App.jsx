import {useRef, useState, useEffect} from 'react';
import Nav from './Nav.jsx';
import Introduction from './Introduction.jsx';
import AboutCard from './AboutCard.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import  './fonts/Rubik-VariableFont_wght.ttf';
import './App.css';

function App()
{
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const [currentSection, setCurrentSection] = useState('about');
  const sections = [
    {ref: introRef, sectionName: 'introduction'},
    {ref: aboutRef, sectionName: 'about'},
    {ref: projectsRef, sectionName: 'projects'},
    {ref: contactRef, sectionName: 'contact'},
    {ref: footerRef, sectionName: 'footer'},
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const{ref, sectionName} = sections[i];
        if (ref.current && scrollPosition >= ref.current.offsetTop-window.innerHeight/2) {
          setCurrentSection(sectionName);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[]);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  const hiddenElements = document.querySelectorAll('.hiddenLeft, .hiddenCenter, .hiddenRight, .hiddenBottom');
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
  return(
    <>
      <Nav aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} currentSection={currentSection==='introduction'?'about':currentSection==='footer'?'contact':currentSection}></Nav>
      <div className='content'>
        <Introduction introRef={introRef} contactRef={contactRef}></Introduction>
        <AboutCard aboutRef={aboutRef} sectionName='about'></AboutCard>
        <Projects projectsRef={projectsRef} sectionName='projects'></Projects>
        <Contact contactRef={contactRef} sectionName='contact'></Contact>
        <Footer introRef={introRef} footerRef={footerRef}></Footer>
      </div>
    </>
  );
}
export default App
