import { Button, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';

interface FilterProps {
popular: any;
activeGenre: any;
filterMovies: any;
setFilterMovies: any;
setActiveGenre: any;
}

const buttondetails = [
  {
    title: 'All',
    genre: 0,
  },
  {
    title: 'Action',
    genre: 28,
  },
  {
    title: 'Animation',
    genre: 16,
  },
  {
    title: 'Adeventure',
    genre: 12,
  },
  {
    title: 'Comedy',
    genre: 35,
  },
];

export function Filter({ popular, activeGenre, setActiveGenre, setFilterMovies }: FilterProps) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilterMovies(popular);
      return;
    }
    const filtered = popular.filter((movie: { genre_ids: { includes: (arg0: any) => any; }; }) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFilterMovies(filtered);
  }, [setFilterMovies, activeGenre]);

  return (
    <Stack direction={['column', 'row']} gap={4} marginTop="10">
      {buttondetails.map(({ title, genre }) => (
        <Button
          key={genre}
          colorScheme="teal"
          variant="outline"
          borderRadius={'3xl'}
          borderWidth="2px"
          onClick={() => setActiveGenre(genre)}
        >
          {title}
        </Button>
      ))}
    </Stack>
  );
}