import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import { express } from 'express';
import { cors } from 'cors';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'gamesdb.json')
const adapter = new JSONFile(file)
const gamesdb = new Low(adapter)
const app = express();
const { gamePosts } = gamesdb.data

app.use(cors({origin: '*'}));
app.use(express.json());

app.post('/allgames', async (request, response) => {
      const resObj = {
            games: allGames,
      }
      

})

// Read data from JSON file, this will set db.data content
// await gamesdb.read()

// // If file.json doesn't exist, db.data will be null
// // Set default data
// gamesdb.data ||= { gamePosts: [] }             // Node >= 15.x

// // Alternatively, you can also use this syntax if you prefer
// const { gamePosts } = gamesdb.data
// gamePosts.push('hello world')

// // Finally write db.data content to file
// await gamesdb.write()


module.exports = {gamesdb}