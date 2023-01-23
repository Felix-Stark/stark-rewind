import { Game } from '../models/data'
import { data } from '../assets/defaultData'
import '../style/_card.scss'
import { Dispatch } from 'react';


type DisplayGameProps = {
  gameInfo: Game;
  gameArr: Game[];
  playerGames: Game[];
  setPlayerGames: React.Dispatch<React.SetStateAction<Game[]>>;
};

export default function DisplayGame(props:DisplayGameProps) {
      

      const sortPlayer = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const chosen = props.gameArr.filter((game) => {
          let player = String(e.target)
          let tempArr = [...props.playerGames]
          if (player == game.winner || player == game.second || player == game.third ) {
            tempArr.push(game)
          }
          return tempArr
        });
        console.log(chosen)
      };
      
      return (
        <section className="game__card">
          <div className="card__head">
            <h2> {props.gameInfo.activity} </h2>
            <h3> {props.gameInfo.date} </h3>
            <p>Game time: {props.gameInfo.gameTime} </p>
          </div>
          <ul className="rank">
            <li className="player first">
              First place:
              <span onClick={(e) => sortPlayer(e) }>{props.gameInfo.winner}</span>
            </li>
            <li className="player second">
              <span>Second place:</span> {props.gameInfo.second}
            </li>
            <li className="player third">
              <span>Third place:</span> {props.gameInfo.third}
            </li>
          </ul>
        </section>
      );
}