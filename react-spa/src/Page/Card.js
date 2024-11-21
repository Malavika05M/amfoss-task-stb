import React from 'react';
import "./Card.css";

const Card = ({image, title, price}) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image"/>
            <div className="card-content">
            <h3> {title} </h3>
            <p> {price} </p>
            <button className="learn-more">Learn More</button>
            </div>
        </div>
    );
};

export default Card;
