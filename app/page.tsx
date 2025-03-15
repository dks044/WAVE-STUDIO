import WaveBackground from "@/components/WaveBackground";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-white ">
      <WaveBackground classname="scale-140 sm:scale-100 wave one" />
      <WaveBackground classname="scale-180 sm:scale-120 wave two " />
      <WaveBackground classname="scale-300 sm:scale-150 wave three animate-pulse" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mix-blend-overlay">
        <div className="text-[7.5rem] sm:text-[20rem] font-bold leading-none">
          WAVE
        </div>
        <WaveBackground classname="scale-300 sm:scale-200 wave three" />
        <div className="text-[7rem] sm:text-[20rem] font-bold leading-none ">
          STUDIO
        </div>
      </div>
    </main>
  );
}
