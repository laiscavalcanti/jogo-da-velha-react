import React from "react"
import "./styles.css"

const About = (className = " ", onClick) => (
  <a href="#to-do" className={`page-about ${className}`} onClick={onClick}>
    SOBRE
  </a>
)

export default About
