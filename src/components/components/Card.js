import React from 'react';

const Card = ({ name, email }) => {
    return (
        <div className="roboframe grow">
            <img alt="robots" src={`https://robohash.org/${name}?size=100x100`} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card;