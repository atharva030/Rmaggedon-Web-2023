import { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../Constant";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <a
        className="w-[32px] h-[32px] text-white text-4xl text-bold cursor-pointer"
        href="https://www.rnxg.co.in/"
      >
        {" "}
        RNXG{" "}
      </a>
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-30 `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <a
        className="w-[32px] h-[32px] text-white text-4xl text-bold cursor-pointer"
        href="https://www.rnxg.co.in/"
      >
        RNXG
      </a>
      <ul className="list-none md:flex hidden justify-end items-center flex-1 ">
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-6`}>
          <a href="/">Home</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-6 `}>
          <a href="#treasure">Treasure</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-6 `}>
          <a href="#battles">Battles</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-6`}>
          <a href="#connect">Connect</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-6`}>
          <a href="#register">Register</a>
        </li>
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-30 `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mb-1`}>
              <a href="/">Home</a>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mb-2 `}>
              <a href="/treasure">Treasure</a>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mb-3 `}>
              <a href="/battels">Battles</a>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mb-4`}>
              <a href="/Contact">Connect</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
