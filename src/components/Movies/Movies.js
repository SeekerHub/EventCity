import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/api-helpers";
import MovieItem from "./MovieItem";
import CircularProgress from '@mui/material/CircularProgress';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
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
        setEvents(even);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h5"
        padding={2}
        width="40%"
        bgcolor={"#900C3F"}
        color="white"
        align="center"
        textAlign={"center"}
      >
        All Movies
      </Typography>
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="center"
        flexWrap={"wrap"}
      >
        {loader?  <CircularProgress disableShrink />:movies &&
          movies.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))}
      </Box>

      <Typography
        margin={"auto"}
        variant="h5"
        padding={2}
        width="40%"
        bgcolor={"#900C3F"}
        color="white"
        textAlign={"center"}
      >
        All Events
      </Typography>
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="center"
        flexWrap={"wrap"}
      >
        {loader?  <CircularProgress disableShrink />:events &&
          events.map((event, index) => (
            <MovieItem
              key={index}
              id={event._id}
              posterUrl={event.posterUrl}
              releaseDate={event.releaseDate}
              title={event.title}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movies;
