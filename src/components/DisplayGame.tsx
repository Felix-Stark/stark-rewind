import { Game } from '../models/data'
import '../style/_card.scss'
import { Dispatch, MouseEvent } from 'react';


type DisplayGameProps = {
  gameInfo: Game;
  gameArr: Game[] | undefined;
  handleFilter: (player: string) => void;
};

export default function DisplayGame(props:DisplayGameProps) {

      
    return (
      <section className="game__card">
        <div className="card__head">
          <h2> {props.gameInfo.activity} </h2>
          <h3> {props.gameInfo.date} </h3>
          <p>Speltid: {props.gameInfo.gameTime} </p>
        </div>
        <ul className="rank">
          <li
            className="player first"
            onClick={() => props.handleFilter(props.gameInfo.winner)}
          >
            Första plats:
            {props.gameInfo.winner}
          </li>
          <li
            className="player second"
            onClick={() => props.handleFilter(props.gameInfo.secondPlace)}
          >
            Andra plats:
            {props.gameInfo.secondPlace}
          </li>
          <li
            className="player third"
            onClick={() => props.handleFilter(props.gameInfo.thirdPlace)}
          >
            Tredje plats:
            {props.gameInfo.thirdPlace}
          </li>
        </ul>
      </section>
    );
}