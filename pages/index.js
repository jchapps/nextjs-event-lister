import React from 'react';
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb';

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
      <MeetupList meetups={props.meetups}/>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const rest = context.res
//   return {
//     props: {
//       meetups: FAKE_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {

  const client = await MongoClient.connect(
    `mongodb+srv://jdchappelow:${process.env.DB_PASS}@cluster0.cz1vfb6.mongodb.net/?retryWrites=true&w=majority`
  ); //connect to my db
  const db = client.db();

  const locationsCollection = db.collection("locations"); //collection (= tables) and holds documents(=entries in tables)

  const locations = await locationsCollection.find().toArray();

  client.close()

  return {
    props: {
      meetups: locations.map(location => ({
        title: location.title,
        address: location.address,
        image: location.image,
        id: location._id.toString()
      }))
    },
    revalidate: 30
  }
};

export default HomePage;
