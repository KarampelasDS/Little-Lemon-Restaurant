import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import MobileMenu from "./MobileMenu"
import { useState } from "react";

export default function Navbar() {

    const [menuVisibility,setMenuVisibility] = useState(false);

    const handleClick = () => {
        setMenuVisibility(!menuVisibility);
    }

    return (
        <header>
            <nav className="Navbar">
                <ul>
                    <li id="logo"><Link to="/"><img src={Logo} alt="Logo" /></Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li id="hamburger"><RxHamburgerMenu size={40} onClick={handleClick}/></li>
                </ul>
            </nav>
            <nav className="MobileMenu">
                {menuVisibility && <MobileMenu handleClick={handleClick} />}
            </nav>
        </header>
    );
}