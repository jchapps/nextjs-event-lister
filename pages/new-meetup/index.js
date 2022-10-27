import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

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
      <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupPage;
