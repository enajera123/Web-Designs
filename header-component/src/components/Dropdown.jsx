import { RiArrowDownCircleLine, RiArrowDownLine, RiArrowDropDownLine, RiDownloadLine } from "@remixicon/react"
function Dropdown({ title, items }) {
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
    function dropdownItems() {
        const dropdownItems = document.querySelectorAll('.dropdown__item')
        dropdownItems.forEach((item) => {
            const dropdownButton = item.querySelector('.dropdown__button')
            const showDropdown = document.querySelector('.show-dropdown')
            toggleItem(item)
            if (showDropdown && showDropdown !== item) {
                toggleItem(showDropdown)
            }
        })
    }
    return (
        <>
            <li class="dropdown__item" onClick={dropdownItems}>
                <div class="nav__link dropdown__button">
                    {title} <RiArrowDropDownLine className="dropdown__arrow" />
                </div>
                <div class="dropdown__container">
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