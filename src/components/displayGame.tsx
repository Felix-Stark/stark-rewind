import { Game } from "../models/data" 
interface DisplayGameProps {
      game: Game
}

export default function DisplayGame(props:DisplayGameProps) {
      const { activity, players, matchTime, date, winner } = props.game
      const playerItem = players.map((player) => {
            return <p>{player}</p>
      })
      return (
            <section className="game-container">
                  <h3>{activity} {date}</h3>
                  <div>
                        { playerItem }
                        <p>{ matchTime }</p>
                        <p>{ winner }</p>
                  </div>
            </section>
      )
}