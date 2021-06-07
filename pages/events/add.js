import { parseCookies } from "@/helpers/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";

const AddEventPage = ({ token }) => {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });
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

    const res = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("No token included");
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
    <main className="bg-blueGray-300 ">
      <Layout title="Add New Event">
        <div className="flex items-center justify-center  mt-32 mb-32">
          <div className="mb-6 shadow-lg rounded-lg bg-blueGray-200 ">
            <h1 className="text-3xl text-center text-blueGray-800 py-2">
              ADD NEW EVENT
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </h1>
            <div className="block px-6 py-6">
              <Link href="/events">
                <a className=" text-blueGray-800 font-bold mr-4 py-2">
                  GO BACK
                </a>
              </Link>

              <ToastContainer />

              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex-auto  lg:px-10 py-10 ">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                      <label
                        htmlFor="name"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Event Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3 focus:bg-white"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        htmlFor="performers"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Performers
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3 focus:bg-white"
                        type="text"
                        name="performers"
                        id="performers"
                        value={values.performers}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        htmlFor="venue"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Venue
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3   focus:bg-white"
                        type="text"
                        name="venue"
                        id="venue"
                        value={values.venue}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        htmlFor="address"
                        className="block uppercase  text-gray-700 text-xs font-bold mb-2"
                      >
                        Address
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3   focus:bg-white"
                        type="text"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Date
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3   focus:bg-white"
                      type="date"
                      name="date"
                      id="date"
                      value={values.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Time
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3   focus:bg-white"
                      type="text"
                      name="time"
                      id="time"
                      value={values.time}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Event Description
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3   focus:bg-white"
                    type="text"
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7 rounded">
                  <input
                    type="submit"
                    value="Add Event"
                    className="w-full bg-blueGray-800  rounded-lg shadow-xl font-medium text-white px-4 py-2 mt-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}

export default AddEventPage;

AddEventPage.defaultProps = {
  token: null,
};
