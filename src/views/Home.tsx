import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Game } from '../models/data'
import { data } from "../assets/defaultData";
import DisplayGame from '../components/DisplayGame'
import NewGame from './NewGame'

type HomeProps = {
      gameArr: Game[]
}

export default function Home(props: HomeProps) {
      const navigate = useNavigate();
      const [showAll, setShowAll] = useState<boolean>(false)
      const [showTen, setShowTen] = useState<boolean>(false)
      const [showForm, setShowForm] = useState<boolean>(false)
      const handleAll = () => {
            if(showAll == true) {
                  setShowAll(false)
            } else {
                  setShowAll(true)
            }
            if(showTen == true) {
                  setShowTen(false)
            }
      }
      const handleTen = () => {
            if(showTen == true) {
                  setShowTen(false)
            } else {
                  setShowTen(true)
            }
            if(showAll == true) {
                  setShowAll(false)
            }
      }
      
      const mapAllGames = props.gameArr.map((game) => {
            return <DisplayGame gameInfo={game} key={ 'all' + Math.floor(Math.random() * 1000) } />
      })


      const mapTenGames = props.gameArr.slice(0).reverse().map((game, index) => {
            if(index < 10) {
                  return <DisplayGame gameInfo={game} key={ 'ten' + Math.floor(Math.random() * 1000) } />
            }
      })
      
      const newGame = () => {
            navigate('/newgame')
      }
      return (
            <div className="home">
                  <header>
                        <h1>Rewind</h1>
                        <h2>Game stats</h2>
                  </header>
                  <div>
                        <button onClick={handleAll}>Show all games</button>
                        <button onClick={handleTen}>Show 10 latest</button>
                        <button onClick={newGame}>Add new game</button>
                  </div>
                  <div>

                  </div>
                  <section className="game-list">
                        {showAll ? mapAllGames.reverse() : ''}
                        {showTen ? mapTenGames : ''}
                  </section>

            </div>
      )
}