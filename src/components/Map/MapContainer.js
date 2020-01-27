import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
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
          <h1>Ne găsești aici</h1>
        </div>
        <div>
          <Map
            className={"map"}
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{
              lat: 46.090972,
              lng: 23.600111
            }}
          >
            <Marker name={'Str.Călugăreni, nr 8, Alba Iulia'}/>
            <InfoWindow
              position={{
                lat: 46.090972,
                lng: 23.600111
              }}
               visible={true}>
                 <h2>Str.Călugăreni, nr 8, Alba Iulia</h2>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDk5HDDGsvmGQVWe_8Kto53wD0up92dtBw"
})(MapContainer);
