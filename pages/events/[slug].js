import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

import { FaPencilAlt, FaTimes } from "react-icons/fa";
const EventPage = ({ event }) => {
  console.log(event);
  const router = useRouter();
  return (
    <Layout>
      <Link href="/events">
        <a className={styles.back}>{"<"} Go Back</a>
      </Link>
      <div className={styles.event}>
        <span>
          {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
        </span>
        <h1>{event.name}</h1>
        <ToastContainer />
        {event.image && (
          <div className={styles.image}>
            <Image
              src={
                event.image.formats.medium
                  ? event.image.formats.medium.url
                  : event.image.formats.small.url
              }
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{event.performers}</p>
        <h3>Description:</h3>
        <p>{event.description}</p>
        <h3>Venue: {event.venue}</h3>
        <p>{event.address}</p>

        <Link href={`/events/edit/${event.id}`}>
          <a className={styles.back}>{"<"} edit</a>
        </Link>
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();
  return {
    props: {
      event: events[0],
    },
  };
}
export default EventPage;
