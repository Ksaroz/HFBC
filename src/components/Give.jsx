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

const Give = () => {
  return (
    <Container maxW={'container.xl'}>
      <VStack py={'4rem'}>
        <Heading fontSize={['2rem', '4rem']}>Give</Heading>
        <Text textAlign={'center'} fontSize={['1.5rem', '2rem']}>
          "Each of you should give what you have decided in your heart to give,
          not reluctantly or under cumpulsion, for God loves a cheerful giver. -
          2 Corinthians 9:7"
        </Text>
        <Box
          py={'16'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Heading py={'8'}>Fonepay QR Scan</Heading>
          <Image
            w={'md'}
            h={'lg'}
            objectFit={'cover'}
            src={noImg}
            alt={'Fonepay QR'}
          />
        </Box>
        <Heading>Other Wallet Source</Heading>
        <HStack>
          <Box p={['none', '4']}>
            <Image
              border={'none'}
              boxShadow={'xl'}
              borderRadius={'15px'}
              src={noImg}
              alt={'Esewa Logo'}
            />
          </Box>
          <Box p={['none', '4']}>
            <Image
              border={'none'}
              boxShadow={'xl'}
              borderRadius={'15px'}
              src={noImg}
              alt={'IME Logo'}
            />
          </Box>
          <Box p={['none', '4']}>
            <Image
              border={'none'}
              boxShadow={'xl'}
              borderRadius={'15px'}
              src={noImg}
              alt={'Khalti Logo'}
            />
          </Box>
          <Box p={['none', '4']}>
            <Image
              border={'none'}
              boxShadow={'xl'}
              borderRadius={'15px'}
              src={noImg}
              alt={'IPS Connect Logo'}
            />
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Give;
