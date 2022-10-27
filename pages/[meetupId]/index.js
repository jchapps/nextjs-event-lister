import React from "react";
import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/2560px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg"
      title="Skatepark"
      address="Tokyo, Odaiba"
      description="Cool park"
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://jdchappelow:${process.env.DB_PASS}@cluster0.cz1vfb6.mongodb.net/?retryWrites=true&w=majority`
  ); //connect to my db
  const db = client.db();

  const locationsCollection = db.collection("locations");

  const locations = await locationsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: locations.map((location) => ({
      params: { meetupId: location._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/2560px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg",
        title: "Skatepark",
        address: "Tokyo, Odaiba",
        description: "Cool park",
      },
    },
  };
}

export default MeetupDetails;
