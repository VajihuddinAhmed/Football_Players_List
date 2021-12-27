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
            <h2 className="modal--title">{props.data.item.Joueur}</h2>
            <p>Apps: {props.data.item.Apps}</p>
            <p>Minutes Jouees: {props.data.item.Mins}</p>
            <p>Total Buts: {props.data.item.Buts}</p>
            <p>Total Passes Decisives: {props.data.item.Passes_Decisives}</p>
            <p>Carton Jaune: {props.data.item.Jau}</p>
            <p>Carton Rouge: {props.data.item.Rou}</p>
            <p>Tirs Par Match: {props.data.item.TpM}</p>
            <p>Passes Reuisses: {props.data.item.Passes_Reuisses}</p>
            <p>Aeriens Gagnes: {props.data.item.AériensGagnés}</p>
            <p>Homme du Match: {props.data.item.HdM}</p>
            <button className="modal--button" onClick={props.handleCloseModal}>Close</button>
        </Modal>
    )
}