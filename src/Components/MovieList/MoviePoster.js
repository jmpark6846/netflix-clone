import React from "react";
import PropTypes from "prop-types";

const sizeMap = {
  small: "",
  medium: "w185",
  large: "w342"
};

const widthFullStyle = {
  width: "100%"
};

function MoviePoster({ poster_path, size, fullWidth }) {
  const MOVIE_BASE_URL = "http://image.tmdb.org/t/p/";
  const sizeSelected = size || "medium";
  const widthStyle = fullWidth ? widthFullStyle : {};
  return (
    <img
      style={widthStyle}
      src={`${MOVIE_BASE_URL}${sizeMap[sizeSelected]}/${poster_path}`}
    />
  );
}

MoviePoster.propTypes = {
  poster_path: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default MoviePoster;
