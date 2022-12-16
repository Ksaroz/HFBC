import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ThanksImg from '../assets/thanks-lord.jpg';
import { useState } from 'react';

const Contact = () => {
  const [input, setInput] = useState('');
  const [state, handleSubmit] = useForm('mwkzgqwl');
  if (state.succeeded) {
    return (
      <Container maxW={'container.xl'} minH={'50vh'}>
        <VStack p={'16'}>
          <Heading>Thanks for your message!</Heading>
          <Text textAlign={'center'} fontSize={['1.5rem', '2rem']} py={'4'}>
            "I will give thanks to you, Lord, with all my heart; I will tell of
            all your wonderful deeds." -PSALM 9:1
          </Text>
          <Image
            w={'40rem'}
            objectFit={'contain'}
            p={'8'}
            src={ThanksImg}
            alt="Thank You JESUs"
          />
        </VStack>
      </Container>
    );
  }

  const handleInputChange = e => setInput(e.target.value);

  return (
    <Container maxW={'container.xl'} minH={'100vh'} p={['4', '16']}>
      <VStack justifyContent={'center'}>
        <Box textAlign={'center'}>
          <Heading fontSize={['2rem', '4rem']} py={'4'}>
            Contact Us...
          </Heading>
          <Text fontSize={['1.5rem', '2rem']} py={'4'}>
            "A person's steps are made secure by the Lord when they delight in
            his way. Though they trip up, they won’t be thrown down, because the
            Lord holds their hand."
          </Text>
        </Box>
        <Box w={'md'} boxShadow={'xl'} p={'16'}>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel fontSize={'24'}>Full Name</FormLabel>
              <Input
                variant={'flushed'}
                type={'text'}
                name={'user-name'}
                value={input}
                onChange={handleInputChange}
              />
              <FormHelperText>Enter your full name.</FormHelperText>
              {/* <FormLabel>Phone Number</FormLabel>
              <Input variant={'flushed'} type={'number'} name={'phoneNumber'} />
              <FormHelperText>Enter phone no:.</FormHelperText> */}
              <FormLabel>Email Address</FormLabel>
              <Input
                variant={'flushed'}
                id={'email'}
                type={'email'}
                name={'email'}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <FormHelperText>Please enter your email</FormHelperText>
              <FormLabel>Your Message.</FormLabel>
              <Textarea
                id={'message'}
                minH={'100px'}
                name={'message'}
              ></Textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                w={'full'}
                p={'4'}
                my={'8'}
                colorScheme={'purple'}
                type={'submit'}
                disabled={state.submitting}
              >
                Send
              </Button>
            </FormControl>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
