import React, { useEffect, useState } from 'react';

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const loadingText = "Загрузка";

    return (
        <div
            style={{
                position: 'fixed',
                backgroundColor: 'white',
                minHeight: "100vh",
                top: "0px",
                left: "0px",
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: "10",
                transitionProperty: "opacity",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "150ms",
                opacity: loading ? 1 : 0,
                transition: 'opacity 0.1s ease-in-out',
                pointerEvents: loading ? 'auto' : 'none'
            }}
        >
            {loading ? (
                <>
                    <div>{loadingText}</div>
                </>
            ) : null}
        </div>
    );
}

export default Loader;