
import LeftSection from "./left-sec";
import RightSection from "./right-sec";

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
            <LeftSection/>
            <RightSection/>
        </div>
      </div>
    </div>
  );
};

export default Main;
