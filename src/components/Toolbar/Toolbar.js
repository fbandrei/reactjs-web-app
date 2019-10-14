import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const Toolbar = props => (
  <header className={"toolbar"}>
    <nav className={"toolbar_navigation"}>
      <div className={"toolbar-toggle-button"}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={"toolbar_logo"}>
        <a href="/">GIGI AUTO - 0743792091</a>
      </div>
      <div className={"spacer"} />
      <div className={"toolbar_navigation-items"}>
        <ul>
          <li>
            <a href="#services">Servicii</a>
          </li>
          <li>
            <a href="#program">Program & Contact</a>
          </li>
          <li>
            <a href="#team">NOI</a>
          </li>
          <li>
            <a href="#slideshow">Galerie</a>
          </li>
          <li>
            <a href="#map">Locatie</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
