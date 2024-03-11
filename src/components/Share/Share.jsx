import image from "../../assets/images/share.png";

export const Share = () => {
  return (
    <section className="share">
      <div className="container">
        <div className="share__text-wrapper min-[480px]:max-w-[75%] min-[1024px]:max-w-[929px] mx-auto flex flex-col items-center min-[1024px]:mb-[190px] min-[768px]:mb-36 mb-16">
          <strong className="block text-center font-semibold text-[#3D82F2] min-[768px]:text-[25px] min-[768px]:leading-[38px]">STEP 1</strong>
          <h2 className="text-white text-center  min-[1280px]:text-[75px] min-[1280px]:leading-[112px] text-xl font-bold min-[375px]:text-2xl min-[768px]:text-4xl min-[1024px]:text-5xl">
            Connect Your Content
          </h2>
          <p className="text-[#707070] text-center text-[8px] min-[375px]:text-[10px] min-[640px]:text-base min-[791px]:text-lg min-[1024px]:text-[30px] min-[1024px]:leading-[45px] mb-3 min-[768px]:mb-[34px]">
            Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.
          </p>
          <a
            className="text-[#707070] border border-[#707070] inline-block text-xs min-[768px]:text-xl font-semibold p-3 min-[768px]:p-6 min-[768px]:min-w[313px] rounded-[10px] hover:border-white hover:text-white active:opacity-80 transition"
            href="#"
          >
            View Available Sources
          </a>
        </div>
        <div className="share__content justify-center grid max-[768px]:grid-rows-2 min-[768px]:grid-cols-2 gap-6">
          <div className="text-white flex flex-col items-center max-w-[686px] min-[1419px]:items-start shrink-0">
            <strong className="font-medium text-sm min-[1024px]:mb-20 mb-7 min-[768px]:text-[30px] min-[768px]:leading-[45px]text-left">Your Homepage</strong>
            <div className="title-wrapper min-[480px]:max-w-[75%] min-[1024px]:max-w-full">
              <h3 className="text-white text-center min-[1280px]:text-[75px] min-[1280px]:leading-[112px] text-xl font-bold min-[375px]:text-2xl min-[768px]:text-4xl min-[768px]:text-left min-[1024px]:text-5xl">
                Your Content.
                <br /> All in <mark className="bg-transparent text-[#3D82F2]">One Spot</mark>
              </h3>
              <ol className="text-sm max-[767px]:text-justify min-[768px]:text-xl min-[1024px]:text-[23px] min-[768px]:leading-[34px]">
                <li className="before:bg-[#2D2D2D] before:w-[33px] before:rounded-full before:content-['1'] before:inline-flex before:justify-center before:me-3 mb-4">
                  Bring all of your content together into one homepage.
                </li>
                <li className="before:bg-[#2D2D2D] before:w-[33px] before:rounded-full before:content-['2'] before:inline-flex before:justify-center before:me-3">
                  Your page automatically updates whenever you create.
                </li>
              </ol>
            </div>
          </div>
          <img
            className="-order-1 min-[768px]:mb-0 min-[768px]:order-1 max-[767px]:max-w-lg min-[768px]:translate-x-6 justify-self-start max-[767px]:w-full max-[767px]:mx-auto"
            src={image}
            width={820}
            alt="In the image showed Charlie Puth and his music"
          />
        </div>
      </div>
    </section>
  );
};
