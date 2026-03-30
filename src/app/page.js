
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative w-full max-w-324 mx-auto">
      <img
        src="/assets/bg-img.webp"
        alt="bg-img"
        className="w-full  hidden lg:block object-cover h-397.5" />
      <Hero />
    </div>
  );
}