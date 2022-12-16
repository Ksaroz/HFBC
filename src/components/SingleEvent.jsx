import {
  Container,
  Img,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import noImg from '../assets/no-image.png';
import { GoCalendar } from 'react-icons/go';
import {
  BiDollar,
  BiLocationPlus,
  BiPhoneCall,
  BiTimeFive,
} from 'react-icons/bi';
const SingleEvent = () => {
  return (
    <Container maxW={'container.xl'} bgColor={'blue.400'}>
      <Stack
        direction={['column', 'row']}
        p={'10'}
        justifyContent={'space-between'}
      >
        <Img
          maxW={'900'}
          rounded={'20'}
          boxShadow={'base'}
          src={noImg}
          alt={'noImage.png'}
        />

        <Stack p={'4'}>
          <HStack p={'4'}>
            <GoCalendar fontSize={'50'} />
            <Stack>
              <Heading>Date</Heading>
              <Text fontSize={'20'}>Nov-1-2022</Text>
            </Stack>
          </HStack>
          <HStack p={'4'}>
            <BiTimeFive fontSize={'50'} />
            <Stack>
              <Heading>Time</Heading>
              <Text fontSize={'20'}>Tue 21:00 PM</Text>
            </Stack>
          </HStack>
          <HStack p={'4'}>
            <BiLocationPlus fontSize={'50'} />
            <Stack>
              <Heading>Location</Heading>
              <Text fontSize={'20'}>Haldibari Ward 6</Text>
            </Stack>
          </HStack>
          <HStack p={'4'}>
            <BiPhoneCall fontSize={'50'} />
            <Stack>
              <Heading>Contact</Heading>
              <Text fontSize={'20'}>Haldibari Bible Church</Text>
            </Stack>
          </HStack>
          <HStack p={'4'}>
            <BiDollar fontSize={'50'} />
            <Stack>
              <Heading>Fee</Heading>
              <Text fontSize={'20'}>Free</Text>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
      <VStack>
        <Heading py={'10'}>First Event On November</Heading>
        <Text fontSize={'22'} textAlign={'justify'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non
          quos similique labore ullam excepturi, ea nostrum repudiandae quam
          quibusdam, quis doloribus atque fugiat nulla doloremque repellendus,
          dicta culpa facilis at est nobis quia ipsum odio libero! Eaque optio,
          perferendis dolor molestias doloribus non odio, expedita perspiciatis
          atque aut quaerat, praesentium magni? Laborum
        </Text>
      </VStack>
    </Container>
  );
};

export default SingleEvent;
