import { Game } from "../models/data";
import { useState } from "react";


export default function NewGame() {

      const [newGame, setNewGame] = useState<Game>({activity: '', players: [], matchTime: '', date: '', winner: ''});
      const [playerName, setPlayerName] = useState<string>('');

      const game: object = {
            newGame
      }
     
      async function addGame(e: React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault()
            const response = await fetch('http://0.0.0.0:8888/new-game', {
                  method: 'POST',
                  body: JSON.stringify(game),
                  headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json();
            console.log('data', data);
            console.log('addGame game', game)
      }
      
      function addPlayer(e: React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault()
            if(!newGame) {
                  return
            }
            const gameCopy:Game = {...newGame}
            gameCopy.players.push(playerName)
            console.log('addPlayer', gameCopy)
      }
      

      function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
            if (!newGame) {
                  return
            }
            let gameCopy:Game = {...newGame}
            if (e.target.name == 'activity') {
                  gameCopy.activity = e.target.value;

            } else if (e.target.name == 'date') {
                  gameCopy.date = e.target.value;

            } else if (e.target.name == 'match-time') {
                  gameCopy.matchTime = e.target.value;

            }else if (e.target.name == 'winner') {
                  gameCopy.winner = e.target.value;
            }

            setNewGame(gameCopy)
      }
      
      return (
            <section>
                  <form>
                        <label htmlFor="players">Lägg till spelare</label>
                        <input type="text" id="player" onChange={(e) => {setPlayerName(e.target.value)}} />
                        <button onClick={addPlayer}>Lägg till spelare</button>
                  </form>
                  <form>
                        <label htmlFor="activity">Nytt spel</label>
                        <input type="text" name="activity" placeholder="Aktivitet" onChange={(e) => {changeHandler(e)}} />
                        <label htmlFor="match-time">Speltid</label>
                        <input type="number" name="match-time" onChange={(e) => {changeHandler(e)}} />
                        <label htmlFor="winner">Vinnare</label>
                        <input type="text" name="winner" onChange={(e) => {changeHandler(e)}} />
                        <label htmlFor="game-date">Datum</label>
                        <input type="date" name="date" onChange={(e) => {changeHandler(e)}} />
                        
                        <button onClick={(e) => {addGame(e)}}>Lägg till spel</button>
                  </form>
            </section>
      )
}