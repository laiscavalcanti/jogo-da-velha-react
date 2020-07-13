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
  const handleClick = () => setActiveAbout("-active")
  const handleClickRemove = () => setActiveAbout(" ")
  return (
    <main className="app">
      <HeaderGame onClick={handleClick} />
      <HashtagGame />
      <InputCheckbox id="show" value="show" content="Mostrar eventos" />
      <HistoryGame content="Adicionou O" />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  )
}

export default App
