import {useRef} from 'react';
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
  const aboutRef=useRef(null);
  const projectsRef=useRef(null);
  const contactRef=useRef(null);
  return(
    <>
      <Nav aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}></Nav>
      <div className="content">
        <Introduction contactRef={contactRef}></Introduction>
        <AboutCard aboutRef={aboutRef}></AboutCard>
        <Projects projectsRef={projectsRef}></Projects>
        <Contact contactRef={contactRef}></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App
