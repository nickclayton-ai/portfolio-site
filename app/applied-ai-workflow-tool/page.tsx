export default function AppliedAIWorkflowToolPage() {
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
          Workflow Augmentation
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          Applied AI Workflow Tool
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A practical tool for improving analyst workflow through AI-assisted
          processes, faster iteration, and scalable output.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Category
            </p>
            <p className="mt-3 text-lg text-white">Workflow Tool</p>
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
              Python · AI APIs · Workflow Automation
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
              Manual workflows often create bottlenecks in analysis, reduce
              consistency, and limit how quickly teams can move from inputs to
              usable outputs.
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
              This project explores how AI-assisted processes can augment human
              workflow, reduce repetitive effort, improve speed, and increase
              scalability while keeping humans in the loop for judgment and
              refinement.
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
              <li>Reduces repetitive manual effort</li>
              <li>Improves workflow speed and consistency</li>
              <li>Demonstrates practical human-AI collaboration</li>
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
              href="https://github.com/nickclayton-ai/applied-ai-workflow-tool"
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