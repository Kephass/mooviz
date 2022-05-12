import React from 'react';
import MovieList from '../components/MovieList';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Center } from '@chakra-ui/react';

const Movies = () => {
  const { isLoading, error, data } = useQuery('movieData', () =>
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=711a927a4d6efa393b4df113190f11fc&language=en-US&page=1'
      )
      .then(res => res.data)
      .then(console.log(data))
      .catch(error => console.log(error))
  );

  if (isLoading) return 'Loading...';
  if (error) return `An error has occured ${error.message}`;
  return (
    <>
      <Center>
        <MovieList movies={data} />
      </Center>
    </>
  );
};

export default Movies;
