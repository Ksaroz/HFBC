import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Img, Heading } from '@chakra-ui/react';

import img1 from '../assets/4.jpg';
import img2 from '../assets/5.jpg';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      //autoPlay
      //infiniteLoop
      //interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Img src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          This is our first image
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Img src={img2} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          This is our second image
        </Heading>
      </Box>
    </Carousel>
  );
};

export default MyCarousel;
