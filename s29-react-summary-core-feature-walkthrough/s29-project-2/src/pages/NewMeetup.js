import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

  function addMeetupHandler(meetupData){
    
  }


  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupPage