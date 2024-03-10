export const Hero = () => {
  return (
    <section className="hero pt-16 pb-32 min-[768px]:pt-24 min-[768px]:pb-40 min-[1024px]:pt-32 min-[1024px]:pb-[188px]">
      <div className="container">
        <div className="hero__title-wrapper">
          <h1
            className="text-white font-bold text-center text-[23px] min-[375px]:text-3xl min-[640px]:text-4xl min-[768px]:text-5xl min-[900px]:text-6xl min-[1024px]:text-7xl
         min-[1338px]:text-[112px] min-[1338px]:leading-[168px] mb-16 min-[768px]:mb-24 min-[1024px]:mb-32"
          >
            Own your audience. <br /> <mark className="hero__marked">So you don't lose them</mark>
          </h1>
        </div>
        <div className="max-w-[278px] min-[768px]:max-w-[555px] min-[1280px]:max-w-[694px] mx-auto">
          <strong className="block mb-5 min-[768px]:mb-9 min-[1280px]:mb-[50px] font-medium text-white min-[768px]:text-[32px] min-[768px]:leading-[50px] min-[1280px]:text-[40px] min-[1280px]:leading-[60px] text-center">
            Turn your audience into email and text message subscribers.
          </strong>
          <div className="flex gap-[26px] items-center flex-col min-[768px]:flex-row justify-center min-[768px]:px-5 mb-4 min-[768px]:mb-5">
            <a
              className="inline-block text-white bg-[#326CF9] hover:opacity-80 active:opacity-65 transition p-3 min-[768px]:p-6 rounded-[10px] w-3/4 min-[768px]:w-auto text-center grow min-[768px]:text-xl"
              href="#"
            >
              Get Started Now
            </a>
            <a
              className="inline-block text-[#707070] border border-[#707070] p-3 min-[768px]:p-6 rounded-[10px] hover:border-white hover:text-white active:opacity-80 transition w-3/4 min-[768px]:w-auto text-center grow min-[768px]:text-xl"
              href="#"
            >
              View A Demo
            </a>
          </div>
          <div className="flex text-xs items-center gap-2.5 min-[768px]:text-2xl justify-center">
            <svg className="w-6 min-[768px]:w-[30px]" width={30} height={29} viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3881 5.25732C19.1096 5.25732 22.9371 9.08484 22.9371 13.8063C22.9371 18.5278 19.1096 22.3553 14.3881 22.3553C9.66663 22.3553 5.83911 18.5278 5.83911 13.8063C5.83911 9.08484 9.66663 5.25732 14.3881 5.25732Z"
                fill="#0FC65C"
              />
              <path
                opacity="0.24"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.882 0.000244141C22.7797 0.000244141 29.182 6.40259 29.182 14.3002C29.182 22.1979 22.7797 28.6002 14.882 28.6002C6.98438 28.6002 0.582031 22.1979 0.582031 14.3002C0.582031 6.40259 6.98438 0.000244141 14.882 0.000244141Z"
                fill="#0FC65C"
              />
            </svg>
            <strong className="text-white inline-block">1000+</strong>
            <p className="text-[#707070]">creators have already started</p>
          </div>
        </div>
      </div>
    </section>
  );
};
