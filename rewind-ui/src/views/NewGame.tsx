import { Game } from "../models/data"
import { useEffect, useState } from 'react'



function NewGame() {

      const [newGame, setNewGame] = useState<Game>()
      const [playerName, setPlayerName] = useState<string>('');
      const [gameList, setGameList] = useState<Game[]>([])

      // useEffect(() => {
      //       localStorage.setItem('gameList', JSON.stringify(gameList))
      // }, [gameList])

      function addGame(e: React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault();
            if (!newGame) {return}
            const gameListCopy = [...gameList];
            const gameCopy = {...newGame}
            gameListCopy.push(gameCopy)
            setGameList(gameListCopy)
            console.log(localStorage)
      }

      function addPlayer(e: React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault();
            if(!newGame) {
                  return
            }
            const gameCopy:Game = {...newGame}
            gameCopy.players.push(playerName)
            console.log('addPlayer', gameCopy)
      }

      function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
            if (!newGame) {return}
            let gameCopy = {...newGame}
            if(e.target.name == 'activity') {
                  gameCopy.activity = e.target.value;
            } else if (e.target.name == 'minutesPlayed') {
                  gameCopy.minutesPlayed = e.target.value;
            } else if (e.target.name == 'winner') {
                  gameCopy.winner == e.target.value;
            } else if (e.target.name == 'secondPlace') {
                  gameCopy.secondPlace = e.target.value;
            } else if (e.target.name == 'thirdPlace') {
                  gameCopy.thirdPlace = e.target.value;
            } else if (e.target.name == 'date') {
                  gameCopy.date = e.target.value;
            }
            gameCopy.gameId = Math.random()
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
                        <input type="text" name="activity" placeholder="Aktivitet" onChange={(e)=> {changeHandler(e)}} />
                        <input type="text" name="winner" placeholder="Vinnare" />
                        <input type="text" name="secondPlace" placeholder="Andra plats" />
                        <input type="text" name="thirdPlace" placeholder="Tredje plats" />
                        <input type="number" name="minutesPlayed" />
                        <input type="date" name="date" />
                        <button onClick={(e) => {addGame(e)}}>Lägg till spel</button>
                  </form>
            </section>
      )
}

export default NewGame;