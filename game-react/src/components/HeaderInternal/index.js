import React from "react"
import "./style.css"

import LayerDark from "../../objects/LayerDark"
import IconClose from "../../objects/IconClose"
import Logo from "../../objects/Logo"

const HeaderInternal = ({onClick}) => (
  <header className="header-internal">
    <Logo light={true} />
    <LayerDark className="-light" onClick={onClick} />
    <IconClose onClick={onClick}/>
  </header>
)

export default HeaderInternal
