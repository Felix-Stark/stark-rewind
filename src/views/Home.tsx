import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Game } from '../models/data'
import { data } from "../assets/defaultData";
import DisplayGame from '../components/DisplayGame'
import NewGame from './NewGame'
import '../style/Home.scss'

type HomeProps = {
      gameArr: Game[];

};

export default function Home(props: HomeProps) {
      const rewindGames = 'rewindGames'
      const navigate = useNavigate();
      let latestWins: number = 0;
      const [showAll, setShowAll] = useState<boolean>(false);
      const [showTen, setShowTen] = useState<boolean>(false);
      const [playerGames, setPlayerGames] = useState<Game[]>([])

      const handleAll = () => {
            if(showAll == true) {
                  setShowAll(false)
            } else {
                  setShowAll(true)
            }
            if(showTen == true) {
                  setShowTen(false)
            }
      };
      const handleTen = () => {
            if(showTen == true) {
                  setShowTen(false)
            } else {
                  setShowTen(true)
            }
            if(showAll == true) {
                  setShowAll(false)
            }
      };
      const gamesByDate = props.gameArr.reverse().sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      

      const mapAllGames = gamesByDate.map((game) => {
            if (game.winner == "Felix") {
              latestWins++;
            }
            return (
              <DisplayGame
                gameInfo={game}
                gameArr={props.gameArr}
                playerGames={playerGames}
                setPlayerGames={setPlayerGames}
                key={"all" + Math.floor(Math.random() * 1000)}
              />
            );
      });


      const mapTenGames = gamesByDate.map((game, index) => {
            if (game.winner == "Felix") {
              latestWins = 0
            }
            if(index < 10) {
                  latestWins++;
                  return (
                    <DisplayGame
                      gameInfo={game}
                      gameArr={props.gameArr}
                      playerGames={playerGames}
                      setPlayerGames={setPlayerGames}
                      key={"ten" + Math.floor(Math.random() * 1000)}
                    />
                  );
            }
      });

      
      
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
            <button onClick={handleAll} className="main_btn">Show all games</button>
            <button onClick={handleTen} className="main_btn">Show 10 latest</button>
            <button onClick={newGame} className="main_btn">Add new game</button>
          </div>
          <div>
            <h4 className="wins">Latest wins: { String(latestWins) }</h4>
          </div>
          <section className="game-list">
            {showAll ? mapAllGames.reverse() : ""}
            {showTen ? mapTenGames : ""}
          </section>
        </div>
      );
}