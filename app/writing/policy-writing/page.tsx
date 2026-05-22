export default function PolicyWritingPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
<div className="mx-auto max-w-5xl">

  <a
    href="/writing"
    className="mb-10 inline-block text-sm text-gray-400 transition hover:text-white"
  >
    ← Back to Writing
  </a>

  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Writing
        </p>

        <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
          Policy Writing
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Research-driven work connecting technology, economic security,
          strategic competition, and national policy.
        </p>

        <div className="mt-16 grid gap-6">

          <a
            href="/writing/policy-writing/eppe-framework"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Strategic Policy
            </p>

            <h2 className="mt-3 text-2xl font-medium">
              EPPE Framework
            </h2>

            <p className="mt-4 max-w-3xl text-gray-400">
              A proposed framework for ethically principled proportional
              engagement in long-term strategic competition.
            </p>
          </a>

        </div>
      </div>
    </main>
  );
}