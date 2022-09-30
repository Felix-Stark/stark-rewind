import { useState } from "react";
import { AllGames, Game } from "../models/data";
import DisplayGame from "../components/displayGame";

function Home() {


      const [showGames, setShowGames] = useState<AllGames>()
      const [tenGames, setTenGames] = useState<AllGames>()

      

      // const recentGames: object = {
      //       AllGames: tenGames
      // }
      // const games: object = {
      //       AllGames: showGames
      // }
      // const game: object = {
      //       Game: showGames
      // }

      async function getGames() {
            const response = await fetch('http://0.0.0.0:8080/all-games', {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json();
            console.log('displayGames data=>', data);
            setShowGames(data)
            console.log('showGames=>', showGames)
            displayGame();
      }

      async function displayGame() {
            if (!showGames) {
                  return
            }
            // for (let index = 0; index < showGames.games.length; index++) {
            //       const gamesElement = showGames.games[index];
            //       console.log('for loop', gamesElement);
            // }
            
            const gameItems = showGames.games.map((game, index) => {
                  return <DisplayGame game={ game } key={ index } />
            })
      }

      async function showRecentGames() {
            
      }



      return (
            <div className="Home">
                  <h1>REWIND</h1>
                  <button onClick={getGames}>Visa alla spel</button>
                  <button onClick={showRecentGames}>Visa senaste spel</button>
                  <section className="show__games">

                  </section>
                  <article className="all-games">

                  </article>
                  <section className="recent">
                        <h3>Senaste matcher</h3>
                        
                  </section>
            </div>
      )
}

export default Home;