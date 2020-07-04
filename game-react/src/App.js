import React from "react"
import "./App.css"

import Header from "./components/Header"
import Hashtag from "./components/Hashtag"
import Checkbox from "./objects/Checkbox"
import About from "./objects/About"
import User from "./objects/User"
import IconClose from "./objects/IconClose"
import Logo from "./objects/Logo"

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox id="show" value="show" content="Mostrar eventos" />
      <About>
        <Logo light={true} />
        <User className= "-light" />
        <IconClose />
      </About>
    </main>
  )
}

export default App
