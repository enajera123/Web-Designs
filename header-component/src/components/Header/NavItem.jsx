import React from 'react'

function NavItem({title, link}) {
    return (
        <li>
            <a href={link} className="nav__link">{title}</a>
        </li>
    )
}

export default NavItem