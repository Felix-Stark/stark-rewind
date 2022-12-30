import { Game } from '../models/data'
import { data } from '../assets/defaultData'

type DisplayGameProps = {
      gameInfo: Game;
}

export default function DisplayGame(props:DisplayGameProps) {


      
      
      return (
            <div className='game__item'>
                  <header>
                        <h2> {props.gameInfo.activity} </h2>
                        <h3> {props.gameInfo.date} </h3>
                        <p>Game time: {props.gameInfo.gameTime} </p>
                  </header>
                  <ul className="rank">
                        <li>First place: {props.gameInfo.winner}</li>
                        <li>Second place: {props.gameInfo.second}</li>
                        <li>Third place: {props.gameInfo.third}</li>
                  </ul>
            </div>
      )
}