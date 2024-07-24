import {useRef, useState, useEffect} from 'react';
import Nav from './Nav.jsx';
import Sides from './Sides.jsx';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import  './fonts/Rubik-VariableFont_wght.ttf';
import './App.css';

function App()
{
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [currentSection, setCurrentSection] = useState('about');
  const sections = [
    {ref: introRef, sectionName: 'intro'},
    {ref: aboutRef, sectionName: 'about'},
    {ref: projectsRef, sectionName: 'projects'},
    {ref: contactRef, sectionName: 'contact'}
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
  return(
    <>
      <Nav aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} currentSection={currentSection==='intro'?'about':currentSection}></Nav>
      <Sides introRef={introRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} currentSection={currentSection}></Sides>
      <div className='content'>
        <Intro introRef={introRef} contactRef={contactRef} currentSection={currentSection}></Intro>
        <About aboutRef={aboutRef} sectionName='about' currentSection={currentSection}></About>
        <Projects projectsRef={projectsRef} sectionName='projects' currentSection={currentSection}></Projects>
        <Contact contactRef={contactRef} sectionName='contact' currentSection={currentSection}></Contact>
      </div>
    </>
  );
}
export default App
