import { useState, useEffect } from 'react'
import games from '../assets/games.json'
import DisplayGame from '../components/DisplayGame'
import { Game } from '../models/data'



export default function GameList() {
      const [allGames, setAllGames] = useState<Game[]>([])

      const gamesArr = useEffect(() => {
            localStorage.getItem('allGames')
      })
      console.log(gamesArr)
      
      const gameItem = allGames.map((game) => <DisplayGame gameInfo={game} key={game.gameId} />)
      console.log(gameItem)
      
      return (
            <section className='game-list'>
                  { gameItem }
            </section>
      )
}