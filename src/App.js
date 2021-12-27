import React from 'react';
import './App.css';
import { PlayerList } from './components/playerList/playerList';
import { SearchBox } from './components/search-box/search-box';
import { Players } from './components/db';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      players: Players,
      searchField: ''
    }
    
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { players, searchField } = this.state
    console.log(players)
    const filteredPlayers = players.filter((item) => {
      return item.Joueur.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Football Players List</h1>
        <SearchBox placeholder='search players' handleChange={this.handleChange} />
        <PlayerList players={filteredPlayers}/>
      </div>
    );
  }
}

export default App;