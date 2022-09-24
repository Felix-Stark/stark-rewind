import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from './views/Home'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/start' element={ <Home />} />

      </Routes>
       
    </div>
  )
}

export default App
