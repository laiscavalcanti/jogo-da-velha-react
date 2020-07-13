import React from "react"
import "./style.css"
import Logo from "../../objects/Logo"
import AboutLink from "../../objects/AboutLink"
import MenuGame from "../../objects/MenuGame"

const HeaderGame = ({ onClick }) => (
  <header className="header">
    <Logo />
    <AboutLink onClick={onClick} />
    <MenuGame onClick={onClick} />
  </header>
)

export default HeaderGame
