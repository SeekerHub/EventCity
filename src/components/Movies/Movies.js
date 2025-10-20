import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/api-helpers";
import MovieItem from "./MovieItem";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        let movi = [];
        let even = [];
        data.movies.forEach(obj => {
          if(obj["isEvent"] === false){
            movi.push(obj);
          }else{
            even.push(obj);
          }
        });
        setMovies(movi);
        setEvents(even);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movies-root">
      <div className="movies-section">
        <h2 className="movies-title">All Movies</h2>
      </div>
      <div className="movies-list">
        {loader ? (
          <div className="movies-loader"></div>
        ) : (
          movies &&
          movies.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))
        )}
      </div>
      <div className="movies-section">
        <h2 className="movies-title">All Events</h2>
      </div>
      <div className="movies-list">
        {loader ? (
          <div className="movies-loader"></div>
        ) : (
          events &&
          events.map((event, index) => (
            <MovieItem
              key={index}
              id={event._id}
              posterUrl={event.posterUrl}
              releaseDate={event.releaseDate}
              title={event.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;