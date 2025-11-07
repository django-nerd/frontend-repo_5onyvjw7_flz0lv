export default function PromoReel() {
  return (
    <section id="reel" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">15-Second Shorts Cut</h2>
            <p className="mt-3 text-white/70">
              Fast cuts. Low angles. Rolling fog. Showcase the carbon weave, the red-glow cabin, and the matte-black menace.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• 0-3s: Logo sting + headlight flare</li>
              <li>• 4-8s: Side pan across carbon fiber texture</li>
              <li>• 9-12s: Interior red lighting reveal</li>
              <li>• 13-15s: Full profile + call to action</li>
            </ul>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-transparent" />
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://cdn.coverr.co/videos/coverr-burnout-3710/1080p.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
