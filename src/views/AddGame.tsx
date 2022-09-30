import { Game } from "../models/data";
import { useState } from "react";
import { json } from "react-router-dom";
import { ReactReduxContext } from "react-redux";


export default function AddGame() {

      const [newGame, setNewGame] = useState<Game>();
      const [numOfPlayers, setNumOfPlayers] = useState<number>(1);
      const [inputPlayers, setInputPlayers] = useState<string>('1');
      const [playerNames, setPlayerNames] = useState<string[]>(['player']);

      const game: object = {
            Game: newGame
      }
      
      async function addGame() {

            const response = await fetch('http://localhost:8888/addgame', {
                  method: 'POST',
                  body: JSON.stringify(game),
                  headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json();
            console.log(data);
      }
      function addPlayers(e: React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault();
            console.log(numOfPlayers)
            const validateNumber = Number(inputPlayers)
            if (validateNumber > 0 && validateNumber <= 6) {
                  setNumOfPlayers(validateNumber)
                  if (playerNames.length != validateNumber) {
                        let namesCopy = {...playerNames}
                        while (playerNames.length < validateNumber) {
                              namesCopy.push('')
                        }
                        setPlayerNames(namesCopy)
                  }
            }
      }

      // <input type="text" id="players" placeholder="Spelare" onChange={(e) => {setNewGame(e.target.value)}} />
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

            }


            setNewGame(gameCopy)
      }
      let players = [];
      return (
            <section>
                  <form>
                        <label htmlFor="numOfPlayers">Antal spelare</label>
                        <input type="number" id="numOfPlayers" onChange={(e) => {setInputPlayers(e.target.value)}} />
                        <button onClick={addPlayers}>Lägg till spelare</button>
                  </form>
                  <form>
                        <label htmlFor="activity">Nytt spel</label>
                        <input type="text" name="activity" placeholder="Aktivitet" onChange={(e) => {changeHandler(e)}} />
                        <label htmlFor="match-time">Speltid</label>
                        <input type="number" name="match-time" onChange={changeHandler} />
                        <label htmlFor="game-date">Datum</label>
                        <input type="date" name="date" />
                        {playerNames.map(name => (
                              <input type="text" name="player" placeholder="Spelares namn" onChange={(e) => {changeHandler(e)}} />
                        ))}
                        <button onClick={addGame}>Lägg till spel</button>
                  </form>
            </section>
      )
}