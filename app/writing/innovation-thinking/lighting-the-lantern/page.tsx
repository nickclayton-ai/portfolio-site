export default function LightingTheLanternPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/writing/innovation-thinking"
          className="mb-10 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Innovation Thinking
        </a>

        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Innovation Thinking
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          Lighting the Lantern
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">
          Norwich University Reveille | 2026
        </p>

        <p className="mt-8 text-lg leading-8 text-gray-400">
          A published leadership reflection on service, resilience, innovation,
          and purpose-driven leadership. The essay connects the symbolism of
          lighting a path forward with the responsibility to build better
          systems, support others, and turn hard-earned experience into future
          impact.
        </p>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-medium text-white">Core Themes</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-medium text-white">Service</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Leadership as a responsibility to help others move forward.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white">Resilience</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Turning adversity, pressure, and uncertainty into growth.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white">Innovation</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Building better systems by carrying lessons forward into action.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-medium text-white">
            Why It Belongs Here
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            This piece reflects the same philosophy behind my technical and
            strategic work: start with purpose, solve hard problems, and build
            systems that help people make better decisions under real-world
            constraints.
          </p>
        </section>

        <div className="mt-10">
          <a
            href="https://www.norwich.edu/news/lighting-lantern"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl border border-white/20 px-6 py-3 text-sm text-white transition hover:border-white hover:bg-white/5"
          >
            Read the published article at Norwich University →
          </a>
        </div>
      </div>
    </main>
  );
}