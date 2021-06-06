import Link from "next/link";
import Search from "./Search";
import styles from "../styles/Header.module.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";
import { useContext, useState } from "react";

const Header = (props) => {
  const { user, logout } = useContext(AuthContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className=" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                DJE
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
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
                        <span className="lg:hidden inline-block ml-2">
                          Star
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <button
                      onClick={() => logout()}
                      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                // If logged out
                <>
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
