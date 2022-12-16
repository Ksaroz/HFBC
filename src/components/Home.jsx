import React from 'react';
import { Box } from '@chakra-ui/react';
import MyCarousel from './MyCarousel';
import Mission from './Mission';

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Mission />
    </Box>
  );
};

export default Home;
