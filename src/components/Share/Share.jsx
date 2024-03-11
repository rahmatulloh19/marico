import image from "../../assets/images/onelink.png";

export const Share = () => {
  return (
    <section className="share py-10">
      <div className="container">
        <div className="share__text-wrapper min-[480px]:max-w-[75%] min-[1024px]:max-w-[929px] mx-auto flex flex-col items-center min-[1024px]:mb-[190px] min-[768px]:mb-36 mb-16">
          <strong className="block text-center font-semibold text-[#3D82F2] min-[768px]:text-[25px] min-[768px]:leading-[38px]">STEP 2</strong>
          <h2 className="text-white text-center  min-[1280px]:text-[75px] min-[1280px]:leading-[112px] text-xl font-bold min-[375px]:text-2xl min-[768px]:text-4xl min-[1024px]:text-5xl">
            Share Your Homepage
          </h2>
          <p className="text-[#707070] text-center text-[8px] min-[375px]:text-[10px] min-[640px]:text-base min-[791px]:text-lg min-[1024px]:text-[30px] min-[1024px]:leading-[45px] mb-3 min-[768px]:mb-[34px]">
            Share your Wavium homepage link with your followers, and we'll handle the rest.
          </p>
        </div>
        <ul className="share__content grid max-[767px]:grid-rows-2 min-[768px]:grid-cols-2 gap-[23px]">
          <li className="flex flex-col pt-5 pl-7 min-[768px]:pt-[33px] min-[768px]:pl-[45px] bg-[#0D0D0D]">
            <strong className="text-[#0FC65C] font-normal mb-3 min-[768px]:mb-6 min-[768px]:text-xl min-[1024px]:text-[30px] min-[1024px]:leading-[45px]">One link</strong>
            <h3 className="text-white font-semibold text-4xl min-[768px]:text-5xl min-[1280px]:text-[80px] grow min-[1280px]:leading-[120px] mb-[14px]">
              <mark className="bg-transparent block text-[#919191]">ALL You Create.</mark> One Link
            </h3>
            <img className="w-5/6 self-end" src={image} alt="" />
          </li>
          <li className="flex flex-col pt-5 pl-7 min-[768px]:pt-[33px] min-[768px]:pl-[45px] bg-[#0D0D0D]">
            <strong className="text-[#0FC65C] font-normal mb-10 min-[1280px]:mb-[96px] min-[768px]:text-xl min-[1024px]:text-[30px] min-[1024px]:leading-[45px]">Collect Subscribers</strong>
            <h3 className="text-white font-semibold text-4xl min-[768px]:text-5xl min-[1280px]:text-[80px] grow min-[1280px]:leading-[120px] mb-[14px]">
              <mark className="bg-transparent block text-[#919191]">
                Emails. <br /> Phone #s.
              </mark>{" "}
              All Yours.
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
