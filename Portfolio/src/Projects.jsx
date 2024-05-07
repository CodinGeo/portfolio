import './Projects.css';
import loPage from './assets/17loPagev2.mp4';
import spPage from './assets/sp37Pagev2.mp4';
import zsoPage from './assets/zso8Pagev2.mp4';
function Projects()
{
    const ProjectsItemTitle = (props) => {
        return(
            <div className="projectsListItemTitleContainer">
                <h3 className="projectsListItemTitle" style={{fontSize: props.size==="large"?'4.5vw':'2.5vw'}}>{props.text}</h3>
            </div>);
    }
    const ProjectItem = (props) => {
        return(
            <div className="projectsListItemContainer">
                <video className="projectsListItem" style={{height: props.size==="large"?'20vw':'9.65vw'}} src={props.src} type="video/mp4" autoPlay="autoplay" muted loop/>
                <ProjectsItemTitle text={props.title} size={props.size}/>
            </div>);
    }
    return(
    <section className="projects">
        <h2 className="projectsTitle">Moje projekty</h2>
        <div className="projectsListContainer">
            <div className="projectsListLeftColumn">
                <a href="http://17logdynia.pl/" target="_blank">
                    <ProjectItem title="17 LO Gdynia" size="large" src={loPage}/>
                </a>
            </div>
            <div className="projectsListRightColumn">
                <a href="http://sp37gdynia.pl/" target="_blank">
                    <ProjectItem title="SP 37 Gdynia" size="small" src={spPage}/>
                </a>
                <a href="http://zso8gdynia.pl/" target="_blank">
                    <ProjectItem title="ZSO 8 Gdynia" size="small" src={zsoPage}/>
                </a>
            </div>
        </div>
    </section>);
}
export default Projects;