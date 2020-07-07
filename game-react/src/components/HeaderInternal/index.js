import React from "react";
import './styles.css';

import User from "./objects/User"
import IconClose from "./objects/IconClose"
import Logo from "./objects/Logo"

const HeaderInternal = () => (
  <header className="header-internal">
    <Logo light={true} />
    <User className="-light" />
    <IconClose />
  </header>
)

export default HeaderInternal;