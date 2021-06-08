import Link from "next/link";

const EventItem = ({ event }) => {
  return (
    <div className="flex flex-col md:flex-row  text-white rounded-lg shadow-xl border mt-5  mx-2 ">
      <div className="object-contain w-full " style={{ maxHeight: "380px" }}>
        <img
          className="inset-0 h-full w-full object-cover"
          src={
            event.image
              ? event.image.formats.medium.url
              : "/images/event-default.svg"
          }
          alt={event.name}
        />
      </div>
      <div className="w-full py-4 px-6 bg-blueGray-800 flex flex-col justify-between">
        <h3 className="font-bold underline text-lg truncate uppercase text-center">
          {event.name}
        </h3>
        <p className="mt-2">
          {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
        </p>
        <p>{event.description}</p>
        <p className="text-sm  uppercase tracking-wide font-semibold mt-2">
          <Link href={`/events/${event.slug}`}>
            <a className="text-xl">
              MORE Details<i className="fas fa-arrow-right"></i>
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EventItem;

//       src={
//         event.image
//           ? event.image.formats.thumbnail.url
//           : "/images/event-default.png"
//       }
//       width={170}
//       height={100}
//     />
//   </div>

//   <div className={styles.info}>
//     <span>
//       {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
//     </span>
//     <h3>{event.name}</h3>
//   </div>

//   <div className={styles.link}>
//     <Link href={`/events/${event.slug}`}>
//       <a className="btn">Details</a>
//     </Link>
//   </div>
// </div>
