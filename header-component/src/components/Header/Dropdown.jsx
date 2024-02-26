import { RiArrowDropDownLine } from "@remixicon/react"
import { useRef } from "react"
import Dropdown_content from "./Dropdown_content"
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
            <li className="dropdown__item" ref={dropdownButtonRef}>
                <div onClick={dropdownItem} className="nav__link dropdown__button">
                    {title} <RiArrowDropDownLine className="dropdown__arrow" />
                </div>
                <div className="dropdown__container" onClick={toggleItem}>
                    <div className="dropdown__content">
                        {items.map((item, index) => (
                            <Dropdown_content
                            item={item}
                            key={index}
                            />
                        ))}
                    </div>
                </div>
            </li >
        </>
    )
}

export default Dropdown