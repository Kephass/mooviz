import {
  Box, Heading, Image, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface MovieCardProps {
backdrop: string;
title: string;
release: string;
description: string;
}

const MovieCard = ({ backdrop, title, release, description }: MovieCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.9 }}
    >
      <Box py={12} m="0 auto">
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.400')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${backdrop})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={backdrop}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
              noOfLines={1}
            >
              {title}
            </Text>
            <Heading fontSize="1rem" fontWeight={'500'} noOfLines={2}>
              {description}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text color={'gray.900'}>{release}</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
};

export default MovieCard;
