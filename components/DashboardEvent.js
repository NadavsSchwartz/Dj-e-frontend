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
  console.log(shareUrl);
  return (
    <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 rounded-lg border">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src={
              event.image
                ? event.image.formats.thumbnail.url
                : "/images/event-default.svg"
            }
            alt="profile"
            style={{
              minHeight: "200px",
              maxHeight: "235px",
              minWidth: "200px",
              maxWidth: "235px",
            }}
          />
          <Link href={`/events/${event.slug}`}>
            <a className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-blueGray-800">
              Event Name: {event.name}
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-3 ">
        <Link href={`/events/edit/${event.id}`}>
          <a>
            <FaPencilAlt /> <span>Edit </span>
          </a>
        </Link>

        <a className="ml-3" href="#" onClick={() => handleDelete(event.id)}>
          <FaTimes /> <span>Delete</span>
        </a>
      </div>
      <div className="flex mt-5">
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon round size={35} />
        </FacebookShareButton>
        <EmailIcon round size={35} />
        <LinkedinIcon round size={35} /> <PinterestIcon round size={35} />{" "}
        <RedditIcon round size={35} />
        <TelegramIcon round size={35} /> <TwitterIcon round size={35} />{" "}
        <WhatsappIcon round size={35} />
      </div>
    </div>
  );
};
export default DashboardEvent;
