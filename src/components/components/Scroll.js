import React from 'react';

const Scroll = ({ children }) => {
    return (
        <div style={{ overflowY: "scroll", height: "500px", border: "1px solid black", marginTop: "10px" }}>
            {children}
        </div>
    )
}

export default Scroll;