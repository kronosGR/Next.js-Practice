import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return <MeetupDetail
    image=""
    title="" description="" address=""
  />;
}

export async function getStaticPaths() {
  return {
    fallback: false, // with true tries to regenerate dynamically on request | false
    // shows 404
    paths: [ {
      params: {
        meetupId: 'm1'
      }
    } ]
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MJK_54041_Barocktr%C3%A4dg%C3%A5rden_%28Drottningholm%29.jpg/800px-MJK_54041_Barocktr%C3%A4dg%C3%A5rden_%28Drottningholm%29.jpg',
        id: 'm1',
        title: 'First Meetup',
        address: 'First meetup description',
        description: 'some street'
      }
    }

  };
}

export default MeetupDetails;