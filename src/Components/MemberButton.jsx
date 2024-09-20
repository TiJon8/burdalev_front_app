import React, { useEffect, useState } from "react"

export default function MemberButton() {
    // const [state, setState] = useState()
    // useEffect(() => {
    //     if (window.onload) {
    //         setState('loaded')
    //     }
    // })
    return (
        <div className="bottom-menu-outer" id="menuSection">
            <div className="member-bottom-menu">
                <ul>
                    <li className="active-btn">
                        <span className="material-symbols-outlined">
                            photo_library
                        </span>
                        <div>Главная</div>
                    </li>
                    <li className="active-btn">
                        <span class="material-symbols-outlined">
                            account_balance_wallet
                        </span>
                        <div>Контент</div>
                    </li>
                    <li className="active-btn">
                        <span class="material-symbols-outlined">
                            draft
                        </span>
                        <div>Настройки</div>
                    </li>
                </ul>

                {/* <button className="memberBtn">icon</button>
                <button className="memberBtn">icon</button>
                <button className="memberBtn">icon</button>
                <button className="memberBtn">icon</button>
                <button className="memberBtn">icon</button>
                <button className="memberBtn">icon</button> */}
            </div>
        </div>

    )
}