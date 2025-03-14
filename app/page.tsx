import WaveBackground from "@/components/WaveBackground";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-white">
      {/* Framer Motion으로 움직이는 배경 */}
      <WaveBackground />

      {/* mix-blend-mode 적용한 텍스트 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mix-blend-overlay">
        <div className="text-[20rem] font-bold leading-none">WAVE</div>
        <div className="text-[20rem] font-bold leading-none">STUDIO</div>
      </div>
    </main>
  );
}
