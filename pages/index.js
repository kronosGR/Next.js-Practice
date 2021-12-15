import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MJK_54041_Barocktr%C3%A4dg%C3%A5rden_%28Drottningholm%29.jpg/800px-MJK_54041_Barocktr%C3%A4dg%C3%A5rden_%28Drottningholm%29.jpg',
    address: 'Some address',
    description: 'This is the first meetup'
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MJK_54041_Barocktr%C3%A4dg%C3%A5rden_%28Drottningholm%29.jpg/800px-MJK_54041_Barocktr%C3%A4dg%C3%A5rden_%28Drottningholm%29.jpg',
    address: 'Some address',
    description: 'This is the first meetup'
  }
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups}/>;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1 //the seconds next.js wait for revalidation and the pregenerated
    // pages will be replaced with the new ones
  };
}

export default HomePage;