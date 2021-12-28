import React from 'react';
import './playerCard.css';

export const Card = (props) => {

    return (
        <div className="card-container">
            <img alt='players' src={`https://robohash.org/${props.item.Joueur}?set=set5&size=180x180`} />
            <h2>{props.item.Joueur}</h2>
            <button onClick={() => props.showModal(props)}>Players Statistics</button>
            <button onClick={() => props.removePlayer(props.item.Joueur)}>Remove Player</button>
        </div>
    )
}