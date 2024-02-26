import { RiArrowDropDownLine } from "@remixicon/react"
import { useRef } from "react"
function Dropdown({ title, items }) {
    const dropdownButtonRef = useRef(null)
    const toggleItem = (item) => {
        const dropdownContainer = item.querySelector('.dropdown__container')
        if (item.classList.contains('show-dropdown')) {
            dropdownContainer.removeAttribute('style')
            item.classList.remove('show-dropdown')
        } else {
            dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
            item.classList.add('show-dropdown')
        }
    }
    function dropdownItem() {
        const showDropdown = document.querySelectorAll('.show-dropdown')
        const item = dropdownButtonRef.current
        if (showDropdown) {
            showDropdown.forEach((item) => {
                if (item !== dropdownButtonRef.current) {
                    toggleItem(item)
                }
            })
        }
        toggleItem(item)
    }
    return (
        <>
            <li class="dropdown__item" ref={dropdownButtonRef}>
                <div onClick={dropdownItem} class="nav__link dropdown__button">
                    {title} <RiArrowDropDownLine className="dropdown__arrow" />
                </div>
                <div class="dropdown__container" onClick={toggleItem}>
                    <div class="dropdown__content">

                        {items.map((item) => (
                            <>
                                <div class="dropdown__group">
                                    <div class="dropdown__icon">
                                        {item.icon}
                                    </div>
                                    < span class="dropdown__title" >{item.title}</span>
                                    <ul className="dropdow__list">
                                        {item.subItems.map((subItem) => (
                                            <li>
                                                <a href={subItem.link} class="dropdown__link">{subItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </li >
        </>
    )
}

export default Dropdown