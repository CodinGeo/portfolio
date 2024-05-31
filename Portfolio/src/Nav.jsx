import './Nav.css';
function Nav()
{
    return(
        <nav className="navContainer">
            <div className="navItem navItemActive">
                <a href="#about" className="navLink">O mnie</a>
            </div>
            <div className="navItem">
                <a href="#projects" className="navLink">Doświadczenie</a>
            </div>
            <div className="navItem">
                <a href="#contact" className="navLink">Kontakt</a>
            </div>
        </nav>
    );
}
export default Nav;