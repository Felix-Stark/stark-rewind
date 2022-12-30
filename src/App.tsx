import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import './App.css'
import NewGame from './views/NewGame';
import Nav from './views/Nav';
import Home from './views/Home';
import { data } from './assets/defaultData'
import { Game } from './models/data';
import Error from './views/Error';
// om inga spel i localGames så används defaultData. om det finns spel localGames så sparas dom i gameArr. 

function App() {
  const [gameArr, setGameArr] = useState<Game[]>([])

  let games: Game[] = [];
  const rewindGames = "rewindGames";
  
  useEffect(() => {
    let localGames = localStorage.getItem(rewindGames);
    if (!localGames) {
      games = data.games;
      setGameArr(games);
    } else {
      games = JSON.parse(localGames);
      setGameArr(games);
    }
    console.log('in uE gameArr', gameArr)
  }, [gameArr]);
  

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home gameArr={gameArr} />} />
        <Route path="/newgame" element={<NewGame gameArr={gameArr} setGameArr={setGameArr} rewindGames={rewindGames} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App
