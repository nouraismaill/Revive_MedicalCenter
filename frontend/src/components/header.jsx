import React, { useRef, useState } from "react";
import logo from "../assets/images/logo1.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../assets/images/avatar-icon.png";
import "../App.css";
const Navbar = () => {
  const headerRef = useRef(null);
  const [state, setState] = useState(false);
  const navigation = [
    { title: "Home", path: "/home" },
    { title: "Find a Doctor", path: "/doctors" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky_header mt-[-31px] bg-offwh border-b w-full md:static md:text-sm md:border-none ">
      <div className=" items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img
              src={logo}
              width={180}
              className="mt-[9px]"
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center text-[16px] space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <a
                  href="/login"
                  className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Sign in
                </a>
              </li>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden">
                <Link to="/">
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <img src={userImg} className="w-full rounded-full" alt="" />
                  </figure>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;