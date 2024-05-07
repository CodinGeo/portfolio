import './Projects.css';
import loPage from './assets/17loPagev2.mp4';
import spPage from './assets/sp37Pagev2.mp4';
import zsoPage from './assets/zso8Pagev2.mp4';
function Projects()
{
    const ProjectsItemTitle = (props) => {
        return(<div className="projectsItemTitleContainer">
            <h3 className="projectsItemTitle">{props.text}</h3>
        </div>)
    }
    return(
    <section className="projects">
        <h2 className="projectsTitle">Moje projekty</h2>
        <div className="projectsContainer">
            <div className="projectsLeftColumn">
                <a href="http://17logdynia.pl/" target="_blank">
                    <div className="projectsItemContainer">
                        <video className="projectsMainItem" src={loPage} type="video/mp4" autoPlay="autoplay" muted loop/>
                        <ProjectsItemTitle text="17 LO Gdynia"/>
                    </div>
                </a>
            </div>
            <div className="projectsRightColumn">
                <a href="http://sp37gdynia.pl/" target="_blank">
                    <video className="projectsSecondaryItem projectsItem" src={spPage} type="video/mp4" autoPlay="autoplay" muted loop/>
                </a>
                <a href="http://zso8gdynia.pl/" target="_blank">
                    <video className="projectsSecondaryItem projectsItem" src={zsoPage} type="video/mp4" autoPlay="autoplay" muted loop/>
                </a>
            </div>
        </div>
    </section>);
}
export default Projects;