import React from "react";
import APIClient from "../utils/APIClient";
import MovieSlider from "../Components/MovieList/MovieSlider";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef()
    var obj = {
      adult: false,
      backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      genre_ids: [12, 16, 10751, 18, 28],
      id: 420818,
      original_language: "en",
      original_title: "The Lion King",
      overview:
        "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      popularity: 581.731,
      poster_path: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
      release_date: "2019-07-12",
      title: "The Lion King",
      video: false,
      vote_average: 7.1,
      vote_count: 593
    };
    this.state = {
      movies: [obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj],
    };
  }

  async componentDidMount() {
    // let { data: { results } } = await APIClient.get('movie/now_playing')
    // this.setState({ movies: results })
    // let res = await APIClient('configuration')
    // console.log(res)
  }

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        {movies ? (
          <React.Fragment>
            <MovieSlider data={movies} title={"Now Playing"}/>
            <MovieSlider data={movies} title={"Now Playing"}/>
            <MovieSlider data={movies} title={"Now Playing"} />
          </React.Fragment>
        ) : (
          <div>not loaded yet</div>
        )}
      </React.Fragment>
    );
  }
}

export default MovieList;
