import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.profiles.map(profile => (
                <Card key={profile.id} profile={profile} />
            ))}
        </div>
    )
}

