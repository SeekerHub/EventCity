import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../helpers/api-helpers";
import CardLayout from "../HomePage/CardLayout";

const AllMovies = () => {
  const [movies, setMovies] = useState();
  const [events, setEvents] = useState([]);
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
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin="auto" marginTop={4}>
      <Typography variant="h4" padding={2} textAlign="center">
        All Movie
      </Typography>
      <Box
        margin="auto"
        width="100%"
        display={"flex"}
        justifyContent="center"
        flexWrap={"wrap"}
        gap={4}
      >
        {movies &&
          movies.map((movie, index) => (
            <CardLayout
              id={movie._id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              posterUrl={movie.posterUrl}
              description={movie.description}
              key={index}
            />
          ))}
      </Box>
      <Typography variant="h4" padding={2} textAlign="center">
        All Events
      </Typography>
      <Box
        margin="auto"
        width="100%"
        display={"flex"}
        justifyContent="center"
        flexWrap={"wrap"}
        gap={4}
      >
        {events &&
          events.map((movie, index) => (
            <CardLayout
              id={movie._id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              posterUrl={movie.posterUrl}
              description={movie.description}
              key={index}
            />
          ))}
      </Box>
    </Box>
  );
};

export default AllMovies;
