import image from "../../assets/images/marico.svg";

export const Article = () => {
  return (
    <article className="py-20 min-[768px]:py-36 min-[1024px]:py-[188px]" data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
      <div className="max-w-fit mx-auto flex flex-col items-center">
        <img className="w-20 min-[768px]:w-32 min-[1024px]:w-auto mb-5" src={image} width={164} alt="Marico logo image" />
        <h2 className="text-center text-white font-semibold text-4xl min-[480px]:text-5xl min-[768px]:text-7xl min-[1024px]:text-[100px] min-[1024px]:leading-[150px]">Get Started Now</h2>
        <p className="text-center text-white text-sm min-[375px]:text-lg min-[480px]:text-xl min-[768px]:text-3xl min-[1024px]:text-[43px] min-[1024px]:leading-[64px] mb-3.5">
          Setup is easy and takes under 5 minues.
        </p>
        <a
          className="inline-block text-white bg-[#326CF9] hover:opacity-80 active:opacity-65 transition p-3 min-[768px]:p-6 rounded-[10px] min-[768px]:min-w-[472px] text-center min-[768px]:text-[30px] min-[768px]:leading-[45px] mb-4 min-[768px]:mb-[26px] font-semibold"
          href="#"
        >
          Get Started Now
        </a>
        <div className="flex text-xs items-center gap-2.5 min-[375px]:text-lg min-[480px]:text-xl min-[768px]:text-3xl min-[1024px]:text-[38px] min-[1024px]:leading-[57px] justify-center">
          <svg className="w-8 min-[768px]:w-[37px]" width={30} height={29} viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </article>
  );
};
