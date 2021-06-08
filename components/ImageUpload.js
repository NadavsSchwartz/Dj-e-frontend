import { useState } from "react";
import { API_URL } from "@/config/index";

const ImageUpload = ({ eventId, imageUploaded, token }) => {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "events");
    formData.append("refId", eventId);
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl text-center text-blueGray-800 py-2">
        ADD NEW IMAGE
        <hr className="mt-6 border-b-1 border-blueGray-300" />
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-10">
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" onChange={handleFileChange} className="hidden" />
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sxl font-bold uppercase py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-10 mb-10 w-full "
        />
      </form>
    </div>
  );
};
export default ImageUpload;
