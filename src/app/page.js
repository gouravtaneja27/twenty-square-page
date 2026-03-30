import Hero from "@/components/Hero";
import Simple from "@/components/Simple";
import Slider from "@/components/common/Slider";

export default function Home() {
  return (
    <main className="w-full max-w-324 mx-auto">
      <img
        src="/assets/bg-img.webp"
        alt="background"
        className="hidden lg:block absolute w-full max-w-324 mx-auto object-cover h-397.5 -z-1"
      />

      <Hero />
      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-7.75 mt-20 sm:mt-32 lg:mt-87.25 px-4 lg:px-2">
        <div className="w-full">
          <Simple />

        </div>
        <div className="w-full">
          <Slider />
        </div>

      </section>
    </main>
  );
}