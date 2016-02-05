import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function VenueMapView (props) {
  return (
   <section style={{height: "100%"}}>
      <GoogleMap containerProps={{
          style: {
            height: "100%",
          },
        }}
        defaultZoom={3}
        defaultCenter={{lat: -25.363882, lng: 131.044922}}>
        {props.markers.map((marker, index) => {
          return (
            <Marker
              {...marker}
              />
          );
        })}
      </GoogleMap>
    </section>
  );
}