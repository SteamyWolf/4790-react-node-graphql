import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const MapGoogle = withScriptjs(
  withGoogleMap(({location}) => {
    return (
      <GoogleMap
        defaultZoom={location.coordinates.length === 0 ? 1 : 10}
        defaultCenter={{
          lat: parseFloat(location.coordinates.length === 0 ? 1 : location.coordinates[0].latitude),
          lng: parseFloat(location.coordinates.length === 0 ? 1 : location.coordinates[0].longitude)
        }}
      />
    );
  })
);

export default MapGoogle;