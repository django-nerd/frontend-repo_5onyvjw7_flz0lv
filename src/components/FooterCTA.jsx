export default function FooterCTA() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-white/60">BMW Carbon Fiber Black</p>
        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Own the Night. Capture the Scroll.</h3>
        <p className="mt-2 text-white/70">Get the asset pack with logo lockups, motion cues, and color grading LUTs.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200">Download Pack</a>
          <a href="#" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40">Contact Studio</a>
        </div>
        <p className="mt-8 text-xs text-white/50">Visual concept inspired by a sleek, dark gray sports car with glowing red interior lights.</p>
      </div>
    </footer>
  );
}
