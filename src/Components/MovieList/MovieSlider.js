import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";


class MovieSlider extends React.Component { 
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }
    next = () => {
        this.ref.current.slickNext();
    }
    previous = () => {
        this.ref.current.slickPrev();
    }

    render(){
        var settings = {
            dots: false,
            arrows: false,
            variableWidth: true,
            draggable: false
        }; 
        const MOVIE_BASE_URL = "http://image.tmdb.org/t/p/"
        const POSTER_SIZE = "w185"
    
        const { data } = this.props
        return <div>
            <Slider  {...settings} ref={this.ref}>
                {data.map(item =>  
                <div style={{ width: 187 }}>
                    <img src={`${MOVIE_BASE_URL}${POSTER_SIZE}/${item.poster_path}`} />
                </div>)}
            </Slider>
            <div style={{ display:"flex",justifyContent: "space-between", position:"relative", top:"-282px", height:"282px", alignItems: "center"}}>
                <div className="button" onClick={this.previous}>
                    <IoIosArrowBack style={{ color: "white", height: "2em", width: "2em" }}/>
                </div>
                <div className="button" onClick={this.next} >
                    <IoIosArrowForward style={{ color: "white", height: "2em", width: "2em" }}/>
                </div>
            </div>
        </div>
    }
      
}

export default MovieSlider