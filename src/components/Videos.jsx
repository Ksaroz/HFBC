import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const videoArr = ['https://youtu.be/gM8UvHP2VGM'];

const Videos = () => {
  const [videoSrc, setVideoSrc] = useState(videoArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          style={{ width: '100%' }}
          src={videoSrc}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum
            cupiditate delectus minus. Error aperiam quibusdam cum aspernatur
            ducimus, doloribus modi iste enim quod ab sint deleniti blanditiis
            optio. Cum accusamus, cupiditate quibusdam deleniti delectus
            architecto cumque facere similique, veritatis aut officiis quisquam
            dolores! Quia et dolor libero dolorum nostrum eum qui sint non vel?
            Dolores, doloribus debitis! Aspernatur asperiores quo blanditiis,
            beatae nam harum iusto quaerat quasi sint. Ipsam ipsa explicabo,
            suscipit quidem beatae consequuntur porro repellendus ex quibusdam
            temporibus soluta dolorum magnam distinctio odit cum incidunt unde
            corrupti sequi sit, laudantium voluptate quaerat. Adipisci in odit
            dicta impedit!
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflow={'auto'}
      >
        <Button variant={'ghost'} colorScheme={'purple'} onClick={setVideoSrc}>
          Lecture 1
        </Button>
      </VStack>
    </Stack>
  );
};

export default Videos;
