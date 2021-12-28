import React, { useState } from 'react';
import './addPlayer.css';
import { Players } from '../db';
import Modal from 'react-modal';

export const AddPlayer = (props) => {
    
    const [newPlayer, setNewPlayer] = useState({
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
    })

    const { Joueur, Apps, Mins, Buts, Passes_Decisives, Jau, Rou, TpM, Passes_Reuisses, AériensGagnés, HdM  } = newPlayer

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewPlayer({ ...newPlayer, [name]: value }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let adds = [...Players]
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
        console.log(newPlayer)
        setNewPlayer(adds)
        e.target.reset()

    }

    return (
            <Modal
            isOpen={props.modalState} 
            contentLabel="player statistics" 
            ariaHideApp={false} 
            onRequestClose={props.handleCloseModal}
            closeTimeoutMS={200}
            className="player--modal"
            >
            <div>
                <h4>Add Player</h4>
                <form className='form'>
                    <div>
                        <div>
                        <p>Joueur</p>
                        <input type="text" name="Joueur" value={Joueur} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>Apps</p>
                        <input type="number" name="Apps" value={Apps} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>Mins</p>
                        <input type="number" name="Mins" value={Mins} onChange={handleChange} required className="source" />
                        </div>

                        <p>Buts</p>
                        <input type="number" name="Buts" value={Buts} onChange={handleChange} required className="source" />

                        <div>
                        <p>Passes_Decisives</p>
                        <input type="number" name="Passes_Decisives" value={Passes_Decisives} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>Jau</p>
                        <input type="number" name="Jau" value={Jau} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>Rou</p>
                        <input type="number" name="Rou" value={Rou} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>TpM</p>
                        <input type="number" name="TpM" value={TpM} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>Passes_Reuisses</p>
                        <input type="number" name="Passes_Reuisses" value={Passes_Reuisses} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>AériensGagnés</p>
                        <input type="number" name="AériensGagnés" value={AériensGagnés} onChange={handleChange} required className="source" />
                        </div>

                        <div>
                        <p>HdM</p>
                        <input type="number" name="HdM" value={HdM} onChange={handleChange} required className="source" />
                        </div>
                    </div>
                    <button onClick={() => handleSubmit} className='modal--button' type="submit">Submit</button>
                </form>
            </div>
            </Modal>
    )
}
