import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';

import axios from 'axios';

const initialData = {
  title: '',
  description: '',
  location: '',
};

const NewEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState(initialData);

  const onChangeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    //console.log(event.title);
    const { data } = await axios.post(
      'http://localhost:4000/api/v1/event/new',
      formData
    );
    console.log(data);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>New Event</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={['sm', 'lg']} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type={'text'} onChange={onChangeHandler} name={'title'} />
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Enter an event description"
                size={'lg'}
                onChange={onChangeHandler}
                name={'description'}
              ></Textarea>
              <FormLabel>Image</FormLabel>
              <Input type={'file'} />
              <FormLabel>Date</FormLabel>
              <Input type={'date'} onChange={onChangeHandler} name={'date'} />
              <FormLabel>Location</FormLabel>
              <Input
                type={'text'}
                onChange={onChangeHandler}
                name={'location'}
              />
              <FormLabel>Status</FormLabel>
              <Select onChange={onChangeHandler} name={'status'}>
                <option>Upcoming</option>
                <option>OnGoing</option>
                <option>OnClose</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="ghost"
              type={'submit'}
              onClick={e => onSubmitHandler(e)}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewEvent;
