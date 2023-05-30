import { Game } from "../models/data"
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { uuid } from 'uuidv4'

type NewGameProps = {
  gameArr: Game[];
  setGameArr: React.Dispatch<React.SetStateAction<Game[]>>;
};

const rewindGames = 'rewindGames';

function NewGame(props: NewGameProps) {
      const navigate = useNavigate()
      const [newWinner, setNewWinner] = useState('')
      const [newSecond, setNewSecond] = useState('')
      const [newThird, setNewThird] = useState('')
      const [newGameTime, setNewGameTime] = useState('')
      const [newDate, setNewDate] = useState('')




      const newGame = {
            activity: 'Strike',
            players: [newWinner, newSecond, newThird],
            winner: newWinner,
            secondPlace: newSecond,
            thirdPlace: newThird,
            gameTime: newGameTime,
            date: newDate,
            gameId: props.gameArr.length,
      }
      
	
	function handleSubmit(e: FormEvent) {
		e.preventDefault()
		let gamesCopy = [...props.gameArr];
		gamesCopy.push(newGame);
		props.setGameArr(gamesCopy);
		localStorage.setItem(rewindGames, JSON.stringify(gamesCopy))
		navigate("/");

      }
      
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
      

	return (
	<>
		<h2>Ny Strike</h2>
		<form
		className="form__game"
		onSubmit={(e) => {
			handleSubmit(e);
		}}
		>
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
			placeholder="Speltid i minuter"
			onChange={(e) => handleGameTime(e)}
		/>
		<input type="date" name="date" onChange={(e) => handleDate(e)} />
		<button type="submit" className="main_btn">
			Lägg till spel
		</button>
		</form>
		<button className="secondary_btn" onClick={() => {navigate(-1)}}>Gå tillbaka</button>
	</>
	);
}

export default NewGame;