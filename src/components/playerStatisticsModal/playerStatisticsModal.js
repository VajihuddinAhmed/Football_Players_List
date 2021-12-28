import React from 'react';
import Modal from 'react-modal';
import './playerStatisticsModal.css';

export const PlayerStatisticsModal = (props) => {

    return (
        <Modal 
            isOpen={props.modalState} 
            contentLabel="player statistics" 
            ariaHideApp={false} 
            onRequestClose={props.handleCloseModal}
            closeTimeoutMS={200}
            className="modal"
        >
            <h2 className="modal--title">{props.data.Joueur}</h2>
            <p>Apps: {props.data.Apps}</p>
            <p>Minutes Jouees: {props.data.Mins}</p>
            <p>Total Buts: {props.data.Buts}</p>
            <p>Total Passes Decisives: {props.data.Passes_Decisives}</p>
            <p>Carton Jaune: {props.data.Jau}</p>
            <p>Carton Rouge: {props.data.Rou}</p>
            <p>Tirs Par Match: {props.data.TpM}</p>
            <p>Passes Reuisses: {props.data.Passes_Reuisses}</p>
            <p>Aeriens Gagnes: {props.data.AériensGagnés}</p>
            <p>Homme du Match: {props.data.HdM}</p>
            <button className="modal--button" onClick={props.handleCloseModal}>Close</button>
        </Modal>
    )
}