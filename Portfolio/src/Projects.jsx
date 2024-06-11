import loPage from './assets/17loPagev2.mp4';
import spPage from './assets/sp37Pagev2.mp4';
import zsoPage from './assets/zso8Pagev2.mp4';
import './Projects.css';

function Projects({projectsRef})
{
    const ProjectItem = (props) =>{
        return(
            <div className="projectsListItemContainer">
                <video className="projectsListItem" style={{height: props.size==="large"?'24vw':'11.75vw'}} src={props.src} type="video/mp4" autoPlay="autoplay" muted loop/>
                <div className="projectsListItemTitleContainer">
                    <h3 className="projectsListItemTitle" style={{fontSize: props.size==="large"?'6vw':'2.9vw'}}>{props.title}</h3>
                </div>
            </div>
        );
    }
    return(
        <section ref={projectsRef} className="projects appElement">
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
        </section>
    );
}
export default Projects;