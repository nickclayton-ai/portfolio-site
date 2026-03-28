export default function WritingPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="mb-10 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Home
        </a>

        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Writing
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Strategy, policy, and applied thinking
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Essays and analysis on technology, national security, decision-making,
          and building better systems under real-world constraints.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <a
            href="/writing/eppe-framework"
            className="writing-card block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Strategic Theory
            </p>
            <h3 className="mt-3 text-2xl font-medium">
              Ethically Principled Proportional Engagement (EPPE)
            </h3>
            <p className="mt-4 text-gray-400">
              A framework for balancing coercion, engagement, and optionality in
              strategic competition.
            </p>
          </a>

          <a
            href="/writing/ai-investment-strategy"
            className="writing-card block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Economic Strategy
            </p>
            <h3 className="mt-3 text-2xl font-medium">
              AI Investment and National Power
            </h3>
            <p className="mt-4 text-gray-400">
              Why long-term investment in AI and robotics is critical to
              maintaining global leadership.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}