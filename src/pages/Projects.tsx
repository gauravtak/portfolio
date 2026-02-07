import { Github } from "lucide-react";
import Navbar from "../components/Navbar";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Squeez",
      description:
        "A command-line file compression tool written in Go that implements the Huffman coding algorithm. It compresses text-based files into smaller binary representations while preserving data integrity. Features a simple CLI for both compression and decompression, making it useful for systems programming and data processing pipelines.",
      technologies: ["Go", "CLI", "Huffman Coding", "File Compression"],
      github: "https://github.com/gauravtak/CodingChallenges/tree/main/squeez",
    },
    {
      title: "CCWC",
      description:
        "A command-line utility written in Rust that replicates the functionality of the classic Unix wc (word count) tool. It efficiently computes and displays the number of lines, words, bytes, and characters in files or input streams.",
      technologies: ["Rust", "CLI", "Unix Tools", "File Processing"],
      github: "https://github.com/gauravtak/CodingChallenges/tree/main/ccwc",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0b12] text-white">
      {/* subtle background glow (same as Home) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-56 -top-56 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[140px]" />
        <div className="absolute -right-56 top-24 h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>

      {/* CENTERED PAGE */}
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* MAIN OUTER BOX */}
        <div className="border border-white/10 bg-white/[0.02] overflow-hidden">
          {/* NAVBAR */}
          <Navbar />

          {/* CONTENT */}
          <section className="divide-y divide-white/10">
            {/* PAGE TITLE (simple, not hero) */}
            <div className="relative bg-black/20 p-6">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-violet-400/60 to-cyan-300/40" />
              <p className="text-xs font-semibold tracking-[0.22em] text-white/45">
                PROJECTS
              </p>
              <h1 className="mt-3 text-2xl sm:text-3xl font-bold">
                Things I’ve built
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                A collection of projects that highlight backend engineering,
                systems work, and clean UI. Every project is shown in its own
                dedicated block.
              </p>
            </div>

            {/* PROJECT LIST (no sections) */}
            <div className="bg-black/20">
              <div className="divide-y divide-white/10">
                {projects.map((project) => (
                  <ProjectBlock key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-black/20 px-5 py-4 text-sm text-white/50">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Gaurav Tak</p>
              <p className="text-white/40">Projects</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Projects;

/* ------------------------------- */
/* Project Block Component         */
/* ------------------------------- */

function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1">
      {/* Content */}
      <div className="lg:col-span-8 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-row gap-2">
              <a href={project.github}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 border border-white/10 bg-white/[0.03] p-3 text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-violet-400/30 transition"
                aria-label={`Open ${project.title} on GitHub`}
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <h3 className="text-lg sm:text-xl font-bold text-white/90">
                {project.title}
              </h3>
            </div>
            <p className="mt-3 text-sm text-white/65 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70 hover:border-cyan-300/25 transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

