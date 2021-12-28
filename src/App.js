import React, { useState } from 'react';
import './App.css';
import { PlayerList } from './components/playerList/playerList';
import { Players } from './components/db';

const App = () => {

  const [searchField, setSearchField] = useState('');

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
      <PlayerList players={Players} searchTerm={searchField} />
    </div>
  );
}

export default App;