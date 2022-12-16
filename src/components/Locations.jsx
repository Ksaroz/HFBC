import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Locations = () => {
  return (
    <Container maxW={'container.xl'}>
      <VStack py={'8'}>
        <Heading fontSize={['2rem', '4rem']}>Our Location</Heading>
        <Text fontSize={['1rem', '2rem']} textAlign={'center'}>
          Jesus said to them, “I am the bread of life; whoever comes to me shall
          not hunger, and whoever believes in me shall never thirst. - John 6:35
        </Text>
        <Box py={'8'} w={'full'} display={'flex'} justifyContent={'center'}>
          <iframe
            title="HBC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14273.406478547362!2d88.00278418847576!3d26.573089796656383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5aff5c3362575%3A0xb58a43e80a5ed9f4!2sChurch!5e0!3m2!1sen!2snp!4v1667750899511!5m2!1sen!2snp"
            width={'1000'}
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <VStack>
          <Heading fontSize={['2rem', '4rem']}>Haldibari Bible Church</Heading>
          <Text fontSize={['1rem', '2rem']}>
            Haldibari Rural Municipality - 2
          </Text>
          <Text fontSize={['1rem', '2rem']}>Jhapa - 57200</Text>
          <Text fontSize={['1rem', '2rem']}>Nepal</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Locations;
