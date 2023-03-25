import { Box, Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Header = () => {
  return (
    <>
      <Box>
        <HStack justifyContent="space-between" px="10">
          <Flex gap="5">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/giftlist">GiftList</Link>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </Box>
    </>
  );
};

export default Header;
