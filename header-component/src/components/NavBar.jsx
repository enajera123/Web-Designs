import React from 'react'
import Dropdown from './Dropdown'
import NavItem from './NavItem'
import { dropDownItems } from '../js/script'
function NavBar() {
    return (
        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
                <NavItem title="Home" link="#" />
                {
                    dropDownItems.map((item) => (
                        <Dropdown title={item.title} items={item.items} />
                    ))
                }
            </ul>
        </div>
    )
}

export default NavBar