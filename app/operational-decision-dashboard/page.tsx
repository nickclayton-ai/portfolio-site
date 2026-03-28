export default function OperationalDecisionDashboardPage() {
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
          Decision Support
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          Operational Decision Dashboard
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A dashboard concept designed to transform fragmented information into
          clear insight for faster, better-informed decisions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Category
            </p>
            <p className="mt-3 text-lg text-white">Dashboard Concept</p>
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
              Python · Streamlit · pandas
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
              Decision-makers often have to pull information from multiple
              disconnected sources, creating friction and slowing the ability
              to act quickly with confidence.
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
              This project explores a dashboard-centered approach for aggregating
              fragmented inputs, organizing them into a usable structure, and
              presenting key insights in a way that improves clarity and speed of
              decision-making.
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
              <li>Brings fragmented information into a single view</li>
              <li>Improves clarity for faster decisions</li>
              <li>Demonstrates product thinking around decision support</li>
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
              href="https://github.com/nickclayton-ai/operational-decision-dashboard"
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