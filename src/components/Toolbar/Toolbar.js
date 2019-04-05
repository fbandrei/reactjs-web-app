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
            <a href="/">Program</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Prices</a>
          </li>
          <li>
            <a href="/">Pictures</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
