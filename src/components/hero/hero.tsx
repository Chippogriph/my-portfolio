import { assetPath } from "@/lib/assetPath";

export default function Hero() {
  return (
    <div className="hero-container" style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(255, 168, 76, 0.6) 0%,
        rgba(255, 246, 239, 0.6) 100%
      ),
      url("${assetPath("/hero-bg.jpg")}")
    `,
  }}>
      <div className="max-w-2xl flex flex-col">
        <h1 className="text-5xl font-extrabold mb-2">Christoffer Persson</h1>
        <span className="w-20 p-0.5 bg-dark-terracotta"></span>
        <p className="text-3xl font-semibold">Webbutvecklare med fokus på frontend och tillgänglighet</p>
      </div>

      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three"></div>
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four"></div>
      </div>
    </div>
  );
}
