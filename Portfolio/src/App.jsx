import Nav from './Nav.jsx';
import Introduction from './Introduction.jsx';
import AboutCard from './AboutCard.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.css';
import  './fonts/Rubik-VariableFont_wght.ttf';
function App()
{
  
  return(
  <>
  <Nav></Nav>
  <div className="content">
    <Introduction></Introduction>
    <AboutCard></AboutCard>
    <Projects></Projects>
    <Contact></Contact>
  </div>
  <Footer></Footer>
  </>)
}
export default App
