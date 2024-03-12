import image from "../../assets/images/email.png";

export const Email = () => {
  return (
    <section className="email py-10">
      <div className="container">
        <div className="share__text-wrapper min-[480px]:max-w-[75%] min-[1024px]:max-w-[1128px] mx-auto flex flex-col items-center min-[1024px]:mb-[190px] min-[768px]:mb-36 mb-16">
          <strong className="block text-center font-semibold text-[#3D82F2] min-[768px]:text-[25px] min-[768px]:leading-[38px]">STEP 3</strong>
          <h2 className="text-white text-center  min-[1280px]:text-[75px] min-[1280px]:leading-[112px] text-xl font-bold min-[375px]:text-2xl min-[768px]:text-4xl min-[1024px]:text-5xl">
            Send Emails & Text Messages
          </h2>
          <p className="text-[#707070] text-center text-[8px] min-[375px]:text-[10px] min-[640px]:text-base min-[791px]:text-lg min-[1024px]:text-[30px] min-[1024px]:leading-[45px] mb-3 min-[768px]:mb-[34px]">
            No more going through a social platform. Reach and engage your audience directly over email and text massage.
          </p>
        </div>
        <div className="share__content justify-center grid max-[767px]:grid-rows-2 min-[768px]:grid-cols-2 gap-6 min-[768px]:items-center">
          <div className="text-white flex flex-col items-center max-w-[727px] min-[768px]:items-start shrink-0">
            <strong className="font-medium text-sm min-[1024px]:mb-20 mb-7 min-[768px]:text-[30px] min-[768px]:leading-[45px]text-left">Create & Share</strong>
            <div className="title-wrapper min-[480px]:max-w-[75%] min-[1024px]:max-w-full">
              <h3 className="text-white text-center min-[1280px]:text-[75px] min-[1280px]:leading-[112px] text-xl font-bold min-[375px]:text-2xl min-[768px]:text-4xl min-[768px]:text-left min-[1024px]:text-5xl mb-5 min-[768px]:mb-[27px]">
                Reach Your Audience <mark className="bg-transparent text-[#3D82F2]">Directly.</mark>
              </h3>
              <ol className="text-sm max-[767px]:text-justify min-[768px]:text-xl min-[1024px]:text-[23px] min-[768px]:leading-[34px]  mb-6 min-[768px]:mb-12 min-[1024px]:mb-[66px]">
                <li className="before:bg-[#2D2D2D] before:w-[33px] before:rounded-full before:content-['1'] before:inline-flex before:justify-center before:me-3 mb-4">
                  Embed content or create something new to share.
                </li>
                <li className="before:bg-[#2D2D2D] before:w-[33px] before:rounded-full before:content-['2'] before:inline-flex before:justify-center before:me-3">
                  Share content over email, text message or your homepage.
                </li>
              </ol>
              <div className="flex gap-[26px] items-center flex-col min-[1024px]:flex-row justify-center mb-4 min-[768px]:mb-5 min-[768px]:max-w-[450px] font-medium">
                <a
                  className="inline-block text-white bg-[#326CF9] hover:opacity-80 active:opacity-65 transition p-3 min-[768px]:p-6 rounded-[10px] w-3/4 min-[768px]:w-full text-center grow min-[768px]:text-xl"
                  href="#"
                >
                  Get Started Now
                </a>
                <a
                  className="inline-block text-[#707070] border border-[#707070] p-3 min-[768px]:p-6 rounded-[10px] hover:border-white hover:text-white active:opacity-80 transition w-3/4 min-[768px]:w-full text-center grow min-[768px]:text-xl"
                  href="#"
                >
                  View A Demo
                </a>
              </div>
            </div>
          </div>
          <img
            className="-order-1 min-[768px]:mb-0 min-[768px]:order-1 max-[767px]:max-w-lg min-[768px]:translate-x-6 justify-self-start max-[767px]:w-full max-[767px]:mx-auto"
            src={image}
            width={820}
            alt="In the image showed BlackPink and his music"
          />
        </div>
      </div>
    </section>
  );
};
