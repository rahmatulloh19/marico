export const Share = () => {
  return (
    <section className="share">
      <div className="container">
        <div className="share__text-wrapper min-[480px]:max-w-[75%] min-[1024px]:max-w-[929px] mx-auto flex flex-col items-center">
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
        <div className="share__content">
          <strong>Your Homepage</strong>
        </div>
      </div>
    </section>
  );
};
