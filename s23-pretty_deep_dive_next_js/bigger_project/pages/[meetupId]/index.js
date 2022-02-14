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

export default MeetupDetails;