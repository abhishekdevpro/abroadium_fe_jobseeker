import { IoLogOutOutline } from "react-icons/io5";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/auth";

const DefaulHeader2 = () => {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      {!userToken && ( // Only show the top header if the user is not logged in
        <div className="TopHeader ">
        <div className="container ">
          <div className="TopMenu">
            <div className="TopSocial hidden lg:flex justify-center">
              <i className="fa-brands fa-facebook mx-2"></i>
              <i className="fa-brands fa-linkedin-in mx-2"></i>
              <i className="fa-brands fa-instagram mx-2"></i>
            </div>
            <div className="TopMenu">
              <ul className="flex">
                <li>
                  <a href="/job-list-v7" className="font-bold">
                    <i className="fa-solid fa-compass"></i> Jobs
                  </a>
                </li>
                <li>
                  <a href="" className="font-bold">
                    <i className="fa-solid fa-medal"></i> Careers & Training
                  </a>
                </li>
                <li className="border-l-2" ></li>
                <li>
                  <a href="https://employer.abroadium.com/" className="font-bold">
                    <i className="fa-solid fa-user"></i> Post Job
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      )}
      <div className="header">
        <div className="container flex justify-between items-center header">
          {/* Sidebar for Mobile View */}
          <div className="md:hidden flex items-center">
            <Link to="/">
              <img src="https://abroadiumlandingemployee.vercel.app/assets/logo-c5bcd0df.png" alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Main Menu for Desktop View */}
          <div className="hidden md:flex items-center header">
            <div className="header-menu flex items-center header">
              <div className="header-logo flex items-center">
                <Link to="/">
                  <img src="https://abroadiumlandingemployee.vercel.app/assets/logo-c5bcd0df.png" alt="Logo" className="h-10" />
                </Link>
                <div className="main-menu ms-4">
                  <ul className="flex space-x-4">
                    <li >
                      <a href="/sentry-spot" className="font-bold">AI Services</a>
                    </li>
                    <li>
                      <a href="https://blog.abroadium.com/" className="font-bold">Hiring Advice</a>
                    </li>
                    <li>
                      <a href="" className="font-bold">Companies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Side Menu */}
          <div className="side-menu flex items-center">
            <div className="btn-box flex items-center w-80">
              {userToken ? (
                <Button
                  className="bg-gray-500 p-3 duration-500 hover:bg-[#E60278] ml-2"
                  title="logout"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <IoLogOutOutline size={24} />
                </Button>
              ) : (
                <a href="#" data-bs-toggle="modal" data-bs-target="#loginPopupModal" className=" my-4 text-white">
                  Sign in
                </a>
              )}
              {!userToken && (
                <Link to={"/sentry-spot"}>
                  <button type="button" className="register-btn p-2 hidden lg:flex ">
                    Create Your AbroadiumID
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaulHeader2;
