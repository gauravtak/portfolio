import { Link } from "react-router";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0b12] text-white">
      {/* --- Modern color snippet: subtle glow background --- */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-56 -top-56 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[140px]" />
        <div className="absolute -right-56 top-24 h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>

      {/* CENTERED PAGE */}
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* MAIN OUTER BOX — NO PADDING */}
        <div className="border border-white/10 bg-white/[0.02] overflow-hidden">
          {/* NAVBAR */}
          <Navbar />

          {/* CONTENT */}
          <section className="divide-y divide-white/10">
            {/* HERO ROW (Hero block + blank block in same row) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:divide-white/10">
              {/* HERO LEFT */}
              <div className="relative lg:col-span-8 bg-black/20 p-6">
                {/* thin accent bar */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-violet-400/70 to-cyan-300/50" />

                <p className="text-xs font-semibold tracking-[0.22em] text-white/45">
                  PORTFOLIO
                </p>

                <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Building{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-cyan-200 bg-clip-text text-transparent">
                    clean and scalable
                  </span>{" "}
                  web apps with modern stacks.
                </h1>

                <p className="mt-4 max-w-xl text-white/65 leading-relaxed">
                  I’m Gaurav Tak — a full-stack engineer focused on shipping fast,
                  maintainable products using React, Node.js, Nest.js, and cloud.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 border border-white/10 bg-gradient-to-r from-violet-500/90 to-cyan-400/70 px-5 py-3 text-sm font-semibold text-black hover:from-violet-400 hover:to-cyan-300 transition shadow-[0_12px_40px_rgba(124,58,237,0.20)]"
                  >
                    View Projects <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="https://drive.usercontent.google.com/u/0/uc?id=1m-z2ER1NHCWMao8jNVycddI-F3WNbpuK&export=download"
                    className="inline-flex items-center gap-2 border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/[0.04] hover:border-cyan-300/30 transition"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>

                <div className="mt-6 flex gap-2">
                  <a
                    href="https://github.com/gauravtak"
                    className="border border-white/10 bg-white/[0.03] p-3 text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-violet-400/30 transition"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaurav-tak-a4190222a/"
                    className="border border-white/10 bg-white/[0.03] p-3 text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-cyan-300/30 transition"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:gauravtak996@gmail.com"
                    className="border border-white/10 bg-white/[0.03] p-3 text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-violet-400/30 transition"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* BLANK RIGHT BLOCK */}
              <div className="relative lg:col-span-4 bg-black/20 p-6">
                {/* subtle gradient wash so it's not "dead" */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.07] via-transparent to-cyan-400/[0.06]" />
                <div className="relative">
                  {/* Intentionally blank */}
                </div>
              </div>
            </div>

            {/* FEATURED PROJECTS */}
            <div className="relative bg-black/20 p-6">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/[0.03] via-transparent to-cyan-400/[0.03]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white/80">
                    Featured Projects
                  </p>
                  <Link
                    to="/projects"
                    className="text-sm text-white/55 hover:text-white transition"
                  >
                    View all →
                  </Link>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2">
                  {[
                    { title: "Linktree Clone", desc: "Profile links + dashboard" },
                    { title: "Auth + RBAC", desc: "JWT auth + roles" },
                    { title: "API Platform", desc: "Clean backend architecture" },
                    { title: "Portfolio v2", desc: "Minimal boxed design" },
                  ].map((p, idx) => (
                    <div
                      key={p.title}
                      className={[
                        "p-4 bg-white/[0.03] transition",
                        "border-white/10 hover:border-violet-400/25 hover:bg-white/[0.05]",
                        idx % 2 === 1 ? "border-l" : "",
                        idx >= 2 ? "border-t" : "",
                      ].join(" ")}
                    >
                      <p className="font-semibold text-white/85">{p.title}</p>
                      <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STATS + CONTACT (same row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-white/10 sm:divide-y-0 sm:divide-x sm:divide-white/10">
              {/* QUICK STATS */}
              <div className="bg-black/20 p-6">
                <p className="text-sm font-semibold text-white/80">
                  Quick stats
                </p>

                <div className="mt-5 overflow-hidden border border-white/10">
                  {[
                    { label: "Experience", value: "1.5+" },
                    { label: "Projects", value: "5+" },
                    { label: "Tech", value: "15+" },
                    { label: "Status", value: "Open to work" },
                  ].map((s, i) => (
                    <div
                      key={s.label}
                      className={[
                        "bg-white/[0.03] p-4",
                        i !== 0 ? "border-t border-white/10" : "",
                      ].join(" ")}
                    >
                      <p className="text-xs text-white/50">{s.label}</p>
                      <p className="mt-2 text-2xl font-bold">{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-wide text-white/45">
                    STACK
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "NestJS",
                      "MongoDB",
                      "PostgreSQL",
                      "Docker",
                      "AWS",
                    ].map((t) => (
                      <span
                        key={t}
                        className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70 hover:border-cyan-300/25 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* LET'S WORK TOGETHER */}
              <div className="bg-black/20 p-6">
                <p className="text-sm font-semibold text-white/80">
                  Let’s work together
                </p>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  If you want a full-stack engineer who ships clean UI and
                  reliable backends, reach out.
                </p>

                <div className="mt-5 overflow-hidden border border-white/10">
                  <a
                    href="mailto:gauravtak996@gmail.com"
                    className="flex items-center gap-2 bg-white/[0.03] px-4 py-3 text-sm text-white/75 hover:text-white hover:bg-white/[0.06] hover:border-violet-400/20 transition"
                  >
                    <Mail className="h-4 w-4" />
                    Email me
                  </a>
                  <a
                    href="https://github.com/gauravtak"
                    className="flex items-center gap-2 border-t border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 hover:text-white hover:bg-white/[0.06] transition"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaurav-tak-a4190222a/"
                    className="flex items-center gap-2 border-t border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 hover:text-white hover:bg-white/[0.06] transition"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-black/20 px-5 py-4 text-sm text-white/50">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Gaurav Tak</p>
              <p className="text-white/40">Built with React + Tailwind</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;

