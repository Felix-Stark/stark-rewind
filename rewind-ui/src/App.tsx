import GameList from './views/GameList';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NewGame from './views/NewGame';
import Nav from './views/Nav';
import Home from './views/Home';
import games from './assets/games.json'
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/new-game' element={ <NewGame />} />
        <Route path='/all-games' element={ <GameList />} />
      </Routes>
    </div>
  )
}

export default App
