import Nav from './Nav.jsx';
import Introduction from './Introduction.jsx';
import AboutCard from './AboutCard.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import './App.css';
import  './fonts/Rubik-VariableFont_wght.ttf';
import {motion, useScroll, useTransform} from 'framer-motion';
import React, {useRef} from 'react';
function App()
{
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const introY=useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const aboutY=useTransform(scrollYProgress, [0,1], ["0%", "-100%"]);
  const projectsY=useTransform(scrollYProgress, [0,1], ["0%", "-100%"]);
  return(<>
    
    <main ref={ref}>
      <Nav></Nav>
      <motion.div style={{y:introY}}>
        <Introduction></Introduction>
      </motion.div>
      <motion.div style={{y:aboutY}}>
        <AboutCard></AboutCard>
      </motion.div>
      <motion.div style={{y:projectsY}}>
        <Projects></Projects>
      </motion.div>
      <Footer></Footer>
    </main>
  </>)
}
export default App
