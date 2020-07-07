import React from "react"
import "./App.css"
import Profile from './img/profile.jpg'

import Header from "./components/Header"
import Hashtag from "./components/Hashtag"
import Checkbox from "./objects/Checkbox"
import About from "./objects/About"
import HeaderInternal from "./components/HeaderInternal"
import AvatarProfile from "./objects/AvatarProfile"


const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox id="show" value="show" content="Mostrar eventos" />
      <About>
        <HeaderInternal />
        <AvatarProfile src={Profile} alt="Avatar Laís" />
      </About>
    </main>
  )
}

export default App
