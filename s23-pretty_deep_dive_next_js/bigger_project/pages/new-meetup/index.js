import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import { Fragment } from "react/cjs/react.production.min";
import Head from 'next/head';

const NewMeetupPage = () => {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
        const response = await fetch('/api/new-meetup', {
            method : "POST",
            body : JSON.stringify(enteredMeetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    return (
    <Fragment>
        <Head>
            <title> Add New a meetup </title>
            <meta 
                name="description"
                content="Add your own meetups and create amazing networkng opportunities."
            />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>);
     
};

export default NewMeetupPage;
