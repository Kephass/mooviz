import { Center, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Filter } from '../components/Filter';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [popular, setPopular] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState();

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=711a927a4d6efa393b4df113190f11fc&language=en-US&page=1'
    )
      .then(res => res.json())
      .then(movies => {
        setPopular(movies.results);
        setFilterMovies(movies.results);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <VStack my={15}>
        <Filter
          popular={popular}
          activeGenre={activeGenre}
          filterMovies={filterMovies}
          setFilterMovies={setFilterMovies}
          setActiveGenre={setActiveGenre}
        />
        <Center>
          <MovieList movies={filterMovies} />
        </Center>
      </VStack>
    </>
  );
};

export default Movies;
