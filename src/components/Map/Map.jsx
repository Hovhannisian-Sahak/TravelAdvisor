import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";
import mapStyles from "./mapStyles";

import NodeMarker from "./NodeMarker";
export default function Map({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
}) {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, i) => (
          <NodeMarker
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            place={place}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
