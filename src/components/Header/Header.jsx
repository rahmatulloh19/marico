import Logo from "../../assets/images/maricologo.svg";
import classNames from "classnames";
import { useState } from "react";

export const Header = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened((prevValue) => !prevValue);
  };
  return (
    <header className="site-header py-6 text-[#707070] text-xl font-medium relative">
      <div className="container">
        <div className="site-header__wrapper flex items-center justify-between">
          <a className="site-logo block hover:opacity-80 active:opacity-70 transition" href="/">
            <img className="site-logo__img min-[1024px]:w-[196px]" src={Logo} width={140} alt="Marico logo" />
          </a>

          <nav className="site-header__nav max-[900px]:hidden">
            <ul className="site-header__list flex font-medium gap-5 min-[900px]:gap-10">
              <li className="site-header__item">
                <a className="hover:text-[#306EF7] transition active:opacity-80 flex gap-[9px] items-center" href="#">
                  Use Cases
                  <svg width={11} height={7} viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.49805 4.37289L1.49304 0.540894C1.26007 0.322952 0.89801 0.322952 0.665039 0.540894L0.314087 0.8769C0.204956 0.979691 0.143066 1.12297 0.143066 1.2729C0.143066 1.42282 0.204956 1.5661 0.314087 1.6689L5.08209 6.2319C5.31622 6.44975 5.67889 6.44975 5.91309 6.2319L10.6771 1.6739C10.7862 1.57111 10.8481 1.42783 10.8481 1.2779C10.8481 1.12798 10.7862 0.984695 10.6771 0.881897L10.326 0.545898C10.0933 0.327454 9.73083 0.327454 9.49805 0.545898L5.49805 4.37289Z"
                      fill="#707070"
                    />
                  </svg>
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

          {/* menu with hamburger menu */}
          <div className={classNames("absolute top-full hidden left-1/2 w-11/12 z-10 bg-zinc-950 p-8 rounded-lg -translate-x-1/2", { "!block": opened })}>
            <ul className={`site-header__list font-medium flex gap-5 flex-col items-center min-[900px]:hidden`}>
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

          <div className={classNames(`min-[901px]:hidden tham tham-e-squeeze tham-w-6`, { "tham-active": opened })} onClick={handleClick}>
            <div className="tham-box">
              <div className="tham-inner bg-[#306EF7]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
