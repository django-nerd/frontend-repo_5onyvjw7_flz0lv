export default function Features() {
  const items = [
    { title: 'Carbon Fiber Weave', desc: 'Ultra-lightweight, aerospace-grade texture for an unmistakable performance look.' },
    { title: 'Matte Black Finish', desc: 'A deep, stealth sheen that absorbs light and turns heads.' },
    { title: 'Red Glow Aesthetic', desc: 'Interior accents pulse with a futuristic crimson ambiance.' },
  ];

  return (
    <section id="specs" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Designed to Dominate</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Built for speed, shot for style. Every angle crafted to capture attention in under 3 seconds.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
