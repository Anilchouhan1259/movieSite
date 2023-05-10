import Card from "../card/Card";
import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieLists, setMovieLists] = useState([]);
  const { type } = useParams();
  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=dedf3e9c0be1fa2a03d9d868d1c379b2&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovieLists(data.results));
  };
  useEffect(() => {
    getMovie();
  }, [type]);
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieLists.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
