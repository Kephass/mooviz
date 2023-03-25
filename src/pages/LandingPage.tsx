import { Box, Code, Grid, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

const LandingPage = () => {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              to="https://chakra-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default LandingPage;
