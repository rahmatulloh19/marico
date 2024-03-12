import logo from "../../assets/images/maricologo.svg";

export const Footer = () => {
  return (
    <footer className="py-5 min-[768px]:py-16 min-[1024px]:min-[96px]">
      <div className="container">
        <div className="wrapper flex flex-col items-center text-[#707070] min-[768px]:flex-row justify-between">
          <div className="mb-5">
            <a className="transition-opacity hover:opacity-80 active:opacity-60" href="/">
              <img className="w-36 min-[768px]:w-auto" width={196} src={logo} alt="" />
            </a>
            <address>
              <a className="not-italic text-center min-[768px]:text-left block transition-opacity hover:opacity-80 active:opacity-60" href="mailto:info@marico.co">
                info@marico.co
              </a>
            </address>
          </div>

          <ul className="flex flex-col items-center gap-2 font-medium min-[768px]:flex-row min-[768px]:gap-[50px] text-lg min-[1024px]:text-[28px] min-[1024px]:leading-[42px]">
            <li>
              <a className="hover:text-[#306EF7] transition active:opacity-80" href="/">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-[#306EF7] transition active:opacity-80 text-[#306EF7]" href="/">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-[#306EF7] transition active:opacity-80" href="/">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-[#306EF7] transition active:opacity-80" href="/">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
