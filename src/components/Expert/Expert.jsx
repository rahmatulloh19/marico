import image from "../../assets/images/expert.png";

export const Expert = () => {
  return (
    <section className="expert max-w-[1830px] mx-auto pt-10 pb-14 min-[1024px]:pt-20 min-[1024px]:pb-28">
      <h2 className="text-white text-center  min-[1280px]:text-[75px] min-[1280px]:leading-[112px] text-xl font-bold min-[375px]:text-2xl min-[768px]:text-4xl min-[1024px]:text-5xl mb-5 min-[1024px]:mb-[52px]">
        Experts Agree
      </h2>
      <img src={image} alt="" />
    </section>
  );
};
