import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

const SearchPage = ({ events }) => {
  const router = useRouter();

  return (
    <main>
      <Layout title="Search Results">
        <div className="py-20 min-h-screen-75">
          <div className="text-xl m-4 p-5">
            <Link href="/events">
              <a
                href="/events"
                className="bg-blueGray-800 rounded-lg p-3 text-white"
              >
                Go Back
              </a>
            </Link>
          </div>
          <h1 className="text-center text-xl uppercase">
            Search Results for {router.query.term}
          </h1>
          {events.length === 0 && (
            <h3 className="text-center text-xl uppercase mt-5 ">
              No events to show, try again please
            </h3>
          )}
          <div className="container mx-auto px-4">
            {events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </div>
        </div>
      </Layout>
    </main>
  );
};

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
export default SearchPage;
