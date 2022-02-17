import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';


function MeetupDetails(props){
    return (
        <Fragment>          

            <MeetupDetail 
                title={props.meetupData.title}
                image={props.meetupData.image}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths()
{
    const client = await MongoClient.connect('mongodb://localhost:27017/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    

    client.close();


    return {
        fallback: false,
        
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
          })),
       
    }
}



export async  function getStaticProps(context){
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb://localhost:27017/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();

    return{
        props: {
            meetupData: {
                id : selectedMeetup._id.toString(),
                title : selectedMeetup.title,
                address :  selectedMeetup.address,
                image : selectedMeetup.image,
                description : selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;