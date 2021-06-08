import moment from "moment";
import { FaImage } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseCookies } from "@/helpers/index";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import { API_URL } from "@/config/index";

export default function EditEventPage({ event, token }) {
  const [values, setValues] = useState({
    name: event.name,
    performers: event.performers,
    venue: event.venue,
    address: event.address,
    date: event.date,
    time: event.time,
    description: event.description,
  });
  const [imagePreview, setImagePreview] = useState(
    event.image ? event.image.formats.thumbnail.url : null
  );
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    const res = await fetch(`${API_URL}/events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("Unauthorized");
        return;
      }
      toast.error("Something Went Wrong");
    } else {
      const event = await res.json();
      router.push(`/events/${event.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/events/${event.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.thumbnail.url);
    setShowModal(false);
  };

  return (
    <main>
      <Layout title="Add New Event">
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
        <section className="flex py-10 bg-blueGray-200 items-center justify-center">
          <div className="relative  " style={{ minWidth: "500px" }}>
            <div className="mb-6 shadow-lg  ">
              <div className=" flex-col bg-blueGray-100 mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-3 py-3">
                  <Link href="/events">
                    <a className=" text-blueGray-800 font-bold mr-4 py-2">
                      Go Back
                    </a>
                  </Link>
                </div>
                <h1 className="text-3xl text-center text-blueGray-800 py-2">
                  EDIT EVENT
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit} className="w-full ">
                  <div className="container bg-blueGray-300">
                    <div className="text-center mt-2 ">
                      <label
                        htmlFor="name"
                        className=" uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        className="w-full text-gray-700 py-1 px-2 border-solid bg-blueGray-100"
                      />
                    </div>
                    <div className="text-center mt-5">
                      <label
                        htmlFor="performers"
                        className=" uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Performers
                      </label>
                      <input
                        type="text"
                        name="performers"
                        id="performers"
                        value={values.performers}
                        onChange={handleInputChange}
                        className="border-solid w-full text-gray-700 mr-3 py-1 px-2 bg-blueGray-100"
                      />
                    </div>
                    <div className="text-center mt-5">
                      <label
                        htmlFor="venue"
                        className=" uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Venue
                      </label>
                      <input
                        type="text"
                        name="venue"
                        id="venue"
                        value={values.venue}
                        onChange={handleInputChange}
                        className="bg-blueGray-100 w-full text-gray-700 mr-3 py-1 px-2 border-solid "
                      />
                    </div>
                    <div className="text-center mt-5">
                      <label
                        htmlFor="address"
                        className=" uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={handleInputChange}
                        className="bg-blueGray-100 border-solid w-full text-gray-700 mr-3 py-1 px-2 "
                      />
                    </div>
                    <div className="text-center mt-5">
                      <label
                        htmlFor="date"
                        className=" uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={moment(values.date).format("yyyy-MM-DD")}
                        className=" border-solid w-full text-gray-700 mr-3 py-1 px-2 bg-blueGray-100"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="text-center mt-5">
                      <label
                        htmlFor="time"
                        className=" uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Time
                      </label>
                      <input
                        type="text"
                        name="time"
                        id="time"
                        value={values.time}
                        className=" border-solid w-full text-gray-700 mr-3 py-1 px-2 bg-blueGray-100"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <label
                      htmlFor="description"
                      className=" uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Event Description
                    </label>
                    <textarea
                      type="textarea"
                      name="description"
                      id="description"
                      value={values.description}
                      className="bg-blueGray-100 border-solid w-full text-gray-700 mr-3 py-1 px-2 "
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Update Event"
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sxl font-bold uppercase py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  />
                </form>

                <h2
                  className="text-center mt-5 uppercase text-blueGray-600 text-xs font-bold mb-2
                "
                >
                  Event Image
                </h2>
                {imagePreview ? (
                  <div className="flex justify-center mt-3">
                    <Image src={imagePreview} height={200} width={270} />
                  </div>
                ) : (
                  <p className="text-center font-bold text-sm mt-5">
                    No image uploaded
                  </p>
                )}

                <div className="text-center mt-5">
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sxl font-bold uppercase py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Set Image
                  </button>
                </div>

                <Modal show={showModal} onClose={() => setShowModal(false)}>
                  <ImageUpload
                    eventId={event.id}
                    imageUploaded={imageUploaded}
                    token={token}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/${id}`);
  const event = await res.json();

  return {
    props: {
      event,
      token,
    },
  };
}
