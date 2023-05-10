import "./home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovieList from "../../components/movieList/MovieList";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=dedf3e9c0be1fa2a03d9d868d1c379b2&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  const movieList = popularMovies.map((movie) => {
    return (
      <Link
        style={{ textDecoration: "none", color: "white" }}
        key={movie.id}
        to={`/movie/${movie.id}`}
      >
        <div className="posterImage">
          <img
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.backdrop_path
            }`}
          />
        </div>
        <div className="posterImage__overlay">
          <div className="posterImage__title">
            {movie ? movie.original_title : ""}
          </div>
          <div className="posterImage__runtime">
            {movie ? movie.release_date : ""}
            <span className="posterImage__rating">
              {movie ? movie.vote_average : ""}
              <i className="fas fa-star" />
            </span>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {movieList}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
