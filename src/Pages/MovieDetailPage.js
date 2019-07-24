import React, { Component } from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import styled, { css } from "styled-components";

import APIClient from "../utils/APIClient";
import MoviePoster from "../Components/MovieList/MoviePoster";
import StarRatingComponent from "react-star-rating-component";
import { Container, Col, Row } from "react-grid-system";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  font-size: 1rem;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const MovieInfoSectionTitle = styled.h1`
  margin-bottom: 5px;
`;

const MovieInfoSectionRow = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  padding: 0px 5px;

  ${props =>
    props.outline &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [[{}]],
      movie: {
        adult: false,
        backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
        belongs_to_collection: null,
        budget: 260000000,
        genres: [
          { id: 12, name: "Adventure" },
          { id: 16, name: "Animation" },
          { id: 10751, name: "Family" },
          { id: 18, name: "Drama" },
          { id: 28, name: "Action" }
        ],
        homepage: "https://movies.disney.com/the-lion-king-2019",
        id: 420818,
        imdb_id: "tt6105098",
        original_language: "en",
        original_title: "The Lion King",
        overview:
          "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
        popularity: 523.663,
        poster_path: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
        production_companies: [
          {
            id: 2,
            logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
            name: "Walt Disney Pictures",
            origin_country: "US"
          },
          {
            id: 7297,
            logo_path: "/l29JYQVZbTcjZXoz4CUYFpKRmM3.png",
            name: "Fairview Entertainment",
            origin_country: ""
          }
        ],
        production_countries: [
          { iso_3166_1: "US", name: "United States of America" }
        ],
        release_date: "2019-07-12",
        revenue: 270520000,
        runtime: 118,
        spoken_languages: [{ iso_639_1: "en", name: "English" }],
        status: "Released",
        tagline: "The King has Returned.",
        title: "The Lion King",
        video: false,
        vote_average: 7.2,
        vote_count: 695
      }
    };
  }
  async componentDidMount() {
    // let { data } = await APIClient.get(`movie/${this.props.match.params.id}`);
    // console.log(data);
    // this.setState({ movie: data });
  }

  render() {
    const { movie } = this.state;
    return (
      <Container>
        <Row>
          <Col md={3}>
            <MoviePoster poster_path={movie.poster_path} fullWidth />
          </Col>
          <Col md={9}>
            <MovieInfoSectionRow>
              <MovieInfoSectionTitle>{movie.title}</MovieInfoSectionTitle>

              <div style={{ display: "flex", alignItems: "center" }}>
                <StarRatingComponent
                  name="rating"
                  editing={false}
                  startCount={5}
                  starColor="#ffb400"
                  emptyStarColor="#ffb400"
                  value={movie.vote_average / 2}
                  renderStarIcon={(index, value) => {
                    return (
                      <span>{index <= value ? <FaStar /> : <FaRegStar />}</span>
                    );
                  }}
                  renderStarIconHalf={() => {
                    return (  
                      <span>
                        <span>
                          <FaStarHalfAlt />
                        </span>
                      </span>
                    );
                  }}
                />
                <Label>{movie.vote_average}</Label>
                {movie.genres.slice(0, 2).map(genre => (
                  <Label>{genre["name"]}</Label>
                ))}
              </div>
            </MovieInfoSectionRow>
            <MovieInfoSectionRow>
              <div>{movie.overview}</div>
            </MovieInfoSectionRow>
            <Button primary>❤️Like</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
