import Slider from "@/components/common/Slider";
import Hero from "@/components/Hero";
import Simple from "@/components/Simple";

export default function Home() {
  return (
    <div className=" w-full max-w-324 mx-auto">
      {/* Image */}
      <img
        src="/assets/bg-img.webp"
        alt="bg-img"
        className="w-full -z-1 max-w-324 mx-auto absolute hidden lg:block object-cover h-397.5" />
      {/* Hero Text */}
      <Hero />
      <div className="flex lg:px-2 px-4 flex-col lg:flex-row w-full mt-20 sm:mt-32 lg:mt-87.25 items-center justify-center gap-10 lg:gap-7.75">
        <div className="w-full"><Simple /></div>
        <div className="w-full ">
          <Slider />
        </div>
      </div>
    </div>
  );
}