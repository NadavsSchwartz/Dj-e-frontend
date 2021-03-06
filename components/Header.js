import Link from "next/link";
import Search from "./Search";
import { FaSignInAlt } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";
import { useContext, useState } from "react";

const Header = (props) => {
  const { user, logout } = useContext(AuthContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="top-0 bg-blueGray-800 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className=" text-3xl underline font-bold inline-block mr-4 py-2 whitespace-nowrap uppercase">
                DJE
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl  px-3 border border-solid  rounded  block lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-blueGray-800 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
          >
            {" "}
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link href="/events">
                  <a className="hover:text-orange px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    <i className="text-white far fa-file-alt text-lg leading-lg mr-2" />
                    Events
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {user ? (
                <>
                  <li className="flex items-center text-black">
                    <Search />
                  </li>

                  <li className="flex items-center">
                    <Link href="/events/add">
                      <a className="hover:text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                        Add Event
                      </a>
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href="/account/dashboard">
                      <a className="hover:text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <button
                      onClick={() => logout()}
                      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg lg:mr-1 lg:mb-0 ml-2 mb-2"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-center text-black">
                    <Search />
                  </li>
                  <li className="flex items-center">
                    <Link href="/account/login">
                      <a className="hover:text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                        <FaSignInAlt /> Login
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
