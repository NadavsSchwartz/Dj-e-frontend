import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";
import EventItem from "../components/EventItem";

const HomePage = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
};
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  console.log(res);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}

export default HomePage;
