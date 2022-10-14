
const { gamesDB } = require('./database/lowdb')
const express = require('express');
const cors = require('cors');
const app = express();
// const { newUser } = require('./database/nedb');
const nedb = require('nedb-promise')



app.use(cors({origin: '*'}));
app.use(express.json());

const accountsDB = new nedb({ filename: 'accounts.db', autoload: true })
const gamesDB = new nedb({ filename: 'games.db', autoload: true })

app.post('/signup', async (request, response) => {
      const credentials = request.body;

      const resObj = {
            success: true,
            userExists: false
      }
      const userExists = await accountsDB({ username: credentials.username })
      if (userExists.length > 0) {
            resObj.userExists = true;
      }
      if (resObj.userExists) {
            resObj.userExists = true;
      } else {
            accountsDB.insert(credentials)
      }
      response.json(resObj)

})

app.post('/login', async (request, response) => {
      const credentials = request.body;
      
      const resObj = {
            success: true,
            user: '',
            games: [],
            wins: ''
      }

      const account = await accountsDB.find({ $and: [{ username: credentials.username }, { password: credentials.password }] })
      if (account.length > 0) {
            resObj.user = account[0].username;
      }
      response.json(resObj)
})

app.post('/new-game', async (request, response) => {
      const requestData = request.body;
      
      console.log(requestData)
      const resObj = {
            success: true
      }
      gamesDB.push(requestData)
      response.json(resObj)
})

app.get('/all-games', async (request, response) => {
      const allGames = await gamesDB.find({})
      const resObj = {
            games: allGames
      }
      response.json(resObj)
})

app.get('/find-game', async (request, response) => {
      const credentials = request.body;
      const resObj = {
            success: true,
            gameExist: true
      }
      const gameExist = await gamesDB.find({activity: credentials.activity})
      if (gameExist.length < 1) {
            resObj.gameExist = false
      }
      if (!resObj.gameExist) {
            resObj.success = false
      } else {
            gamesDB.find(gameExist)
      }
      console.log
      response.json(resObj)
})

app.listen(PORT, HOST, () => {
      console.log(`Running on http://${HOST}:${PORT}`)
})

