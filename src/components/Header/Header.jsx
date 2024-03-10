import "./header.css";
import Logo from "../../assets/images/maricologo.svg";
import classNames from "classnames";
import { useState } from "react";

export const Header = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened((prevValue) => !prevValue);
  };
  return (
    <header className="site-header text-[#707070] text-xl font-medium relative">
      <div className="container">
        <div className="site-header__wrapper">
          <a className="block hover:opacity-80 active:opacity-70 transition" href="/">
            <img src={Logo} width={140} alt="Marico logo" />
          </a>

          <nav className="site-header__nav max-[900px]:hidden">
            <ul className={`site-header__list flex gap-5 min-[900px]:gap-10`}>
              <li className="site-header__item">
                <a className="hover:text-[#306EF7] transition active:opacity-80" href="#">
                  Use Cases
                </a>
              </li>
              <li className="site-header__item">
                <a className="hover:text-[#306EF7] transition active:opacity-80" href="#">
                  About
                </a>
              </li>
              <li className="site-header__item">
                <a className="hover:text-[#306EF7] transition active:opacity-80 text-[#306EF7]" href="#">
                  Pricing
                </a>
              </li>
              <li className="site-header__item">
                <a className="hover:text-[#306EF7] transition active:opacity-80" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="site-header__link-wrapper max-[900px]:hidden flex items-center gap-6">
            <a className="block transition hover:text-[#306EF7]  active:opacity-80" href="#">
              Login
            </a>
            <a className="bg-[#306EF7] active:opacity-65 block transition hover:opacity-80  text-white py-3 px-5 rounded-md" href="#">
              Sign Up
            </a>
          </div>

          <div className={classNames("absolute top-full hidden left-0 w-full", { "!block": opened })}>
            <ul className={`site-header__list flex gap-5 flex-col items-center min-[900px]:hidden`}>
              <li className="site-header__item">
                <a className=" block transition hover:text-[#306EF7]" href="#">
                  Use Cases
                </a>
              </li>
              <li className="site-header__item">
                <a className=" block transition hover:text-[#306EF7]" href="#">
                  About
                </a>
              </li>
              <li className="site-header__item">
                <a className=" block transition text-[#306EF7] hover:text-[#306EF7]" href="#">
                  Pricing
                </a>
              </li>
              <li className="site-header__item">
                <a className=" block transition hover:text-[#306EF7]" href="#">
                  Blog
                </a>
              </li>
              <li className="site-header__item">
                <a className="block transition hover:text-[#306EF7] " href="#">
                  Login
                </a>
              </li>
              <li className="site-header__item">
                <a className="bg-[#306EF7] active:opacity-65 block transition hover:opacity-80  text-white py-3 px-5 rounded-md" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          <div className={classNames(`min-[900px]:hidden tham tham-e-squeeze tham-w-6`, { "tham-active": opened })} onClick={handleClick}>
            <div className="tham-box">
              <div className="tham-inner" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
