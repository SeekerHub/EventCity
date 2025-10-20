import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";
import "./HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchAllMovies = () => {
    getAllMovies()
      .then((data) => {
        let movi = [];
        let even = [];
        data.movies.forEach(obj => {
          if (obj["isEvent"] === false) {
            movi.push(obj);
          } else {
            even.push(obj);
          }
        });
        setMovies(movi);
        setEvents(even);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <div className="homepage-root">
      <div className="homepage-banner">
        <img
          src="https://w0.peakpx.com/wallpaper/33/751/HD-wallpaper-the-batman-movie-poster-the-batman-batman-superheroes-movies-2022-movies.jpg"
          alt="Brahmastra"
          className="homepage-banner-img"
        />
      </div>
      <div className="homepage-section">
        <h2 className="homepage-title">Latest Releases</h2>
      </div>
      <div className="homepage-list">
        {loader ? (
          <div className="homepage-loader"></div>
        ) : (
          movies &&
          movies.slice(0, 4).map((movie, index) => (
            <MovieItem
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))
        )}
      </div>
      <div className="homepage-section">
        <h2 className="homepage-title">Events in your City</h2>
      </div>
      <div className="homepage-list">
        {loader ? (
          <div className="homepage-loader"></div>
        ) : (
          events &&
          events.slice(0, 4).map((movie, index) => (
            <MovieItem
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))
        )}
      </div>
      <div className="homepage-btn-row">
        <Link to="/movies" className="homepage-btn">
          View All Movies
        </Link>
      </div>
    </div>
  );
};

export default HomePage;