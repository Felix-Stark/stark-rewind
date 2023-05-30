import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Game } from '../models/data'
import data from "../assets/defaultData.json";
import DisplayGame from '../components/DisplayGame'
import NewGame from './NewGame'
import '../style/_main.scss'

type HomeProps = {
  gameArr: Game[];
  setGameArr: React.Dispatch<React.SetStateAction<Game[]>>;
};

export default function Home(props: HomeProps) {
      const navigate = useNavigate();
      let tenWins: number = 0;
      let allWins: number = 0;
	  let filterWins: number = 0;
      const [showAll, setShowAll] = useState<boolean>(true);
      const [showTen, setShowTen] = useState<boolean>(false);
      const [showFilter, setShowFilter] = useState<boolean>(false);
      const [selectedPlayer, setSelectedPlayer] = useState('');
	  const [filterGames, setFilterGames] = useState<Game[]>([])

      const handleAll = () => {
			setSelectedPlayer('')
			setFilterGames([]);
            if(!showAll) {
                  setShowAll(true)
            }
            if(showTen) {
                  setShowTen(false)
            }
			if(showFilter) {
				setShowFilter(false)
			}
      };
      const handleTen = () => {
			setSelectedPlayer('')
			setFilterGames([]);
            if(!showTen) {
                  setShowTen(true)
            }
            if(showAll) {
                  setShowAll(false)
            }
			if (showFilter) {
              setShowFilter(false);
            }
      };
      const handleFilter = (player: string) => {
			setSelectedPlayer(player)
            if( !showFilter ) {
                  setShowFilter(true)
            } 
            if( showAll) {
                  setShowAll(false)
            }
            if( showTen) {
                  setShowTen(false)
            }
			const selectedPlayerGames = props.gameArr.filter((game) =>  game.players.includes(player));
			setFilterGames(selectedPlayerGames);
      }
      
      const gamesByDate = props.gameArr?.reverse().sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      const tenByDate = props.gameArr?.reverse().sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      

      const mapAllGames = gamesByDate?.map((game, index) => {
            if (game.winner == "AddictiveDirt2") {
              allWins++;
            }
            return (
              <DisplayGame
                gameInfo={game}
                gameArr={props.gameArr}
                handleFilter={handleFilter}
                key={index}
              />
            );
      });


      const mapTenGames = tenByDate?.reverse().map((game, index) => {

            if(index < 10) {
                  if (game.winner == "AddictiveDirt2") {
                        tenWins++;
                  }
                  return (
                    <DisplayGame
                      gameInfo={game}
                      gameArr={props.gameArr}
                      handleFilter={handleFilter}
                      key={index}
                    />
                  );
            }
      });

	  const mapFilterGames = filterGames.map((game, index) => {
		if(game.winner == selectedPlayer) {
			filterWins++;
		}
		return (
			<DisplayGame
				gameInfo={game}
				gameArr={props.gameArr}
				handleFilter={handleFilter}
				key={index}
			/>
    );
	  })
      

      const newGame = () => {
            navigate('/newgame')
      }
      return (
        <div className="home">
			<header>
				<h1>AddictiveDirt2's Destiny 2 Strike efficiency tracker</h1>
			</header>
            
			<div>
				<button onClick={handleAll} className="main_btn">Visa alla spel</button>
				<button onClick={handleTen} className="main_btn">Visa 10 senaste</button>
				<button onClick={newGame} className="main_btn">Nytt spel</button>
			</div>
			<div>
				{ showAll ? 
					<h4 className="wins">Vinster: {String(allWins)} av {String(props.gameArr.length)} spelade</h4>
					: ""
				}
				{ showTen ? 
					<h4 className="wins">Vinster: { String(tenWins) } av 10 senaste</h4>
					:""
				}
				{ showFilter ? 
					<h4 className="wins">Vinster: {String(filterWins)} av {String(filterGames.length)} spelade</h4>
					
					: ''}
			</div>
			<section className="game-list">
					{ selectedPlayer ? selectedPlayer : <p>Klicka på en spelare för att filtrera</p>}
				<>
				{ showAll ? mapAllGames?.reverse() : "" }
				{ showTen ? mapTenGames : "" }
				{ showFilter ? mapFilterGames : ''}
				</>
			</section>

        </div>
      );
}