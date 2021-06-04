import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "../../components/EventItem";
const PER_PAGE = 5;

const EventsPage = ({ events, page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}

      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a href="" className="btn-secondary">
            Prev
          </a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a href="" className="btn-secondary">
            Next
          </a>
        </Link>
      )}
    </Layout>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const startPage = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  const res = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${startPage}`
  );
  const events = await res.json();

  return {
    props: {
      events,
      page: +page,
      total,
    },
  };
}

export default EventsPage;
