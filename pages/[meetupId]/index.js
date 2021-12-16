import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

function MeetupDetails(props) {
  return (<Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" context={props.meetupData.description}/>
    </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title} description={props.meetupData.description}
      address={props.meetupData.address}
    />;
  </Fragment>);
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://kronos:katsa999@cluster0.hrnez.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false, // with true tries to regenerate dynamically on request | false
    // shows 404
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    'mongodb+srv://kronos:katsa999@cluster0.hrnez.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }

  };
}

export default MeetupDetails;