import React from 'react';
import { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/2560px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg'
      title='Skatepark'
      address='Tokyo, Odaiba'
      description='Cool park'
    />
  );
}

export default MeetupDetails;
