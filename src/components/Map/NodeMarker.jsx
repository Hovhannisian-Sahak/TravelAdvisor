import React from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

export default function NodeMarker({ place }) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.markerContainer}>
      {!matches ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="subtitle2" gutterBottom>
            {place.name}
          </Typography>
          <img
            className={classes.pointer}
            src={
              place.photo
                ? place.photo.images.large.url
                : "https://media-cdn.tripadvisor.com/media/photo-s/0d/5d/72/c9/romantic-table-at-restaurant.jpg"
            }
            alt={place.name}
          />
          <Rating size="small" value={Number(place.rating)} readOnly />
        </Paper>
      )}
    </div>
  );
}
