import {
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

//import noImg from '../assets/no-image.png';
import church from '../assets/church1.jpg';
import prey from '../assets/prey.jpg';
import prey2 from '../assets/prey2.jpg';
import prey3 from '../assets/prey3.jpg';
//import jesus4 from '../assets/jesus4.jpg';

const About = () => {
  return (
    <Container maxW={'container.xl'} min={'100vh'}>
      <VStack p="4">
        <Heading
          mt={'5rem'}
          fontSize="6xl"
          textAlign={'center'}
          textTransform={'uppercase'}
        >
          Who we are
        </Heading>
        <Text fontSize={['2xl', '4xl']} p="8" textAlign={'center'}>
          Find out more about Haldibari Bible Church. Learn more about what we
          believe, how we got here, what our mission is, and how we serve the
          World.
        </Text>
        <Stack
          justifyContent={'flex-start'}
          wrap="wrap"
          direction={['column', 'row']}
        >
          <Link to={'/events'}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src={church}
                p={['4', '8']}
                boxSize={['300px', '600px']}
                objectFit="cover"
                alt="sample image"
                opacity={'1'}
                transition={'transform'}
              />
              <Heading pos={'absolute'} color={'white'}>
                Our Mission
              </Heading>
              <Text pos={'absolute'} pt={'16'} color={'white'} fontSize="2xl">
                Our passion and goal at a church
              </Text>
            </Box>
          </Link>
          <Link to={'/events'}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src={prey}
                p={['4', '8']}
                boxSize={['300px', '600px']}
                objectFit="cover"
                alt="sample image"
              />
              <Heading pos={'absolute'} color={'white'}>
                Our Ministries
              </Heading>
              <Text pos={'absolute'} pt={'16'} fontSize="2xl" color={'white'}>
                Kids, Students and Adults
              </Text>
            </Box>
          </Link>
          <Link to={'/events'}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src={prey3}
                p={['4', '8']}
                boxSize={['300px', '600px']}
                objectFit="cover"
                alt="sample image"
              />
              <Heading pos={'absolute'} color={'white'}>
                Our History
              </Heading>
              <Text pos={'absolute'} color={'white'} pt={'16'} fontSize="2xl">
                Learn more about our History
              </Text>
            </Box>
          </Link>
          <Link to={'/events'}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src={prey2}
                p={['4', '8']}
                boxSize={['300px', '600px']}
                objectFit="cover"
                alt="sample image"
              />
              <Heading pos={'absolute'} color={'white'}>
                Our Beliefs
              </Heading>
              <Text pos={'absolute'} pt={'16'} color={'white'} fontSize="2xl">
                Our Spiritual Foundation
              </Text>
            </Box>
          </Link>
        </Stack>
      </VStack>
    </Container>
  );
};

export default About;
