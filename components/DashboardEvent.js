import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

const DashboardEvent = ({ event, handleDelete }) => {
  return (
    <div
      className="text-white grid  grid-cols-2"
      style={{
        backgroundImage: `url(${event.image.formats.thumbnail.url})`,
      }}
    >
      <h4 className="text-3xl ml-3">
        <Link href={`/events/${event.slug}`}>
          <a>Event Name: {event.name}</a>
        </Link>
      </h4>
      <div className="flex flex-row-reverse space-x-4 space-x-reverse text-2xl">
        <Link href={`/events/edit/${event.id}`}>
          <a>
            <FaPencilAlt /> <span>Edit Event</span>
          </a>
        </Link>

        <a href="#" onClick={() => handleDelete(event.id)}>
          <FaTimes /> <span>Delete</span>
        </a>
      </div>
    </div>
  );
};
export default DashboardEvent;
