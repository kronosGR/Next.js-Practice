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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}/>;
}

export default HomePage;