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
import Footer from "./components/Footer/Footer";
import CallUs from "./components/CallUs/CallUs";
import ScrollableAnchor from "react-scrollable-anchor";

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
          <ScrollableAnchor id={"start"}>
            <div>
              <Start />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"services"}>
            <div>
              <Services />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"program"}>
            <div>
              <Program />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"team"}>
            <div>
              <Team />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"slideshow"}>
            <div>
              <SlideShow />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"map"}>
            <div>
              <MapContainer />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"footer"}>
            <div>
              <Footer />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"callus"}>
            <div>
              <CallUs />
            </div>
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default App;
