import React from 'react';

const Card = (props) =>
    <div className="card">
        <div
            className="card-image"
            style={{backgroundImage: `url(${props.image})`}}
        />
        <div className="card-content">
            <h2 className="card-title">{props.name}</h2>
            <div className="card-description">{props.description}</div>
        </div>
    </div>;

export default Card;
