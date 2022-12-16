import { Container, Heading } from '@chakra-ui/react';
import EventCard from './EventCard';
import NewEvent from './NewEvent';

import React from 'react';
import axios from 'axios';

// import noImage from '../assets/no-image.png';
import { useEffect, useState } from 'react';

// const eventArray = [
//   {
//     id: 1,
//     title: 'first title',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sunt ullam excepturi iste obcaecati explicabo officiis fuga ducimus, architecto veniam distinctio necessitatibus, tempore cum vitae! Architecto distinctio vel quo ipsa veritatis laudantium, mollitia dolorum neque nam qui reprehenderit velit, nesciunt assumenda illo obcaecati quisquam odit voluptas, quaerat fugit deleniti eos?',
//     image: noImage,
//     date: new Date(),
//     status: 'Ongoing',
//   },
//   {
//     id: 2,
//     title: 'second title',
//     description: 'this is the second event description',
//     image: noImage,
//     date: new Date(),
//     status: 'Ongoing',
//   },
// ];

const Events = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get('http://localhost:4000/api/v1/events');

      setEvent(data.events);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Container maxW={'container.xl'} p={'10'}>
        <Heading textAlign={'center'} py={'10'}>
          Events
        </Heading>
        <NewEvent />
        {event.map(item => {
          return <EventCard item={item} key={item._id} />;
        })}
      </Container>
    </>
  );
};

export default Events;
