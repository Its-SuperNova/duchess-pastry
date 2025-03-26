import Header from "@/components/block/Header";
import Hero from "@/components/block/hero";
export default function Home() {
  return (
    <div
      className="h-[90vh] relative bg-gradient-to-b 
  from-pink-200 via-white to-white 
  dark:from-[#551e4a] dark:via-black dark:to-black"
    >
      <Header />
      <Hero />
    </div>
  );
}
