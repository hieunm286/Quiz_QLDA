import React, { useState } from 'react'

function Header(props) {
    const className = 'list-group-item active'
    const defaultClassName = 'list-group-item inactive'
    const [isActive, setActive] = useState(['12'])

    function handleClickLi(e) {
        if (e.currentTarget.dataset.id === props.chap) {
            return;
        }
        props.resetQuiz()
        props.setChap(e.currentTarget.dataset.id)
        // e.currentTarget.className += ' active'
        const newActive = [e.currentTarget.dataset.id]
        setActive(newActive)
    }

    return (
        <div className="mt-3 mb-4">
            <h3 className="text-center mt-3">Quản lý dự án phần mềm</h3>
            <ul className="list-group list-group-horizontal justify-content-center mt-4">
                <li className={isActive.indexOf('12') !== -1 ? className : defaultClassName} data-id="12" onClick={handleClickLi}>Bài 1-2</li>
                <li className={isActive.indexOf('3') !== -1 ? className : defaultClassName} data-id="3" onClick={handleClickLi}>Bài 3</li>
                <li className={isActive.indexOf('4') !== -1 ? className : defaultClassName} data-id="4" onClick={handleClickLi}>Bài 4</li>
                <li className={isActive.indexOf('5') !== -1 ? className : defaultClassName} data-id="5" onClick={handleClickLi}>Bài 5</li>
                <li className={isActive.indexOf('6') !== -1 ? className : defaultClassName} data-id="6" onClick={handleClickLi}>Bài 6</li>
                <li className={isActive.indexOf('7') !== -1 ? className : defaultClassName} data-id="7" onClick={handleClickLi}>Bài 7</li>
                <li className={isActive.indexOf('8') !== -1 ? className : defaultClassName} data-id="8" onClick={handleClickLi}>Bài 8</li>
                <li className={isActive.indexOf('9') !== -1 ? className : defaultClassName} data-id="9" onClick={handleClickLi}>Bài 9</li>
                <li className={isActive.indexOf('10') !== -1 ? className : defaultClassName} data-id="10" onClick={handleClickLi}>Bài 10</li>
                <li className={isActive.indexOf('11') !== -1 ? className : defaultClassName} data-id="11" onClick={handleClickLi}>Bài 11</li>
            </ul>
        </div>
    )
}

export default Header
