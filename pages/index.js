import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "../components/EventItem";

const HomePage = ({ events }) => {
  return (
    <div>
      <Layout>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>No events to show</h3>}
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  console.log(events);
  return {
    props: {
      events,
      revalidate: 1,
    },
  };
}

export default HomePage;
