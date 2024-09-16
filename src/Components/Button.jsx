import React from "react"

export default function Button({event}) {
    return (
        <div className="bottom-menu" id="menu">
            <button onClick={event} className="btn">Приобрести подписку</button>
        </div>
    )
}