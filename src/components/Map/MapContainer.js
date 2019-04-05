import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";

const mapStyles = {
  position: "relative",
  width: "100%",
  height: "400px"
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDk5HDDGsvmGQVWe_8Kto53wD0up92dtBw"
})(MapContainer);
