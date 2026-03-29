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
          A machine learning-enabled workflow for identifying patterns,
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

<section className="mt-16">
  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          System View
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          End-to-end workflow architecture
        </h2>
      </div>

      <p className="max-w-2xl text-sm leading-7 text-gray-400">
        A simplified public view of how the system moves from fragmented inputs
        to machine-assisted discovery and human-reviewed outputs.
      </p>
    </div>

    <div className="mt-10 grid gap-4 md:grid-cols-5 md:items-center">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Input
        </p>
        <h3 className="mt-3 text-lg font-medium text-white">Data Sources</h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Structured and semi-structured records
        </p>
      </div>

      <div className="hidden text-center text-2xl text-gray-600 md:block">→</div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Processing
        </p>
        <h3 className="mt-3 text-lg font-medium text-white">
          Feature Structuring
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Normalize and prepare data for analysis
        </p>
      </div>

      <div className="hidden text-center text-2xl text-gray-600 md:block">→</div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Model
        </p>
        <h3 className="mt-3 text-lg font-medium text-white">
          Clustering Engine
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Group related records and surface candidates
        </p>
      </div>
    </div>

    <div className="mt-4 grid gap-4 md:grid-cols-5 md:items-center">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center md:col-start-2">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Human-in-the-loop
        </p>
        <h3 className="mt-3 text-lg font-medium text-white">Analyst Review</h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Validate, refine, and prioritize results
        </p>
      </div>

      <div className="hidden text-center text-2xl text-gray-600 md:block">→</div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center md:col-span-2">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Output
        </p>
        <h3 className="mt-3 text-lg font-medium text-white">
          Actionable Discovery
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Machine-prioritized candidates that support faster insight and better
          decision-making
        </p>
      </div>
    </div>
  </div>
  
</section>
        <section className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Workflow
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  How the system works
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-gray-400">
                The public version demonstrates the core logic of the workflow:
                structure data, group related records, prioritize candidate
                relationships, and support human review.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Step 1
                </p>
                <h3 className="mt-3 text-lg font-medium text-white">Ingest</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Load structured or semi-structured data from multiple sources
                  into a consistent analysis-ready format.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Step 2
                </p>
                <h3 className="mt-3 text-lg font-medium text-white">Cluster</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Apply clustering and pattern-recognition methods to group
                  related records and surface potentially meaningful
                  relationships.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Step 3
                </p>
                <h3 className="mt-3 text-lg font-medium text-white">Review</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Present machine-prioritized candidates for human review,
                  validation, and refinement.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Step 4
                </p>
                <h3 className="mt-3 text-lg font-medium text-white">Output</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Convert raw data into more actionable insight while reducing
                  manual search effort and improving discovery speed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
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
              <li>Reduces time-to-discovery compared with manual review</li>
              <li>Supports more scalable analysis across larger datasets</li>
              <li>Transforms fragmented data into more actionable insight</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Impact
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-semibold text-white">Faster</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Designed to reduce time-to-discovery relative to analyst-only
                workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-semibold text-white">Scalable</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Extends review capacity beyond what manual search alone can
                sustain.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-semibold text-white">Actionable</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Produces machine-prioritized candidates to support faster human
                judgment.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Public Version
            </p>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-300">
              This public project is a sanitized demonstration designed to show
              the core logic, workflow, and product thinking of the system
              without exposing sensitive context, data, or implementation
              details.
            </p>
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