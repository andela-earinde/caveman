import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function VenueMapView (props) {
  console.log( props.markers[0].position);
  return (
    <GoogleMap containerProps={{
        style: {
          height: "300px",
        },
      }}
      defaultZoom={10}
      defaultCenter={{lat: props.markers[0].position.lat, lng: props.markers[0].position.lng}}>
      {props.markers.map((marker, index) => {
        return (
          <Marker
            {...marker}
            />
        );
      })}
    </GoogleMap>
  );
}