import React from 'react';
import { Box, Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <>
      <Box>
        <HStack justifyContent="space-between" px="10">
          <Flex gap="5">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </Box>
    </>
  );
};

export default Header;
