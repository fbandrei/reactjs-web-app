import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";
import { Icon } from "semantic-ui-react";

const mapStyles = {
  height: "400px"
};

export class MapContainer extends React.Component {
  render() {
    return (
      <div className={"mapContainer"}>
        <div className={"divIconHeader"}>
          <Icon name={"map marker"} circular size={"huge"} inverted />
          <h1>Locația noastră pe hartă</h1>
        </div>
        <div>
          <Map
            className={"map"}
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{
              lat: 46.060911,
              lng: 23.624067
            }}
          >
            <Marker />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDk5HDDGsvmGQVWe_8Kto53wD0up92dtBw"
})(MapContainer);
