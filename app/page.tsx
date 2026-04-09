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

if (heroRef.current && heroInnerRef.current) {
  const line1 = heroInnerRef.current.querySelector(".hero-line-1");
  const line2 = heroInnerRef.current.querySelector(".hero-line-2");
  const line3 = heroInnerRef.current.querySelector(".hero-line-3");
  const image = heroInnerRef.current.querySelector(".hero-image");
  const subtitle = heroInnerRef.current.querySelector(".hero-subtitle");

  gsap.set([line1, line2, line3, image, subtitle], {
    opacity: 0,
    y: 30,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroRef.current,
      start: "top top",
      end: "+=220%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to([line1, image], {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
  })
    .to(
      line2,
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
      },
      "+=0.35"
    )
    .to(
      line3,
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
      },
      "+=0.35"
    )
    .to(
      subtitle,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "+=0.25"
    );
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
<div
  ref={heroInnerRef}
  className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"
>
  <div className="text-left">
    <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
      AI · Systems · Strategy
    </p>

    <div className="mt-4 space-y-4">
      <div className="hero-line hero-line-1 text-4xl font-semibold leading-tight text-white md:text-6xl">
        Building systems
      </div>

      <div className="hero-line hero-line-2 text-4xl font-semibold leading-tight text-white md:text-6xl">
        that turn complexity
      </div>

      <div className="hero-line hero-line-3 text-4xl font-semibold leading-tight text-white md:text-6xl">
        into decision advantage.
      </div>
    </div>

    <p className="hero-subtitle mt-6 max-w-xl text-lg leading-8 text-gray-400">
      I design and deploy data-driven tools that transform fragmented
      information into actionable insight—bridging AI, operations, and
      strategy.
    </p>
  </div>

  <div className="flex justify-center md:justify-end">
    <img
      src="/headshot.png"
      alt="headshot"
      className="hero-image h-64 w-64 rounded-2xl border border-white/10 object-cover md:h-80 md:w-80"
    />
  </div>
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
  className="project-card project-glow block rounded-3xl"
>
  <div className="project-glow-inner rounded-3xl p-8">
    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
      Applied AI / Data Systems
    </p>
    <h3 className="mt-3 text-2xl font-medium">
      Entity Discovery Engine
    </h3>
    <p className="mt-4 max-w-3xl text-gray-400">
      A machine learning-enabled workflow for identifying patterns,
      clustering related entities, and surfacing hidden relationships
      in large datasets.
    </p>
  </div>
</a>

<a
  href="/operational-decision-dashboard"
  className="project-card project-glow block rounded-3xl"
>
  <div className="project-glow-inner rounded-3xl p-8">
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
  </div>
</a>
<a
  href="/applied-ai-workflow-tool"
  className="project-card project-glow block rounded-3xl"
>
  <div className="project-glow-inner rounded-3xl p-8">
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
  </div>
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
            Who I am, how I think, and why I do this
          </h2>

          <div className="mt-16 grid gap-12">
            <section className="about-copy grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Who I Am
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  An operator, builder, and strategic thinker focused on solving hard problems
                </h3>

                <div className="mt-6 space-y-6 text-lg leading-8 text-gray-400">
                  <p>
                    I am a transitioning intelligence and technical program leader focused on
                    applied AI, systems integration, and strategic problem-solving. My background
                    sits at the intersection of operations, analysis, and innovation—building
                    tools and workflows that turn fragmented information into decisions,
                    capability, and measurable outcomes.
                  </p>

                  <p>
                    I have worked in environments defined by ambiguity, pressure, and incomplete
                    information. That experience shaped how I approach technology: not as an end
                    in itself, but as a way to improve judgment, speed, and real-world
                    effectiveness.
                  </p>

                  <p>
                    Today, I am translating that experience into public, unclassified work across
                    defense tech, strategy, and innovation.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                  <img
                    src="/sere-graduation.jpg"
                    alt="Service photo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="about-copy grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  How I Think
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Start with the decision, then build backward from what it takes to support it
                </h3>

                <div className="mt-6 space-y-6 text-lg leading-8 text-gray-400">
                  <p>
                    I start with the decision that needs to be made. From there, I work backward
                    to identify the data, workflow, and system needed to support it.
                  </p>

                  <p>
                    I prefer problems with ambiguity, constraints, and incomplete information,
                    because those are the conditions where clear thinking, sound systems, and
                    good judgment matter most.
                  </p>

                  <p>
                    I measure technical work by outcomes: time saved, insight generated, risk
                    reduced, and capability created.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Process
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-4 md:items-center">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Step 1
                    </p>
                    <h4 className="mt-3 text-lg font-medium text-white">
                      Decision
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Define the decision that actually matters
                    </p>
                  </div>

                  <div className="hidden text-center text-2xl text-gray-600 md:block">
                    →
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Step 2
                    </p>
                    <h4 className="mt-3 text-lg font-medium text-white">
                      Data
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Structure the inputs needed to support it
                    </p>
                  </div>

                  <div className="hidden text-center text-2xl text-gray-600 md:block">
                    →
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Step 3
                    </p>
                    <h4 className="mt-3 text-lg font-medium text-white">
                      System
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Build the workflow or tool that creates leverage
                    </p>
                  </div>

                  <div className="hidden text-center text-2xl text-gray-600 md:block">
                    →
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center md:col-span-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Step 4
                    </p>
                    <h4 className="mt-3 text-lg font-medium text-white">
                      Outcome
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Measure results in speed, insight, and capability
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-copy rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-10 md:px-10 md:py-12">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Why I Do This
              </p>

              <h3 className="mt-3 max-w-4xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                To solve the impossible, so that we build a better future
              </h3>

              <div className="mt-6 max-w-4xl space-y-6 text-lg leading-8 text-gray-400">
                <p>
                  I am driven by hard problems—especially the kind that sit between technology,
                  people, and strategy. The work that matters most to me is the work that creates
                  real leverage: better systems, better decisions, and better futures.
                </p>

                <p>
                  That idea sits underneath everything on this site, from technical projects to
                  strategic writing. I am most energized by work that turns complexity into
                  clarity and ideas into capability.
                </p>

                <p>
                  In practice, that means building things that are useful, thoughtful, and
                  grounded in reality—work that does more than sound good on paper.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

<footer id="contact" className="border-t border-white/10 px-6 py-10">
  <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
        Contact
      </p>

      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-300">
        <a
          href="https://github.com/nickclayton-ai"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nick-clayton5"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="transition hover:text-white"
        >
          Resume
        </a>

        <a
          href="mailto:nickclayton5@gmail.com"
          className="transition hover:text-white"
        >
          Email
        </a>
      </div>
    </div>

    <div className="text-sm text-gray-500">
      Built with Next.js · Deployed on Vercel
    </div>
  </div>
</footer>
    </main>
  );
}