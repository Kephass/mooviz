import { Box, Grid, GridItem } from '@chakra-ui/react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <>
      <Box my={12}>
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          {movies.results.map((movie, i) => (
            <GridItem key={i}>
              <MovieCard
                backdrop={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                title={movie.title}
                release={movie.release_date}
                description={movie.overview}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MovieList;
