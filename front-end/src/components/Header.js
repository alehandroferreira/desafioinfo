import React from "react";

import logoImage from '../assets/lg-info.png'

export default function Header({ title, children }) {
  return (
    <header id="logoInfo">
      <img src={logoImage} width={300}/>
    </header>
  );
}
