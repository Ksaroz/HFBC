import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';
import noImage from '../assets/no-image.png';

import { GrLocation, GrStatusGood } from 'react-icons/gr';

const EventCard = ({ item }) => {
  const title = item.title;
  const trimTitle = title.substr(0, 30);
  const description = item.description;
  const stringTrim32 = description.substr(0, 145);
  // const day = item.date.getDay();
  // const month = item.date.getMonth();

  return (
    <VStack>
      <Stack
        w={'full'}
        minH={['auto', '300']}
        boxShadow={'md'}
        rounded={'md'}
        p={['2', '8']}
        m={['1', '5']}
        direction={['row', 'row']}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Img
          display={['none', 'flex']}
          boxSize={['none', '250']}
          src={noImage}
        />
        <Stack justifyContent={'flex-start'} w={'full'}>
          <Heading fontSize={['20', '30']}>{trimTitle}</Heading>
          <Text fontSize={'22'} display={['none', 'flex']}>
            {stringTrim32}...
          </Text>
          <HStack justifyContent={'space-between'}>
            <Stack>
              <HStack>
                <GrStatusGood fontSize={'25'} />
                <Text>{item.status}</Text>
              </HStack>
              <HStack>
                <GrLocation fontSize={'25'} />
                <Text>{item.location}</Text>
              </HStack>
            </Stack>
            <Stack>
              <DeleteIcon fontSize="25px" color={'tomato'} cursor={'pointer'} />
              <EditIcon
                fontSize="25px"
                color={'green.200'}
                cursor={'pointer'}
              />
            </Stack>
          </HStack>
        </Stack>
        <Box
          bgColor={'tomato'}
          minW={['100', '250']}
          p={'4'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <VStack textAlign={'center'}>
            <Text fontSize={['sm', '4xl']}>{moment().format('DD')}</Text>
            <Text fontSize={['md', '5xl']}>{moment().format('MMM')}</Text>
            <Text fontSize={['sm', '4xl']}>{moment().format('YYYY')}</Text>
          </VStack>
        </Box>
      </Stack>
    </VStack>
  );
};

export default EventCard;
