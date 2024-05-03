import './Nav.css';
function Nav()
{
    return(
        <nav className="navContainer">
            <div className="navItem navItemActive">
                <h3 className="navLink">O mnie</h3>
            </div>
            <div className="navItem">
                <h3 className="navLink">Doświadczenie</h3>
            </div>
            <div className="navItem">
                <h3 href="#" className="navLink">Kontakt</h3>
            </div>
        </nav>
    );
}
export default Nav;