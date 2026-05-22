export default function EPPEPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <a
          href="/writing"
          className="mb-10 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Writing
        </a>

        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Strategic Theory
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          Ethically Principled Proportional Engagement (EPPE)
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          A framework for aligning ethical constraints with strategic outcomes,
          emphasizing proportionality, engagement, and preservation of
          long-term optionality.
        </p>

        <div className="mt-12 space-y-8 text-lg leading-8 text-gray-300">
          <p>
            Modern strategic competition often defaults to escalation or
            disengagement. Both approaches can reduce optionality and create
            long-term instability.
          </p>

          <p>
            EPPE proposes a middle path: calibrated, principled engagement that
            maintains leverage while avoiding unnecessary escalation.
          </p>

          <p>
            The framework emphasizes three core elements:
          </p>

          <ul className="space-y-4">
            <li>Principled: aligned with stated values and legitimacy</li>
            <li>Proportional: calibrated to avoid escalation traps</li>
            <li>Engaged: maintains presence and influence</li>
          </ul>

          <p>
            This approach treats optionality as a form of strategic capital,
            preserving future choices while still shaping present outcomes.
          </p>
        </div>
      </div>
    </main>
  );
}