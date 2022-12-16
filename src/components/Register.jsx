import {
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Register = () => {
  return (
    <Container
      maxW={'container.sm'}
      minH={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <VStack
        shadow={'xl'}
        w={'full'}
        alignItems={'flex-start'}
        bgColor={'gray.300'}
        p={'8'}
        m={'4'}
      >
        <Heading>Sign Up</Heading>
        <FormLabel fontSize={'22'} color={'black'}>
          Username
        </FormLabel>
        <Input
          type={'text'}
          placeholder={'Enter username'}
          variant={'flushed'}
        />
        <FormLabel fontSize={'22'} color={'black'}>
          Email
        </FormLabel>
        <Input
          type={'email'}
          placeholder={'Enter an email'}
          variant={'flushed'}
        />
        <FormLabel fontSize={'22'} color={'black'}>
          Password
        </FormLabel>
        <Input
          type={'password'}
          placeholder={'Enter your password'}
          variant={'flushed'}
        />
        <Button variant={'link'} p={'4'} alignSelf={'center'}>
          Already have an account!
        </Button>
        <Button type={'submit'} p={'8'} alignSelf={'center'} m={'20'}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default Register;
