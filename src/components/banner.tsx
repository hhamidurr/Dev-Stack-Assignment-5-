const Banner = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-7xl font-extrabold mb-10">
              Build Your Ideal <br/>
              <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-extrabold">
                Development Stack
              </span>
            </h1>
            <p className="text-[#475569] text-[18px] mb-16">
              Explore frontend, backend, database, and tooling options,<br/> compare
              them side by side, and put together the stack that fits your <br/> next
              project.
            </p>
            <div className="flex gap-4">
              <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:cursor-pointer transition duration-300">
                Explore Technologies
              </button>
              <button className=" text-[#374151] border border-gray-200 font-semibold px-10 py-3 rounded-lg shadow-lg hover:cursor-pointer transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <img className="w-2xl" src="/src/assets/banner-stack.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Banner;
