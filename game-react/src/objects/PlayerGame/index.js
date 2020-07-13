import React from "react"
import "./style.css"
import playerX from "../../images/playerX.png"
import playerO from "../../images/playerO.png"

const PlayerGame = ({ content = "" }) => {
  const players = []
  players[""] = ""
  players["x"] = playerX
  players["o"] = playerO

  return (
    <button className="player-game">
      {players[content] && <img src={players[content]} alt={`Jogador ${content}`} />}
    </button>
  )
}

export default PlayerGame
