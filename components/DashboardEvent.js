import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import {
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { NEXT_URL } from "../config";

const DashboardEvent = ({ event, handleDelete }) => {
  const shareUrl = `${NEXT_URL}/events/${event.id}`;
  const title = event.name;
  return (
    <div className=" sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-8 md:py-12 rounded-lg border">
      <div className="w-full flex items-center justify-center">
        <div className="text-center items-center">
          {event.image.formats ? (
            <img
              alt={event.name}
              src={
                event.image.formats.medium
                  ? event.image.formats.medium.url
                  : event.image.formats.thumbnail.url
              }
              style={{
                minHeight: "200px",
                maxHeight: "235px",
                minWidth: "200px",
                maxWidth: "235px",
              }}
              className="rounded-lg"
            />
          ) : (
            <img
              alt={event.name}
              src={"/images/event-default.svg"}
              style={{
                minHeight: "200px",
                maxHeight: "235px",
                minWidth: "200px",
                maxWidth: "235px",
              }}
              className="rounded-lg"
            />
          )}

          <Link href={`/events/${event.slug}`}>
            <a className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-blueGray-800">
              Event Name: {event.name}
            </a>
          </Link>
        </div>
      </div>
      <div className="grid gap-x-2 gap-y-1 grid-cols-2 mt-3 ">
        <Link href={`/events/edit/${event.id}`}>
          <a className="">
            <FaPencilAlt className="ml-2" /> <span>Edit </span>
          </a>
        </Link>

        <a className="" href="#" onClick={() => handleDelete(event.id)}>
          <FaTimes className="ml-3" /> <span>Delete</span>
        </a>
      </div>
      <div className="flex flex-wrap">
        <FacebookShareButton
          url={shareUrl}
          title={title}
          title={title}
          className="ml-1"
        >
          <FacebookIcon round size={35} />
        </FacebookShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body={event.description}
        >
          <EmailIcon round size={35} className="ml-1" />
        </EmailShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          summary={event.description}
        >
          <LinkedinIcon round size={35} className="ml-1" />
        </LinkedinShareButton>
        <PinterestShareButton
          url={shareUrl}
          title={title}
          media={
            event.image
              ? event.image.formats.thumbnail.url
              : "/images/event-default.svg"
          }
          description={event.description}
        >
          <PinterestIcon round size={35} className="ml-1" />
        </PinterestShareButton>
        <RedditShareButton url={shareUrl} title={title}>
          <RedditIcon round size={35} className="ml-1" />
        </RedditShareButton>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon round size={35} className="ml-1" />{" "}
        </TelegramShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon round size={35} className="ml-1" />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon round size={35} className="ml-1" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};
export default DashboardEvent;
