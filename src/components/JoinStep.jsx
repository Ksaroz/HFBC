import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import noImg from '../assets/no-image.png';

const JoinStep = ({ item }) => {
  return (
    <Container maxW={'container.xl'} minH={'50vh'}>
      <VStack py={'8'} justifyContent={'center'}>
        <Heading>{item.title}</Heading>
        <HStack
          py={('8', '16')}
          flexWrap={['wrap', 'nowrap']}
          justifyContent={'space-evenly'}
        >
          <Box
            p={'4'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            w={['100%', '50%']}
          >
            <Image
              boxShadow={'xl'}
              borderRadius={'20'}
              objectFit={'cover'}
              src={noImg}
              alt={'image'}
            />
          </Box>
          <Box p={'4'} w={['100%', '50%']}>
            <Text textAlign={'justify'} fontSize={['1.2rem', '1.5rem']}>
              {item.description}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default JoinStep;
