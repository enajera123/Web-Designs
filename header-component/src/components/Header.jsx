import { RiMenuLine, RiCloseLine, RiArrowUpDownLine, RiArrowDownLine, RiFlashlightLine, RiHeart2Line, RiHeart3Line, RiBookMarkedLine, RiFilePaper2Line } from "@remixicon/react"
import Dropdown from './Dropdown'
import NavItem from "./NavItem"
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
            <nav class="nav container">
                <div class="nav__data">
                    <a href="#" class="nav__logo">
                        <i class="ri-code-s-slash-line"></i> CodeBox
                    </a>
                    <div class="nav__toggle" id="nav-toggle">
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