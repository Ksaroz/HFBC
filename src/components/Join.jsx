import { Box, Heading, Image, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import JoinStep from './JoinStep';
import axios from 'axios';
//import server from '';

import christFaith from '../assets/cross-christ-faith-god.jpg';

const Join = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchJoinSteps = async () => {
      const { data } = await axios.get('http://localhost:4000/api/v1/steps');
      console.log(data.steps);
      setItems(data.steps);
    };
    fetchJoinSteps();
  }, []);

  return (
    <>
      <VStack justifyContent={'center'} bgColor={'gray.100'}>
        <Box
          w={'full'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={christFaith}
            w={'full'}
            h={['200', '450']}
            objectFit={'cover'}
          />

          <Heading pos={'absolute'} color={'darkblue'}>
            Next Steps
          </Heading>
          <Text pos={'absolute'} pt={'16'} fontSize="2xl" color={'darkblue'}>
            Place your faith in jesus
          </Text>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          py={'16'}
          textAlign={'center'}
        >
          <Heading fontSize={'6xl'} textTransform={'uppercase'}>
            Join us in worship
          </Heading>
          <Text fontSize={'2xl'} py={'8'} px={'16'}>
            Come be part of any of our weekend services and learn more about
            God, how to grow deeper in your faith, and get connected with other
            believers through Bible study.
          </Text>
          <Button colorScheme={'purple'} my={'8'}>
            Watch Video
          </Button>
        </Box>
      </VStack>
      {items.map(item => {
        return <JoinStep item={item} key={item._id} />;
      })}
    </>
  );
};

export default Join;
