import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";
import EventItem from "../components/EventItem";
import { parseCookies } from "../helpers";

const HomePage = () => {
  return (
    <main>
      <Layout>
        <div className="relative flex items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/Yj7fttX/main-background.jpg')",
            }}
          >
            {" "}
            <span className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-16">
                  <h1 className="text-white font-semibold text-6xl">
                    YOUR EVENTS
                  </h1>
                  <h1 className="text-white font-semibold text-6xl">
                    OUR PLATFORM
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    EASILY KEEP TRACK OF YOUR EVENTS
                  </p>
                  <p className="mt-4 text-lg text-blueGray-200">
                    WITH DEDICATED DASHBOARD AND USER FRIENDLY EXPERIENCE
                  </p>
                </div>
              </div>
            </div>
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
        </div>
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-500">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">UNLIMITED EVENTS</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep track of as many events as you want, edit events data
                      as many times as you want, and add images - all with a
                      click of a button.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-600">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <h6 className="text-xl font-semibold"> ALWAYS FREE</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      No credit card needed or any payment info required. DJE
                      has been and always will be FREE.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-500">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      START IN 60 SECONDS
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      With DJE, it's as easy as signing up for a new account.
                      once signed in, you're able to start adding and editing
                      your events.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  INVITE AND SHARE YOUR EVENTS
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  share with almost every major social platform your event with
                  a click of a button
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  so other people can learn about your event & expand your
                  exposure
                </p>
                <Link href="/account/login">
                  <a className="font-bold text-blueGray-700 mt-8">
                    Sign in and start Eventing!
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white text-center">
                      SHARE YOUR EVENTS
                    </h4>
                    <div className="mt-2 flex flex-wrap justify-between text-white">
                      <i className="fab fa-facebook-square text-3xl"></i>
                      <i className="fab fa-twitter-square text-3xl"></i>
                      <i className="fab fa-whatsapp-square text-3xl"></i>
                      <i className="fab fa-pinterest-square text-3xl"></i>
                      <i className="fab fa-reddit-square text-3xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mt-3 text-center">
                      AND MANY MORE
                    </h4>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/about_us.svg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-address-card text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">ABOUT US</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    DJE takes pride in helping and connecting between people
                    through events
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            By sharing your events on social media
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Keep tracks of all your events - past and future in
                            one dashboard
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            User and mobile friendly design
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
};
export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/dashboard",
      },
      props: {},
    };
  }
}
export default HomePage;
