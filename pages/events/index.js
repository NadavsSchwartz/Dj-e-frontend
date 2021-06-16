import Layout from "@/components/Layout";
import EventItem from "../../components/EventItem";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from "@/config/index";

const EventsPage = ({ events, page, total }) => {
  return (
    <main className="min-h-screen-75">
      <Layout>
        <h1 className="py-20 mt-5 text-center font-bold underline uppercase text-4xl xl:text-5xl">
          Upcoming Events
        </h1>
        <div className="container  lg:w-4/5 mx-auto flex flex-col m-2 ">
          {events.length === 0 && <h3>No events to show</h3>}
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
        <Pagination total={total} page={page} />
      </Layout>
    </main>
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
