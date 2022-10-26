import React from 'react';
import MeetupList from '../components/meetups/MeetupList'

const FAKE_MEETUPS = [
  {
  id: 'm1',
  title: 'Fun time',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/2560px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg',
  address: 'Leeds',
  description: 'A fun first meet up'
  },
    {
  id: 'm2',
  title: 'Second meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/2560px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg',
  address: 'Trafalgar square',
  description: 'A fun first meet up'
  },
  {
  id: 'm3',
  title: 'Third',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/2560px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg',
  address: 'Saudi Arabia',
  description: 'A fun first meet up'
  },
  {
  id: 'm4',
  title: 'Fourth',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/2560px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg',
  address: 'Liverpool',
  description: 'A fun first meet up'
  }
]

function HomePage(props) {
  return (
    <div>
      <MeetupList meetups={FAKE_MEETUPS}/>
    </div>
  );
}

export default HomePage;
