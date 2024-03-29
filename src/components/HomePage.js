import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies, getAllEvents } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";

import CircularProgress from '@mui/material/CircularProgress'
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(true)

 
  const fetchAllMovies = () => {
    getAllMovies()
    .then((data) => {
      let movi = [];
      let even = [];
      data.movies.forEach(obj => {
        if(obj["isEvent"]==false){
          movi.push(obj);
        }else{
          even.push(obj);
        }
      })
      setMovies(movi);
      setLoader(false)
      setEvents(even);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchAllMovies();
    // fetchAllEvents();
  }, []);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
        <img
          src="https://w0.peakpx.com/wallpaper/33/751/HD-wallpaper-the-batman-movie-poster-the-batman-batman-superheroes-movies-2022-movies.jpg"
          alt="Brahmastra"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        alignItems="center"
        flexWrap="wrap"
      >
        {loader?  <CircularProgress disableShrink />:movies &&
          movies
            .slice(0, 4)
            .map((movie, index) => (
              <MovieItem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Events in your City
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        alignItems="center"
        flexWrap="wrap"
      >
        {loader?  <CircularProgress disableShrink />:events &&
          events
            .slice(0, 4)
            .map((movie, index) => (
              <MovieItem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
