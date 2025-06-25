import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Nav(){
    return <nav className="navBar">
        <div className="navBarBrand">
            <Link to="/">
                <div className="navBrandLogo">
                    <img src="../ss.jpeg" alt="Screen Savr Logo" />
                </div>
            </Link>
        </div>
        <div className="navBarLinks">
            <Link to="/" className="navLink"> Home </Link>
            <Link to="/favorites" className="navLink"> Favorites </Link>
        </div>
    </nav>
}

export default Nav