import React from "react";

import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="#services" onClick="">Servicii</a>
        </li>
        <li>
          <a href="#program">Program & Contact</a>
        </li>
        <li>
          <a href="#team">Echipa</a>
        </li>
        <li>
          <a href="#slideshow">Galerie</a>
        </li>
        <li>
          <a href="#map">Locatie</a>
        </li>
      </ul>
    </nav>
  );

};

export default SideDrawer;
