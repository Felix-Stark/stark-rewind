
import { Routes, Route } from 'react-router-dom'
import './App.css'

const URL = `http://127.0.0.1:1337`;

import Home from './views/Home'
import NewGame from './views/NewGame';
import Account from './views/Account';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/new-game' element={ <NewGame /> } />
        {/* <Route path='/' element={ <Account /> } /> */}
      </Routes>
       
    </div>
  )
}

export default App
