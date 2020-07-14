import React, { useState } from "react"
import "./App.css"

import HeaderGame from "./components/HeaderGame"
import HashtagGame from "./components/HashtagGame"
import InputCheckbox from "./objects/InputCheckbox"
import LayerDark from "./objects/LayerDark"
import HeaderInternal from "./components/HeaderInternal"
import ProfileUser from "./components/ProfileUser"
import HistoryGame from "./components/HistoryGame"

const App = () => {
  const [activeAbout, setActiveAbout] = useState(" ")
  const [activeHistoryGame, setHistoryGame] = useState("")

  const handleClickRemove = () => setActiveAbout(" ")

  const handleClick = () => {
    setHistoryGame(old => (old === "-active" ? "" : "-active"))
  }
  return (
    <main className="app">
      <HeaderGame onClick={handleClick} />
      <HashtagGame />
      <InputCheckbox onClick={handleClick} id="show" value="show" content="Mostrar eventos" />
      <HistoryGame className={activeHistoryGame} />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  )
}

export default App
