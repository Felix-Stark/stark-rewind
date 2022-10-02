const nedb = require('nedb-promise')

const accountsDB = new nedb({ filename: 'accounts.db', autoload: true })
const gamesDB = new nedb({ filename: 'games.db', autoload: true })

async function newUser(credentials){
      const addUser = await accountsDB.insert({credentials})
      return addUser;
}

async function newGame(credentials) {
      const addGame = await gamesDB.insert({credentials})
      return addGame;
}

async function removeGame(gameToDelete) {
      const deleteGame = await gamesDB.remove({gameToDelete})
      return deleteGame;
}

async function showGames() {
      const gameList = await gamesDB.find({});
      return gameList;
}

async function filterGames(filterQuery) {
      const filteredGames = await gamesDB.find({filterQuery})
      return filteredGames;
}

module.exports = { newUser, newGame, removeGame, showGames, filterGames }