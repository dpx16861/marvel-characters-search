import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {
            name,
            image,
            description
        } = this.props;

        return (
            <div className="card">
                <div
                    className="card-image"
                    style={{backgroundImage: `url(${image})`}}
                />
                <div className="card-content">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-description">{description}</div>
                </div>
            </div>
        )
    }
}

export default Card;
