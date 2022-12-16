import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Haldibari Bible Church</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/join'}>Join</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/events'}>Events</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/locations'}>Locations</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/about'}>About</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/contact'}>Contact</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/give'}>Give</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/register'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HStack
        w={'full'}
        pos={'sticky'}
        p={'4'}
        px={'20'}
        justifyContent={['center', 'space-between']}
        alignItems={'center'}
        backgroundColor={'none'}
        //zIndex={'overlay'}
      >
        <HStack>
          <Heading fontSize={'22'}>
            <Link to={'/'}>HBC</Link>
          </Heading>
        </HStack>
        <HStack direction={['column', 'row']} display={['none', 'flex']}>
          <Button variant={'ghost'}>
            <Link to={'/join'}>Join</Link>
          </Button>
          <Button variant={'ghost'}>
            <Link to={'/events'}>Events</Link>
          </Button>
          <Button variant={'ghost'}>
            <Link to={'/locations'}>Locations</Link>
          </Button>
          <Button variant={'ghost'}>
            <Link to={'/about'}>About</Link>
          </Button>
          <Button variant={'ghost'}>
            <Link to={'/contact'}>Contact</Link>
          </Button>
          <Button variant={'ghost'}>
            <Link to={'/give'}>Give</Link>
          </Button>
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
