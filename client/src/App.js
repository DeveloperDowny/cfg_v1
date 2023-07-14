import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/">
        <Home/>
      </Route>
      </Routes>
    </>
  )
}

export default App
