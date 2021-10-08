import React from 'react'

const Card = ({name,price}) => {
    return (
        <div className="cardDiv">
            <div className="detailsCard">
                <div className="item">Name:{name}</div>
                <div className="item">Price: {price}</div>
            </div>
        </div>
    )
}

export default Card