import React from 'react'

function NavItem({title, link}) {
    return (
        <li>
            <a href={link} class="nav__link">{title}</a>
        </li>
    )
}

export default NavItem