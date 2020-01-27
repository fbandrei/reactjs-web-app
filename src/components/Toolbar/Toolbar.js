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
        <a href="/">TINICHIGERIE - VOPSITORIE AUTO ALBA IULIA - 0745254700</a>
      </div>
      <div className={"toolbar_logo_mobile"}>
        <a href="/">Tinichigerie - Vopsitorie Auto</a>
        <a className={"phoneNumberMobile"} href={"tel:+40745254700"}>0745254700</a>
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
            <a href="#team">Echipa</a>
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
