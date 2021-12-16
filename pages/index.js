import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props) {
  return(<Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name="description" context='Browse a huge list of active Meetups'/>
    </Head>
    <MeetupList meetups={props.meetups}/>;

  </Fragment>
  );
}

// runs on the server
// if you need very often regeneration and res/req access
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// only for pages not simple components
// next.js waits until the data load to render the page
// you always needs to return a project as props
export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://kronos:katsa999@cluster0.hrnez.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1 //the seconds next.js wait for revalidation and the pregenerated
    // pages will be replaced with the new ones
  };
}

export default HomePage;