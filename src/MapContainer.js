import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '99%',
    height: '100%'
  }

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google} zoom={12} style={style}
            onClick={this.onMapClicked} initialCenter={{ lat: 48.864, lng: 2.349 }} >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'}
                  
                   />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }

  
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCUDWMk5mUwstVFm4-PDClZBp2w1xP5Tjg")
  })(MapContainer)