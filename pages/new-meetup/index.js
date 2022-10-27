import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'

function NewMeetupPage(props) {
  const router = useRouter()
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();

    console.log(data);
    router.push('/')
  }



  return (
    <div>
      <Head>
        <title>Add a new location</title>
        <meta name="description" content="Add your favourite skatepark" />
      </Head>
      <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupPage;
