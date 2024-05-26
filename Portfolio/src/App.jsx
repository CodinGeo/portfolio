import Nav from './Nav.jsx';
import Introduction from './Introduction.jsx';
import AboutCard from './AboutCard.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import './App.css';
import  './fonts/Rubik-VariableFont_wght.ttf';
function App()
{
  
  return(
  <>
  <Nav></Nav>
  <div className="content">
    <div className="stackElement"><Introduction></Introduction></div>
    <div className="stackElement"><AboutCard></AboutCard></div>
    <div className="stackElement"><Projects></Projects></div>
  </div>
  <Footer></Footer>
  </>)
}
export default App
