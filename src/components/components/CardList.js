import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {

    const roboArray = robots.map(robot => {
        return <Card key={robot.id} name={robot.name} email={robot.email} />
    })

    return (
        <div className="main">
            {roboArray}
        </div>

    )
}

export default CardList;