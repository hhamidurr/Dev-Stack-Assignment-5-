import { TiStarFullOutline } from "react-icons/ti";

const Main = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-[#0F172A] text-5xl font-bold mb-4 ">
          Explore the <span className="text-[#EC4899] mb-36">Technologies</span>
        </h2>
        <p className="text-[#64748B] text-[20px] mb-16">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          {/* Left - Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Technology Card */}
            <div className="card bg-base-100 border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl w-full">
              <div className="card-body p-6">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-pink-50 to-violet-50 flex items-center justify-center mb-4">
                        <img
                          src="/src/assets/Group.png"
                          alt="skill"
                          className="w-9 h-9 object-contain"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-800">React</h3>
                    </div>

                    <span className="badge badge-sm bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-white border-none px-3 py-3 font-medium">
                      Most Popular
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 leading-6 mt-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>

                <div className="flex justify-between items-center mt-4 gap-2">
                  <div className="px-4 py-2 text-sm bg-gray-50 rounded-lg border border-gray-200 text-gray-600 font-medium">
                    Frontend
                  </div>

                  <span className="text-sm text-gray-500 font-medium">
                    Beginner-Friendly
                  </span>

                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <TiStarFullOutline className="text-yellow-400 text-lg" />
                    5.4
                  </span>
                </div>

                <div className="mt-6">
                  <button className="btn btn-block border-none text-white bg-linear-to-r from-[#EC4899] to-[#8B5CF6] hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl w-full">
              <div className="card-body p-6">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-pink-50 to-violet-50 flex items-center justify-center mb-4">
                        <img
                          src="/src/assets/Group.png"
                          alt="skill"
                          className="w-9 h-9 object-contain"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-800">React</h3>
                    </div>

                    <span className="badge badge-sm bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-white border-none px-3 py-3 font-medium">
                      Most Popular
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 leading-6 mt-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>

                <div className="flex justify-between items-center mt-4 gap-2">
                  <div className="px-4 py-2 text-sm bg-gray-50 rounded-lg border border-gray-200 text-gray-600 font-medium">
                    Frontend
                  </div>

                  <span className="text-sm text-gray-500 font-medium">
                    Beginner-Friendly
                  </span>

                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <TiStarFullOutline className="text-yellow-400 text-lg" />
                    5.4
                  </span>
                </div>

                <div className="mt-6">
                  <button className="btn btn-block border-none text-white bg-linear-to-r from-[#EC4899] to-[#8B5CF6] hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl w-full">
              <div className="card-body p-6">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-pink-50 to-violet-50 flex items-center justify-center mb-4">
                        <img
                          src="/src/assets/Group.png"
                          alt="skill"
                          className="w-9 h-9 object-contain"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-800">React</h3>
                    </div>

                    <span className="badge badge-sm bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-white border-none px-3 py-3 font-medium">
                      Most Popular
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 leading-6 mt-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>

                <div className="flex justify-between items-center mt-4 gap-2">
                  <div className="px-4 py-2 text-sm bg-gray-50 rounded-lg border border-gray-200 text-gray-600 font-medium">
                    Frontend
                  </div>

                  <span className="text-sm text-gray-500 font-medium">
                    Beginner-Friendly
                  </span>

                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <TiStarFullOutline className="text-yellow-400 text-lg" />
                    5.4
                  </span>
                </div>

                <div className="mt-6">
                  <button className="btn btn-block border-none text-white bg-linear-to-r from-[#EC4899] to-[#8B5CF6] hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Your Stack */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-fit lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>

                <p className="text-sm text-gray-500 mt-1">
                  No technologies selected yet.
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#EC4899]/10 to-[#8B5CF6]/10 flex items-center justify-center">
                <span className="text-lg">🧰</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center min-h-55 rounded-xl border border-dashed border-gray-300 bg-gray-50/70 text-center px-6">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#EC4899]/10 to-[#8B5CF6]/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>

              <p className="text-gray-700 font-semibold text-base">
                Your stack is empty.
              </p>

              <p className="text-sm text-gray-400 mt-2 max-w-55">
                Add technologies from the list to build your development stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
