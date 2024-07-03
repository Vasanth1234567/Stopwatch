import React from 'react'
import { useState } from 'react'
import CounterComponent from './Components/CounterComponent'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <React.Fragment>
      <CounterComponent/>
    </React.Fragment>
  )
}

export default App