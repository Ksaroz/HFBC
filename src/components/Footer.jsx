import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BiSend } from 'react-icons/bi';

const Footer = () => {
  return (
    <Box minH={'40'} bgColor={'blackAlpha.900'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <BiSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Haldibari Bible Church
          </Heading>
          <Text> @copyright 2022 All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} color={'whiteAlpha'}>
            <a target={'blank'} href="https://facebook/ourChurch">
              Facebook
            </a>
          </Button>
          <Button variant={'link'} color={'whiteAlpha'}>
            <a target={'blank'} href="https://instagram/ourChurch">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} color={'whiteAlpha'}>
            <a target={'blank'} href="https://twitter/ourChurch">
              Twitter
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
