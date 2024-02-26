import { RiMenuLine, RiCloseLine} from "@remixicon/react"
import NavBar from "./NavBar"

function Header() {
    const showMenu = () => {
        const nav = document.getElementById('nav-menu')
        const toggle = document.getElementById("nav-toggle")
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    }
    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                    <a href="#" className="nav__logo">
                        <i className="ri-code-s-slash-line"></i> CodeBox
                    </a>
                    <div className="nav__toggle" id="nav-toggle">
                        <RiMenuLine
                            onClick={showMenu}
                            className='nav__toggle-menu'
                        />
                        <RiCloseLine
                            onClick={showMenu}
                            className='nav__toggle-close'
                        />
                    </div>
                </div>
                <NavBar />
            </nav>
        </header>
    )
}

export default Header