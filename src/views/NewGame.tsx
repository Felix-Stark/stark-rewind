import { Game } from "../models/data"
import { FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { uuid } from 'uuidv4'

type NewGameProps = {
  rewindGames: 'rewindGames';
  gameArr: Game[];
  setGameArr: React.Dispatch<React.SetStateAction<Game[]>>;
};

function NewGame(props: NewGameProps) {
      const navigate = useNavigate()
      // const [newGame, setNewGame] = useState<Game>({
      //       activity: '',
      //       winner: '',
      //       second: '',
      //       third: '',
      //       gameId: '',
      //       gameTime: '',
      //       date: ''
      // })
      const [newGame, setNewGame] = useState<Game>()
      let allGames = props.gameArr
      console.log('pre add', allGames.length)
      
      function addGame() {
            if(newGame !== undefined) {
                  // allGames.push(newGame);
                  // localStorage.setItem(props.rewindGames, JSON.stringify(allGames))
            }
            console.log('in addGame', allGames.length)
      }

      function handleSubmit(e: FormEvent) {
            e.preventDefault()
            console.log(newGame)
            addGame()
      }

      function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
            e.preventDefault();
            if(newGame !== undefined) {
                  let newGameCopy = {...newGame}

                  if(e.target.name == 'activity') {
                        newGameCopy.activity = e.target.value;
                        console.log('activity: ', newGameCopy )
                  } else if( e.target.name == 'winner' ) {
                        newGameCopy.winner = '#1' + e.target.value
                  } else if( e.target.name == 'second') {
                        newGameCopy.second == '#2' + e.target.value
                  } else if( e.target.name == 'third') {
                        newGameCopy.third == '#3' + e.target.value
                  } else if (e.target.name == 'game-time') {
                        newGameCopy.gameTime = e.target.value;
                  } else if (e.target.name == 'date') {
                        newGameCopy.date = e.target.value;
                  } else {
                  }
                  setNewGame(newGameCopy)
            }
      }
      const navHome = () => {
            navigate('/')
      }


      return (
        <section>
          {/* <form className="form__game">
                        <input type="text" name="activity" placeholder="Aktivitet" onChange={e => {setNewGame({
                          activity: e.target.value,
                          winner: "",
                          second: "",
                          third: "",
                          gameId: "",
                          gameTime: "",
                          date: "",
                        });}} />
                        <input type="text" name="winner" placeholder="Vinnare" />
                        <input type="text" name="secondPlace" placeholder="Andra plats" />
                        <input type="text" name="thirdPlace" placeholder="Tredje plats" />
                        <input type="number" name="minutesPlayed" placeholder="Time in minutes" />
                        <input type="date" name="date" />
                        <button onClick={handleSubmit}>Lägg till spel</button>
                  </form> */}
          <form className="form__game">
            <input
              type="text"
              name="activity"
              placeholder="Aktivitet"
              onChange={(e) => {
                changeHandler(e);
              }}
            />
            <input
              type="text"
              name="winner"
              placeholder="Vinnare"
              onChange={(e) => changeHandler(e)}
            />
            <input
              type="text"
              name="second"
              placeholder="Andra plats"
              onChange={(e) => changeHandler(e)}
            />
            <input
              type="text"
              name="third"
              placeholder="Tredje plats"
              onChange={(e) => changeHandler(e)}
            />
            <input
              type="number"
              name="game-time"
              placeholder="Time in minutes"
              onChange={(e) => changeHandler(e)}
            />
            <input type="date" name="date" onChange={(e) => changeHandler(e)} />
            <button onClick={handleSubmit}>Lägg till spel</button>
          </form>
          <button onClick={navHome}>Tillbaka till hem</button>
        </section>
      );
}

export default NewGame;