import React from 'react';
import './addPlayer.css';
import Modal from 'react-modal';

export const AddPlayer = (props) => {

    const { Joueur, Apps, Mins, Buts, Passes_Decisives, Jau, Rou, TpM, Passes_Reuisses, AériensGagnés, HdM  } = props.playerData

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
                <form className='form' onSubmit={props.handleSubmit}>
                    <div className='form-container'>
                        <span>
                        <label className='label'>Joueur</label>
                        <input type="text" name="Joueur" value={Joueur} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>Apps</label>
                        <input type="number" name="Apps" value={Apps} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>Mins</label>
                        <input type="number" name="Mins" value={Mins} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>Buts</label>
                        <input type="number" name="Buts" value={Buts} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>Passes_Decisives</label>
                        <input type="number" name="Passes_Decisives" value={Passes_Decisives} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>Jau</label>
                        <input type="number" name="Jau" value={Jau} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>Rou</label>
                        <input type="number" name="Rou" value={Rou} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>TpM</label>
                        <input type="number" name="TpM" value={TpM} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>Passes_Reuisses</label>
                        <input type="number" name="Passes_Reuisses" value={Passes_Reuisses} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>AériensGagnés</label>
                        <input type="number" name="AériensGagnés" value={AériensGagnés} onChange={props.handleChange} required className="source" />
                        </span>
                        <span>
                        <label>HdM</label>
                        <input type="number" name="HdM" value={HdM} onChange={props.handleChange} required className="source" />
                        </span>
                        <button className='modal--button' type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </Modal>
    )
}
