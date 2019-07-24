import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieSliderItem from "./MovieSliderItem";

class MovieSlider extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  next = () => {
    this.ref.current.slickNext();
  };
  previous = () => {
    this.ref.current.slickPrev();
  };

  handleClick = (id) => {
    // console.log('haha')
    this.props.history.push(`/movie/${id}`)
  };

  render() {
    var settings = {
      dots: false,
      arrows: false,
      variableWidth: true,
      draggable: false
    };

    const { data, title } = this.props;
    return (
      <div>
        <h4 style={{ padding: "0 1rem", margin: "1rem 0" }}>{title}</h4>
        <div style={{ position: "relative" }}>
          <Slider {...settings} ref={this.ref}>
            {data.map(item => (
              <MovieSliderItem
                handleClick={this.handleClick}
                id={item.id}
                title={item.title}
                vote_average={item.vote_average}
                poster_path={item.poster_path}
              />
            ))}
          </Slider>
          
          <div className="button" onClick={this.previous} style={{position: "absolute", left:"0px", top:"124px"}}>
            <IoIosArrowBack
              style={{ color: "white", height: "2em", width: "2em" }}
            />
          </div>
          <div className="button" onClick={this.next} style={{position: "absolute", right:"0px", top:"124px"}}>
            <IoIosArrowForward
              style={{ color: "white", height: "2em", width: "2em" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieSlider);
