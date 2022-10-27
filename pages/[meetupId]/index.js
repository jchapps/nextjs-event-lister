import React, { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://jdchappelow:${process.env.DB_PASS}@cluster0.cz1vfb6.mongodb.net/?retryWrites=true&w=majority`
  ); //connect to my db
  const db = client.db();

  const locationsCollection = db.collection("locations");

  const locations = await locationsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: locations.map((location) => ({
      params: { meetupId: location._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const locationId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://jdchappelow:${process.env.DB_PASS}@cluster0.cz1vfb6.mongodb.net/?retryWrites=true&w=majority`
  ); //connect to my db
  const db = client.db();

  const locationsCollection = db.collection("locations");

  const selectedLocation = await locationsCollection.findOne({
    _id: ObjectId(locationId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedLocation._id.toString(),
        title: selectedLocation.title,
        address: selectedLocation.address,
        image: selectedLocation.image,
        description: selectedLocation.description,
      },
    },
  };
}

export default MeetupDetails;
