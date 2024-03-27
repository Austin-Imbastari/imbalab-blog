import LogoIcon from '/images/logo.svg';
import HomeIcon from '/images/homeIcon.svg';
import Hamburger from '/images/hamburger.svg';

const Navbar = () => {
  return (
    <>
      <header className="bg-black">
        <nav className="container flex justify-between items-center h-28">
          <div className="flex items-center ">
            <img src={LogoIcon} alt="logo svg image" />
            <h1 className="font-poppins text-2xl ml-2 text-white">imbalab</h1>
          </div>
          <div className="border-gradient bg-[#1C1C1C] rounded-full">
            <ul className="flex items-center gap-[2vw]">
              <div className="p-2 m-2 pl-4 pr-4 bg-[#363636] rounded-full">
                <img className="size-8" src={HomeIcon} alt="home icon" />
              </div>
              <li>
                <a className="font-poppins text-white" href="#">
                  About
                </a>
              </li>
              <li className="pr-5">
                <a className="font-poppins text-white" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="border-gradient p-4 ml-4 mr-4 bg-[#363636] rounded-full">
            <img className="size-4" src={Hamburger} alt="hamburger menu" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
