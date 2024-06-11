import './Nav.css';

function Nav({aboutRef, projectsRef, contactRef})
{
    const handleAboutClick=() =>{
        aboutRef.current?.scrollIntoView({behavior: "smooth"});
    }
    const handleProjectsClick=() =>{
        projectsRef.current?.scrollIntoView({behavior: "smooth"});
    }
    const handleContactClick=() =>{
        contactRef.current?.scrollIntoView({behavior: "smooth"});
    }
    return(
        <nav className="navContainer">
            <div className="navItem navItemActive" onClick={handleAboutClick}>
                <a className="navLink">O mnie</a>
            </div>
            <div className="navItem"  onClick={handleProjectsClick}>
                <a className="navLink">Doświadczenie</a>
            </div>
            <div className="navItem"  onClick={handleContactClick}>
                <a className="navLink">Kontakt</a>
            </div>
        </nav>
    );
}
export default Nav;