import React, { useState } from 'react';
import './playerCard.css';
import { PlayerStatisticsModal } from '../playerStatisticsModal/playerStatisticsModal';

export const Card = (props) => {
    
    const [modalState, setModalState] = useState(false)

    const manageState = () => {
        setModalState(!modalState)
    }

    const handleCloseModal = () => {
        setModalState(false)
    }

    return (
        <div className="card-container">
            <img alt='players' src={`https://robohash.org/${props.item.Joueur}?set=set5&size=180x180`} />
            <h2>{props.item.Joueur}</h2>
            <button onClick={() => manageState()}>Players Statistics</button>
            <button onClick={() => props.removePlayer(props.item.Joueur)}>Remove Player</button>
            <PlayerStatisticsModal modalState={modalState} handleCloseModal={handleCloseModal} data={props} />
        </div>
    )
}