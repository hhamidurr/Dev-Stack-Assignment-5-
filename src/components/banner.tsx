import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
            Build Your Ideal <br />

            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg leading-7 mb-10 max-w-2xl">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              Explore Technologies
            </button>

            <button className="text-[#374151] border border-gray-200 font-semibold px-10 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-full max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;