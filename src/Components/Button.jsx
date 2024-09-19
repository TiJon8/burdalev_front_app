import React from "react"


/* Кастомная кнопка (нигде не используется) */
export default function Button({event, tg}) {
    tg.MainButton.setText("Подписаться")
    return (
        <div className="bottom-menu" id="menu">
            <button onClick={event} className="btn">{tg.MainButton.text}</button>
        </div>
    )
}