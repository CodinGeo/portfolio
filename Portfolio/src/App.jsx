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
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [currentSection, setCurrentSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = [
        {ref: aboutRef, sectionName: 'about'},
        {ref: projectsRef, sectionName: 'projects'},
        {ref: contactRef, sectionName: 'contact'},
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const{ref, sectionName} = sections[i];
        if (ref.current && scrollPosition >= ref.current.offsetTop-100) {
          setCurrentSection(sectionName);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  return(
    <>
      <Nav aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} currentSection={currentSection}></Nav>
      <div className='content'>
        <Introduction contactRef={contactRef}></Introduction>
        <AboutCard aboutRef={aboutRef} className='appElement' sectionName='about'></AboutCard>
        <Projects projectsRef={projectsRef} className='appElement' sectionName='projects'></Projects>
        <Contact contactRef={contactRef} className='appElement' sectionName='contact'></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}
export default App
