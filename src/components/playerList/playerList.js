import React, { useState } from 'react';
import './playerList.css';
import { Card } from '../playerCard/playerCard';
import { PlayerStatisticsModal} from '../playerStatisticsModal/playerStatisticsModal';
import { AddPlayer } from '../addPlayer/addPlayer';
import Modal from 'react-modal';
import _ from 'lodash';
const initialPlayerState = {
    Joueur: '',
    Apps: '',
    Mins: '',
    Buts: '',
    Passes_Decisives: '',
    Jau: '',
    Rou: '',
    TpM: '',
    Passes_Reuisses: '',
    AériensGagnés: '',
    HdM: ''
}
export const PlayerList = (props) => {
    const [listPlayers, setListPlayers] = useState(props.players)
    const [modalState, setModalState] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [playerModal, setPlayerModal] = useState(false);
    const [teamModal, setTeamModal] = useState(false);
    const [newPlayer, setNewPlayer] = useState(initialPlayerState)
    const [sorted, setSorted] = useState('')


    const managePlayerState = () => setPlayerModal(!playerModal)

    const handlePlayerModal = () =>  setPlayerModal(false)

    const handleCloseModal = () => setModalState(false)

    const handleCloseTeamModal = () => setTeamModal(!teamModal)

    const filteredPlayers = listPlayers.filter((item) =>  item.Joueur.toLowerCase().includes(props.searchTerm.toLowerCase()))

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewPlayer({ ...newPlayer, [name]: value }) 
    }

    const handleSubmit = (e) => {
        const { Joueur, Apps, Mins, Buts, Passes_Decisives, Jau, Rou, TpM, Passes_Reuisses, AériensGagnés, HdM  } = newPlayer
        e.preventDefault()
        let adds = [...listPlayers]
        adds.push({
            Joueur,
            Apps,
            Mins,
            Buts,
            Passes_Decisives,
            Jau,
            Rou,
            TpM,
            Passes_Reuisses,
            AériensGagnés,
            HdM            
        })
        setListPlayers(adds)
        setNewPlayer(initialPlayerState)
        handlePlayerModal()

    }

    
    const sorting = e => {
        let sortingBy = e.target.value
        setSorted(sortingBy)
    }
    
    const handleRemovePlayer = (nom) => {
        let newList = listPlayers.filter((item) => item.Joueur !== nom)
        setListPlayers (newList)
    }

    const manageState = ({item}) => {
        setModalState(true)
        setModalData(item)
    }

    const getRandom = () => {
       const randomPlayers = _.chunk(_.sampleSize(listPlayers, [22]), 11) 

       console.log(randomPlayers)
    }

    return (
        <div>
            <button onClick={() => managePlayerState()}>Add Player</button>
            <button disabled={!(listPlayers.length >= 22)} onClick={() => {setTeamModal(true); getRandom()}}>Create Teams</button>

            <div className="sorting-section">
                <select onChange={sorting} className="sorting">
                    <option>All Players</option>
                    <option value="best">Best Players</option>
                    <option value="average">Average Players</option>
                </select>
            </div>
            <div className='player-list'>
                {
                    filteredPlayers.sort((a, b) => {
                        if (sorted === "best") {
                            return a.Passes_Reuisses < b.Passes_Reuisses && a.Passes_Decisives < b.Passes_Decisives ? 1 : -1 
                        } else if (sorted === "average") {
                            return a.Passes_Reuisses > b.Passes_Reuisses && a.Passes_Decisives > b.Passes_Decisives ? 1 : -1 
                        }
                        return 0
                    }).map((item) => (
                        <Card key={item.Joueur} item={item} removePlayer={handleRemovePlayer} showModal={manageState} />
                    ))
                }
            </div>
            { modalState && <PlayerStatisticsModal modalState={modalState} handleCloseModal={handleCloseModal} data={modalData} />}
            {playerModal && <AddPlayer modalState={playerModal} handleCloseModal={handlePlayerModal} handleSubmit={handleSubmit} handleChange={handleChange} playerData={newPlayer} />}

            {teamModal &&<Modal 
                isOpen={teamModal} 
                contentLabel="player statistics" 
                ariaHideApp={false} 
                onRequestClose={handleCloseTeamModal}
                closeTimeoutMS={200}
                className="modal--team"
            >
                <div>
                {_.chunk(_.sampleSize(listPlayers, [22]), 11).map((item, key) =>{ 
                     const winstats = _.round(_.meanBy(item, (o)=> parseInt(o.Passes_Decisives) ) ) + _.round(_.meanBy(item, (o)=> parseInt(o.Buts) ) )
                    return (
                    <div key={key} className='team--modal'> 
                    <div className='team-heading'> Team {key+1} {`Chances of Winning is ${winstats} `}</div>
                    { item.map(i => {   
                        return (
                    <div className='player-names' key={i.Joueur}>
                        {i.Joueur}<br/>
                    </div>)}
                            )} 
                    </div>)} ) }
                    </div>
                
            </Modal>}

        </div>
    )
}