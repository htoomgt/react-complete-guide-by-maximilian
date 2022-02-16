import {Fragment} from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props){
    return (
        <Fragment>          

            <MeetupDetail 
                title='A first meetup'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
                address='Some street 5, Some City'
                description='The meetup description'
            />
        </Fragment>
    );
}

export async function getStaticPaths()
{
    return {
        fallback: false,
        paths: [
            {
              params: {
                meetupId: 'm1',
              },
            },
            {
              params: {
                meetupId: 'm2',
              },
            },
          ],
    }
}



export async  function getStaticProps(context){
    // fetch  data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId);


    return{
        props: {
            meetup: {
                image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id :     meetupId,
                title : 'First Meetup',
                address : 'Some Street 5, Some City',
                description : 'This is a first meetup'
            }
        }
    }
}

export default MeetupDetails;