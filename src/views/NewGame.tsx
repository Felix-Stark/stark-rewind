import { Game } from "../models/data"
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { uuid } from 'uuidv4'

type NewGameProps = {
  rewindGames: 'rewindGames';
  gameArr: Game[];
  setGameArr: React.Dispatch<React.SetStateAction<Game[]>>;
};

function NewGame(props: NewGameProps) {
      const navigate = useNavigate()
      const [newActivity, setNewActivity] = useState('')
      const [newWinner, setNewWinner] = useState('')
      const [newSecond, setNewSecond] = useState('')
      const [newThird, setNewThird] = useState('')
      const [newGameTime, setNewGameTime] = useState('')
      const [newDate, setNewDate] = useState('')


      let allGames = props.gameArr
      console.log('pre add', allGames.length)
      const newGame = {
            activity: newActivity,
            winner: newWinner,
            second: newSecond,
            third: newThird,
            gameTime: newGameTime,
            date: newDate
      }
      function addGame() {
            localStorage.setItem(props.rewindGames, allGames)
            console.log('in addGame', allGames.length)
      }

      function handleSubmit(e: FormEvent) {
            e.preventDefault()
            allGames.push(newGame)
            console.log('allGames at submit', allGames.length)
            addGame()
      }
      const handleActivity: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        if (e.target.value !== " ") {
          setNewActivity(e.target.value);
        }
      };
      const handleWinner: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        if (e.target.value !== " ") {
          setNewWinner(e.target.value);
        }
      };
      const handleSecond: (e: ChangeEvent<HTMLInputElement>) => void = (
        e
      ) => {
        if (e.target.value !== " ") {
          setNewSecond(e.target.value);
        }
      };
      const handleThird: (e: ChangeEvent<HTMLInputElement>) => void = (
        e
      ) => {
        if (e.target.value !== " ") {
          setNewThird(e.target.value);
        }
      };
      const handleGameTime: (e: ChangeEvent<HTMLInputElement>) => void = (
        e
      ) => {
        if (e.target.value !== " ") {
          setNewGameTime(e.target.value);
        }
      };
      const handleDate: (e: ChangeEvent<HTMLInputElement>) => void = (
        e
      ) => {
        if (e.target.value !== " ") {
          setNewDate(e.target.value);
        }
      };
      
      const navHome = () => {
            navigate('/')
      }


      return (
        <section>
          <form className="form__game" onSubmit={(e)=> {handleSubmit(e)}}>
            <input
              type="text"
              name="activity"
              placeholder="Aktivitet"
              onChange={(e) => {
                handleActivity(e);
              }}
            />
            <input
              type="text"
              name="winner"
              placeholder="Vinnare"
              onChange={(e) => handleWinner(e)}
            />
            <input
              type="text"
              name="second"
              placeholder="Andra plats"
              onChange={(e) => handleSecond(e)}
            />
            <input
              type="text"
              name="third"
              placeholder="Tredje plats"
              onChange={(e) => handleThird(e)}
            />
            <input
              type="number"
              name="game-time"
              placeholder="Time in minutes"
              onChange={(e) => handleGameTime(e)}
            />
            <input type="date" name="date" onChange={(e) => handleDate(e)} />
            <button type="submit">Lägg till spel</button>
          </form>
          <button onClick={navHome}>Tillbaka till hem</button>
        </section>
      );
}

export default NewGame;