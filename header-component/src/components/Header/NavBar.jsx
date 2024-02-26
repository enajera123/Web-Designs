import React from 'react'
import Dropdown from './Dropdown'
import NavItem from './NavItem'
import { dropDownItems } from '../../js/script'
function NavBar() {
    return (
        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <NavItem title="Home" link="#" />
                {
                    dropDownItems.map((item) => (
                        <Dropdown
                            title={item.title}
                            items={item.items}
                            key={item.title}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default NavBar