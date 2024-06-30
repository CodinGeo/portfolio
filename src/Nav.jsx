import {useEffect} from 'react';
import './Nav.css';

function Nav({aboutRef, projectsRef, contactRef, currentSection}) {
    const handleAboutClick = () => {
        aboutRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const handleProjectsClick = () => {
        projectsRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        const updateNavClasses = () => {
            const navItems = document.querySelectorAll('.navItem');
            navItems.forEach(item => {
                item.classList.remove('navItemActive');
                if (item.dataset.section === currentSection) {
                    item.classList.add('navItemActive');
                }
            });
        };
        updateNavClasses();
    }, [currentSection]);

    return (
        <nav className={'navContainer'}>
            <div className={'navItem'} data-section='about' onClick={handleAboutClick}>
                <a className='navLink'>O mnie</a>
            </div>
            <div className={'navItem'} data-section='projects' onClick={handleProjectsClick}>
                <a className='navLink'>Projekty</a>
            </div>
            <div className={'navItem'} data-section='contact' onClick={handleContactClick}>
                <a className='navLink'>Kontakt</a>
            </div>
        </nav>
    );
}
export default Nav;
