import React from 'react';
import { Container, Heading, Stack, Img, Text } from '@chakra-ui/react';

import crossImg from '../assets/cross.png';

const Mission = () => {
  return (
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
      <Heading
        textTransform={'uppercase'}
        w={'fit-content'}
        py={'2'}
        borderBottom={'2px solid'}
        m={'auto'}
      >
        Our Mission
      </Heading>
      <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
      >
        <Img src={crossImg} h={['40', '400']} />
        <Text
          letterSpacing={'widest'}
          lineHeight={'190%'}
          noOfLines={[3, 4]}
          p={['2', '8']}
          textAlign={'center'}
          fontSize={'20'}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          exercitationem? Nostrum ipsam facilis recusandae, sapiente soluta
          optio pariatur omnis unde voluptatum voluptas asperiores esse eaque
          rerum tempore, corrupti amet earum minima temporibus ipsa laudantium
          maiores officiis aspernatur? Perferendis odio necessitatibus autem
          placeat provident deleniti ab, odit sint beatae, dolores ut quod, nam
          inventore ad sapiente vero expedita temporibus! Debitis corporis odio
          nihil qui amet ducimus, architecto beatae, iusto voluptates assumenda
          iure rem similique omnis, modi adipisci dolorem fugit. Voluptatum,
          nihil. Tempora praesentium quas dolore maiores ab nemo odio aspernatur
          ea, aliquam repellat, eum vitae molestiae laborum beatae sunt error
          facilis.
        </Text>
      </Stack>
    </Container>
  );
};

export default Mission;
