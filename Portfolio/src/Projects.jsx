import './Projects.css';
import loPage from './assets/17loPagev2.mp4';
import spPage from './assets/sp37Pagev2.mp4';
import zsoPage from './assets/zso8Pagev2.mp4';
function Projects()
{
    return(
    <section className="projects">
        <h2 className="projectsTitle">Moje projekty</h2>
        <div className="projectsContainer">
            <div className="projectsLeftColumn">
                <video className="projectsMainItem" src={loPage} type="video/mp4" autoplay="autoplay" muted loop></video>
            </div>
            <div className="projectsRightColumn">
                <video className="projectsSecondaryItem" src={spPage} type="video/mp4" autoplay="autoplay" muted loop></video>
                <video className="projectsSecondaryItem" src={zsoPage} type="video/mp4" autoplay="autoplay" muted loop></video>
            </div>
        </div>
    </section>);
}
export default Projects;