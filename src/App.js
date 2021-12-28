import React, { useState } from 'react';
import './App.css';
import { PlayerList } from './components/playerList/playerList';
import { Players } from './components/db';
import { AddPlayer } from './components/addPlayer/addPlayer';

const App = (props) => {

  const [players , setPlayers] = useState(Players);
  const [searchField, setSearchField] = useState('');
  const [playerModal, setPlayerModal] = useState(false);

  const manageState = () => {
    setPlayerModal(!playerModal)
  }
  const handleCloseModal = () => {
    setPlayerModal(false)
}

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  return (
    <div className="App">
      <h1>Football Players List</h1>
      <input 
        type='search' 
        placeholder={"search players"} 
        onChange={handleChange} 
        className='search'
      />
      <button onClick={() => manageState()}>Add Player</button>
      <AddPlayer modalState={playerModal} handleCloseModal={handleCloseModal} data={props} />
      <PlayerList players={players} searchTerm={searchField}  />
    </div>
  );
}

export default App;