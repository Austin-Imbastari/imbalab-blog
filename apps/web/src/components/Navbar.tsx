import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import LogoIcon from '/images/logo.svg';
import HomeIcon from '/images/homeIcon.svg';
import Hamburger from '/images/hamburger.svg';
import X from '/images/x.svg';
import { navbar } from '../utils/animations';
import { motion } from 'framer-motion';

const Navbar = ({ handleThemeSwitch }: { handleThemeSwitch: () => void }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <motion.header
        variants={navbar}
        initial="hidden"
        animate="show"
        className="bg-black"
      >
        <nav className="container relative flex justify-between items-center h-28">
          <div className="flex items-center ">
            <NavLink to="/">
              <img src={LogoIcon} alt="logo svg image" />
            </NavLink>
            <NavLink to="/">
              <h1 className="font-poppins text-2xl ml-2 text-white">imbalab</h1>
            </NavLink>
          </div>
          <div className="border-gradient bg-[#1C1C1C] rounded-full invisible lg:visible">
            <ul className="flex items-center gap-[2vw]">
              <NavLink to="/">
                <div className="p-2 m-2 pl-4 pr-4 bg-[#363636] rounded-full">
                  <img className="size-8" src={HomeIcon} alt="home icon" />
                </div>
              </NavLink>
              <li>
                <a
                  className="font-poppins text-white cursor-pointer"
                  target="_blank"
                  href="https://austinimbastari.netlify.app/"
                >
                  About Me
                </a>
              </li>
              <li>
                <NavLink
                  to="/allprojects"
                  className="font-poppins text-white cursor-pointer"
                >
                  <div>Projects</div>
                </NavLink>
              </li>
              <li
                onClick={handleThemeSwitch}
                className="flex items-center pr-4"
              >
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
          <div
            onClick={() => setOpened(!opened)}
            className="border-gradient p-4 ml-4 mr-4 bg-[#363636] rounded-full cursor-pointer"
          >
            {!opened ? (
              <img className="size-4" src={Hamburger} alt="hamburger menu" />
            ) : (
              <img className="size-4" src={X} alt="X menu" />
            )}
          </div>

          {opened && (
            <>
              <div
                style={{
                  width: '100vw',
                  height: '100vh',
                  position: 'fixed',
                  zIndex: '9',
                  left: 0,
                  top: 0,
                  backgroundColor: ' #000000d7',
                  opacity: 0.9,
                }}
              ></div>
              <div className="z-10  bg-[#363636]/50 absolute top-[100px] right-0 flex justify-center rounded-lg w-full md:lg:w-[200px] lg:w-[200px] h-auto pb-2">
                <ul className="p-2 text-center">
                  <li className="text-xl p-2">
                    <ThemeSwitcher />
                  </li>
                  <li className="text-xl text-white p-2 ">
                    <NavLink onClick={() => setOpened(!opened)} to="/">
                      <div className="flex justify-center">Home</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => setOpened(!opened)}
                    className="text-xl text-white p-2"
                  >
                    <a
                      className="font-poppins text-white cursor-pointer"
                      target="_blank"
                      href="https://austinimbastari.netlify.app/"
                    >
                      About Me
                    </a>
                  </li>
                  <li
                    onClick={() => setOpened(!opened)}
                    className="text-xl text-white p-2"
                  >
                    <NavLink
                      to="/allprojects"
                      className="font-poppins text-white cursor-pointer"
                    >
                      <div>Projects</div>
                    </NavLink>
                  </li>
                  <li>
                    <div
                      onClick={() => setOpened(!opened)}
                      className="flex justify-center cursor-pointer mt-4"
                    >
                      <img className="size-6" src={X} alt="X menu" />
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
        </nav>
      </motion.header>
    </>
  );
};

export default Navbar;
