import { Game } from '../models/data'

interface DisplayGameProps {
      gameInfo: Game;
}

export default function DisplayGame(props:DisplayGameProps) {
      const { activity, players, minutesPlayed, winner, secondPlace, thirdPlace, date } = props.gameInfo;

      const playerItem = players.map((player) => <li>{player}</li> )
      
      return (
            <section>
                  <header>
                        <h3>{ activity }</h3>
                        <p>Speltid: { minutesPlayed } minuter</p>
                  </header>
                  <h3>Ranking</h3>
                  <ol>
                        <li>{winner}</li>
                        <li>{secondPlace}</li>
                        <li>{thirdPlace}</li>
                        {/* {playerItem} */}
                  </ol>
            </section>
      )
}