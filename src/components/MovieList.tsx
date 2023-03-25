import { Box, Grid, GridItem } from '@chakra-ui/react';
import MovieCard from './MovieCard';

interface MovieListProps {
movies: any[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <>
      <Box my={2}>
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          {movies.map((movie: { backdrop_path: any; title: any; release_date: any; overview: any; }, i) => (
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
}

export default MovieList;
