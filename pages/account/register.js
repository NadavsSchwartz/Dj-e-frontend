import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!");
      return;
    }

    register({ username, email, password });
  };

  return (
    <div className="bg-blueGray-800 h-screen">
      <Layout title="User Registration">
        <div className="container mx-auto px-4 h-full py-40 min-h-screen">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-8/12 px-2">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <h1 className=" text-2xl font-bold uppercase underline flex justify-center">
                    {" "}
                    Register
                  </h1>

                  <ToastContainer />
                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="username"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Username
                      </label>
                      <input
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full "
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="email"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full "
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="password"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Password
                      </label>
                      <input
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full "
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="passwordConfirm"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Confirm Password
                      </label>
                      <input
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full "
                        type="password"
                        id="passwordConfirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        type="submit"
                        value="Register"
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full "
                      >
                        Register
                      </button>
                    </div>
                  </form>

                  <p>
                    Already have an account?{" "}
                    <Link href="/account/login">
                      <a className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase py-1 px-2 rounded shadow hover:shadow-lg outline-none  ">
                        {" "}
                        Login
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RegisterPage;
