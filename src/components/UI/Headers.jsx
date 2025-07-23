import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"

export const Headers = () => {

    const [show, setShow] = useState(false);
    const handleButtonToggle = () => {
        return setShow(!show)
    }

    // Handler to close menu on link click (for mobile)
    const handleNavClick = () => setShow(false);

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/" onClick={show ? handleNavClick : undefined}>
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><NavLink to="/" onClick={show ? handleNavClick : undefined}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={show ? handleNavClick : undefined}>About</NavLink></li>
                            <li><NavLink to="/country" onClick={show ? handleNavClick : undefined}>Country</NavLink></li>
                            <li><NavLink to="/contact" onClick={show ? handleNavClick : undefined}>Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}