"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroInnerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const writingRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (navRef.current && heroInnerRef.current) {
        const heroChildren = Array.from(heroInnerRef.current.children);

        const tl = gsap.timeline();
        tl.fromTo(
          navRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        ).fromTo(
          heroChildren,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

if (heroRef.current) {
  const lines = gsap.utils.toArray<HTMLElement>(".hero-line");

  gsap.set(lines, { opacity: 0, y: 30 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroRef.current,
      start: "top top",
      end: "+=260%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  lines.forEach((line, index) => {
    tl.to(line, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    if (index !== lines.length - 1) {
      tl.to(line, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.inOut",
      }, "+=0.6");
    }
  });

  tl.to(lines[lines.length - 1], {
    opacity: 1,
    y: 0,
    duration: 0.4,
  });
}

      const sectionConfigs = [
        { ref: projectsRef, selector: ".project-card" },
        { ref: writingRef, selector: ".writing-card" },
        { ref: aboutRef, selector: ".about-copy" },
      ];

      sectionConfigs.forEach(({ ref, selector }) => {
        if (!ref.current) return;

        const items = ref.current.querySelectorAll(selector);
        if (!items.length) return;

        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-black text-white">
      <nav
        ref={navRef}
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">
            Nick Clayton
          </a>

          <div className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#writing" className="transition hover:text-white">
              Writing
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        ref={heroRef}
        className="flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div ref={heroInnerRef} className="max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Applied AI • Systems Thinking • Strategy
          </p>

<div className="relative mx-auto h-40 max-w-4xl md:h-48">
  <div className="hero-line absolute inset-0 flex items-center justify-center text-4xl font-semibold leading-tight md:text-6xl">
    I build systems.
  </div>
  <div className="hero-line absolute inset-0 flex items-center justify-center text-4xl font-semibold leading-tight md:text-6xl">
    I turn ambiguity into decisions.
  </div>
  <div className="hero-line absolute inset-0 flex items-center justify-center text-4xl font-semibold leading-tight md:text-6xl">
    I create measurable outcomes.
  </div>
</div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A portfolio of applied AI projects, strategic thought, and public writing.
          </p>
        </div>
      </section>

      <section id="projects" ref={projectsRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Selected Work
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Projects
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-gray-400">
              Public, unclassified projects translating real-world problem
              solving into technical artifacts, prototypes, and case studies.
            </p>
          </div>

          <div className="grid gap-6">
<a
  href="/entity-discovery-engine"
  className="project-card block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
>
  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
    Applied AI / Data Systems
  </p>
  <h3 className="mt-3 text-2xl font-medium">
    Entity Discovery Engine
  </h3>
  <p className="mt-4 max-w-3xl text-gray-400">
    A machine learning–enabled workflow for identifying patterns,
    clustering related entities, and surfacing hidden relationships
    in large datasets.
  </p>
</a>

<a
  href="/operational-decision-dashboard"
  className="project-card block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
>
  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
    Decision Support
  </p>
  <h3 className="mt-3 text-2xl font-medium">
    Operational Decision Dashboard
  </h3>
  <p className="mt-4 max-w-3xl text-gray-400">
    A dashboard concept designed to transform fragmented information
    into clear insight for faster, better-informed decisions.
  </p>
</a>

<a
  href="/applied-ai-workflow-tool"
  className="project-card block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
>
  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
    Workflow Augmentation
  </p>
  <h3 className="mt-3 text-2xl font-medium">
    Applied AI Workflow Tool
  </h3>
  <p className="mt-4 max-w-3xl text-gray-400">
    A practical tool for improving analyst workflow through AI-assisted
    processes, faster iteration, and scalable output.
  </p>
</a>
          </div>
        </div>
      </section>

      <section id="writing" ref={writingRef} className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Writing
          </p>
<h2 className="mt-2 text-3xl font-semibold md:text-4xl">
  <a href="/writing" className="transition hover:text-gray-300">
    Strategy, policy, and thought leadership
  </a>
</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="writing-card rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-medium">Strategic Analysis</h3>
              <p className="mt-4 text-gray-400">
                Essays and analysis on competition, coercion, innovation, and
                the changing strategic environment.
              </p>
            </article>

            <article className="writing-card rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-medium">Policy Writing</h3>
              <p className="mt-4 text-gray-400">
                Research-driven work connecting technology, economic security,
                and national strategy.
              </p>
            </article>

            <article className="writing-card rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-medium">Innovation Thinking</h3>
              <p className="mt-4 text-gray-400">
                Public reflections on building better systems, applied AI, and
                solving hard problems under real-world constraints.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            How I think
          </h2>

          <div className="about-copy mt-10 max-w-4xl space-y-6 text-lg leading-8 text-gray-400">
            <p>
              I start with the decision that needs to be made, then work backward
              to design the data, workflow, and system required to support it.
            </p>
            <p>
              I prefer problems with ambiguity, constraints, and incomplete
              information. Those conditions are where good systems, sound judgment,
              and clear communication matter most.
            </p>
            <p>
              I measure technical work by outcomes: time saved, risk reduced,
              insight generated, and capability created.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Contact
            </p>
            <p className="mt-2 text-gray-400">
              GitHub • LinkedIn • Resume • Email
            </p>
          </div>

          <div className="text-sm text-gray-500">
            Portfolio shell in progress
          </div>
        </div>
      </footer>
    </main>
  );
}