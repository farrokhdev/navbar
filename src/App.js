import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <section className="main">
        <Navbar/>
      </section>
    </Router>
    </>
  )
}

export default App
