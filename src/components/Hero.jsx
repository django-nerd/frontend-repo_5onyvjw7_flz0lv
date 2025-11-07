import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient + noise overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-16 sm:px-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <span className="text-sm text-white/80">Carbon Fiber Edition</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Carbon Fiber Black BMW
        </h1>
        <p className="mt-3 max-w-xl text-white/80 sm:text-lg">
          A sleek, low-slung silhouette with glowing crimson interior. Built for
          thrill. Shot for shorts. Engineered to move you.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#reel"
            className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
          >
            Watch the 15s Short
          </a>
          <a
            href="#specs"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40"
          >
            Explore Specs
          </a>
        </div>
      </div>
    </section>
  );
}
