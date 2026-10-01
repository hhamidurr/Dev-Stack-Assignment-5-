
const RightSection = () => {
  return (
    <>
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
      ;
    </>
  );
};

export default RightSection;
