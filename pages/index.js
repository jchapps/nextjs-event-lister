import React from 'react';
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb';

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
    revalidate: 10
  }
};

export default HomePage;
