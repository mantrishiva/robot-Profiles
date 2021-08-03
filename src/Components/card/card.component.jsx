import React from 'react';
import './card.style.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.profile.id}`} alt="profile" height="180" width="180" />
            <h2>{props.profile.name}</h2>
            <p>{props.profile.email}</p>
        </div>
    )
}
