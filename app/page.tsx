import Header from "@/components/block/Header";
import Hero from "@/components/block/hero";
export default function Home() {
  return (
    <div
      className="h-[50vh] relative bg-gradient-to-b 
  from-[#FFD9B8] via-white to-white 
  dark:from-[#523435] dark:via-black dark:to-black"
    >
      <Header />
      <Hero />
    </div>
  );
}
