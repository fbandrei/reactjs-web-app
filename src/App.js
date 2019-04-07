import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Start from "./components/Start/Start";
import "./App.css";
import Team from "./components/Team/Team";
import MapContainer from "./components/Map/MapContainer";
import Program from "./components/Program/Program";
import SlideShow from "./components/SlideShow/SlideShow";
import Services from "./components/Services/Services";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className={"wrapper"}>
          <div>
            <Start />
          </div>
          <div>
            <Services />
          </div>
          <div>
            <Program />
          </div>
          <div>
            <Team />
          </div>
          <div>
            <SlideShow />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
