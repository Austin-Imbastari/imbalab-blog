import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithubAlt } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import LogoIcon from '/images/logo.svg';

const Footer = () => {
  return (
    <>
      <header className="bg-black mt-[100px]">
        <nav className="container flex justify-between items-center h-28">
          <div className="flex items-center ">
            <NavLink to="/">
              <img src={LogoIcon} alt="logo svg image" />
            </NavLink>
            <NavLink to="/">
              <h1 className="font-poppins text-2xl ml-2 text-white">imbalab</h1>
            </NavLink>
          </div>
          <div className="border-gradient bg-[#1C1C1C] rounded-full ">
            <ul className="flex items-center ">
              <NavLink
                to="https://www.linkedin.com/in/austin-imbastari/"
                target="_blank"
              >
                <div className="p-2 m-2 pl-4 pr-4 bg-[#363636] rounded-full">
                  <FaLinkedin size={28} />
                </div>
              </NavLink>
              <li className="p-2 m-2 pl-4 pr-4 bg-[#363636] rounded-full">
                <a
                  className="font-poppins  cursor-pointer"
                  target="_blank"
                  href="https://github.com/Austin-Imbastari"
                >
                  <FaGithubAlt size={28} />
                </a>
              </li>
              {/* <li className="p-2 m-2 pl-4 pr-4 bg-[#363636] rounded-full">
                <NavLink
                  to="/allprojects"
                  className="font-poppins text-white cursor-pointer"
                >
                  <div>Projects</div>
                </NavLink>
              </li>
              <li className="p-2 m-2 pl-4 pr-4 bg-[#363636] rounded-full">
                fjdlkjsflsj
              </li> */}
            </ul>
          </div>
          <div className="border-gradient p-4 ml-4 mr-4 bg-[#363636] rounded-full">
            <a href="mailto: austinimbastari@gmail.com" target="_blank">
              Contact Me
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Footer;
