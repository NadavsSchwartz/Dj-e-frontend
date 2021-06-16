import EventMap from "@/components/EventMap";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

const EventPage = ({ event }) => {
  console.log(event);
  return (
    <main>
      <Layout>
        <section className="relative block h-600-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/main_background.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/12  lg:order-1 flex justify-center">
                    <div className="relative ">
                      {event.image.formats ? (
                        <img
                          alt={event.name}
                          src={
                            event.image.formats.medium
                              ? event.image.formats.medium.url
                              : event.image.formats.thumbnail.url
                          }
                          className="shadow-xl rounded-lg h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                        />
                      ) : (
                        <img
                          alt={event.name}
                          src={"/images/event-default.svg"}
                          className="shadow-xl h-auto bg-blueGray-200 align-middle -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <span className="text-xl  mr-3 font-bold  uppercase tracking-wide text-blueGray-600">
                        0
                      </span>
                      <span className="text-md  text-blueGray-400">GOING</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {event.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                    <i className="fas fa-calendar-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    {new Date(event.date).toLocaleDateString("en-US")} at{" "}
                    {event.time}
                  </h3>

                  <div className="mb-2 text-blueGray-600 mt-10 text-xl">
                    <i className="fas fa-child mr-2 text-lg text-blueGray-400"></i>
                    {event.performers}
                  </div>
                  <div className="mb-2 text-blueGray-600 text-xl">
                    <i className="fas fa-home mr-2 text-lg text-blueGray-400"></i>
                    {event.venue}
                  </div>
                  <div className=" leading-normal mt-0 mb-2 text-xl text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    {event.address}
                  </div>
                  <div className="flex flex-wrap">
                    <EventMap event={event} />
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
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
