import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import './App.scss'
import NewGame from './views/NewGame';

import Home from './views/Home';
import data from './assets/defaultData.json'
import { Game } from './models/data';
import Error from './views/Error';
// om inga spel i localGames så används defaultData. om det finns spel localGames så sparas dom i gameArr. 

function App() {
  const [gameArr, setGameArr] = useState<Game[]>([])

  let games: Game[] = [];
  const rewindGames = "rewindGames";
  
  let localGames = localStorage.getItem(rewindGames);
  useEffect(() => {
    if (!localGames) {
      games = data;
      setGameArr(games);
    } else {
      games = JSON.parse(localGames);
      setGameArr(games);
    }

  }, [localGames]);
  

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              gameArr={gameArr}
              setGameArr={setGameArr}
            />
          }
        />
        <Route
          path="/newgame"
          element={
            <NewGame
              gameArr={gameArr}
              setGameArr={setGameArr}
              // rewindGames={rewindGames}
            />
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App
