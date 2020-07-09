import React from "react"
import AvatarProfile from "../../AvatarProfile"
import Profile from "../../images/profile.jpg"
import "./style.css"
import IconSocial from "../../objects/IconSocial"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Github } from "@styled-icons/boxicons-logos/Github"

const ProfileUser = () => (
  <dl className="profile.user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar Laís" />
    </dd>
    <dt className="title">Laís</dt>
    <dd className= "description">Lorem lorem lorem lorem</dd>
    <dd className="socials" >
      <IconSocial action="/" src={Twitter} alt="icone twitter" />
      <IconSocial action="/" src={Github} alt="icone github" />
    </dd>
  </dl>
)

export default ProfileUser
