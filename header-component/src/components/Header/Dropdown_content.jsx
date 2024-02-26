import React from 'react'

function Dropdown_content({ item }) {
  return (
    <div className="dropdown__group" >
      <div className="dropdown__icon">
        {item.icon}
      </div>
      < span className="dropdown__title" >{item.title}</span>
      <ul className="dropdow__list">
        {item.subItems.map((subItem, index) => (
          <li key={index}>
            <a href={subItem.link} className="dropdown__link">{subItem.title}</a>
          </li>
        ))}
      </ul>
    </div>

  )
}
export default Dropdown_content