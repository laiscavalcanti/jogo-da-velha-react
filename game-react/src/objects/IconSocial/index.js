import React from "react"

const IconSocial = (alt, src, action) => (
  <a target="_blank" href={action} rel="noopener noreferrer">
    {" "}
    <img className="icon-social" src={src} alt={alt} />{" "}
  </a>
)
export default IconSocial