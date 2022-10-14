import { useState, useEffect } from 'react'
import gameList from '../../../rewindDB/database/gamesdb.json'
import DisplayGame from '../components/DisplayGame'
import { Game } from '../models/data'



export default function GameList() {

      const games = gameList.gamePosts

      const gamesArr = useEffect(() => {
            localStorage.getItem('allGames')
      })
      console.log(gamesArr)
      
      const gameItem = games.map((game) => <DisplayGame gameInfo={game} key={game.gameId} />)
      console.log(gameItem)
      
      return (
            <section className='game-list'>
                  { gameItem }
            </section>
      )
}