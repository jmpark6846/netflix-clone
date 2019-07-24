import React from "react";
import PropTypes from "prop-types";

function MovieSliderItem({ id, img_url, title, vote_average, handleClick }) {
  return (
    <div style={{ width: 185, position: "relative", padding: "0px 2px" }} onClick={()=>handleClick(id)}>
      <img src={img_url} />
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          width: "185px"
        }}
      >
        <label>{vote_average}</label>
        <label>{title}</label>
      </div>
    </div>
  );
}

MovieSliderItem.propTypes = {
  id: PropTypes.number,
  img_url: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  handleClick: PropTypes.func
};

export default MovieSliderItem;
