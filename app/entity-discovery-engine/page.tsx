export default function EntityDiscoveryEnginePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="mb-10 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Home
        </a>

        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Applied AI / Data Systems
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          Entity Discovery Engine
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A machine learning–enabled workflow for identifying patterns,
          clustering related entities, and surfacing hidden relationships in
          large datasets.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Category
            </p>
            <p className="mt-3 text-lg text-white">Project Case Study</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Status
            </p>
            <p className="mt-3 text-lg text-white">In Progress</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Stack
            </p>
            <p className="mt-3 text-lg text-white">
              Python · scikit-learn · pandas
            </p>
          </div>
        </div>

        <section className="mt-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Problem
            </p>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-300">
              Traditional analysis workflows often require substantial manual
              effort to identify relationships across large, fragmented, and
              messy datasets. That slows discovery, limits scale, and makes it
              harder to generate timely insight.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Approach
            </p>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-300">
              This project uses clustering and pattern-recognition methods to
              group related data points, highlight potentially meaningful
              relationships, and support faster discovery in large data
              environments. The public version is intentionally simplified and
              uses synthetic or non-sensitive data.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Outcomes
            </p>
          </div>

          <div>
            <ul className="space-y-4 text-lg leading-8 text-gray-300">
              <li>Improves speed of discovery versus manual workflows</li>
              <li>Supports more scalable analysis across larger datasets</li>
              <li>Transforms raw data into more actionable insight</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Repository
            </p>
          </div>

          <div>
            <a
              href="https://github.com/nickclayton-ai/entity-discovery-engine"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              View GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}