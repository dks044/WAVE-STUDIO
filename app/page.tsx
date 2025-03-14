import WaveBackground from "@/components/WaveBackground";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-white">
      <WaveBackground />
      <WaveBackground classname="scale-120 wave two " />
      <WaveBackground classname="scale-150 wave three animate-pulse" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mix-blend-overlay">
        <div className="text-[20rem] font-bold leading-none">WAVE</div>
        <div className="text-[20rem] font-bold leading-none">STUDIO</div>
      </div>
    </main>
  );
}
