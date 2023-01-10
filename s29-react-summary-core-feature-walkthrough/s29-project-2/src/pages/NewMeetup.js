import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

  const navigate = useNavigate();

  function addMeetupHandler(meetupData){
    fetch(
      'https://react-getting-started-52357-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',          
        }
      }).then(() => {
        navigate('/welcome', { replace : true})
      });
  }


  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupPage