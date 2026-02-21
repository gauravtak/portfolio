import ExperienceTimeline from "../components/ExperienceTimeline";
import { Code, Database, Globe, Smartphone, Workflow } from "lucide-react";
import Navbar from "../components/Navbar";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "Angular"],
    },
    {
      category: "Backend",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Node.js", "Nest.js", "Python", "Go"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native"],
    },
    {
      category: "DevOps",
      icon: <Workflow className="w-6 h-6" />,
      technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0b12] text-white">
      {/* subtle background glow (same as Home/Projects) */}
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
            {/* ABOUT HEADER BLOCK */}
            <div className="relative bg-black/20 p-6">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-violet-400/60 to-cyan-300/40" />
              <p className="text-xs font-semibold tracking-[0.22em] text-white/45">
                ABOUT
              </p>
              <h1 className="mt-3 text-2xl sm:text-3xl font-bold">
                About Me
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                I’m a passionate software engineer with a love for creating
                innovative solutions and building exceptional digital
                experiences.
              </p>
            </div>

            {/* BIO BLOCK */}
            <div className="bg-black/20 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:divide-white/10">
                {/* Text */}
                <div className="p-4">
                  <p className="text-white/80 leading-relaxed mb-4">
                    I began my journey in software development with an
                    Undergraduate in Computer Science. Over the past few years, I’ve
                    gained hands-on experience as a full-stack software engineer,
                    working with startups and enterprise teams at Truss Studios and
                    Wisflux (Awarion). Beyond professional projects, I’ve built
                    developer tools such as Squeez and CCWC. I believe in writing
                    clean, maintainable code, following best practices.
                  </p>

                  <p className="text-white/80 leading-relaxed mb-4">
                    I specialize in modern web technologies, with expertise in
                    TypeScript, Python, Go, and frameworks like React, Angular,
                    Nest.js, and Node.js. My work spans building scalable
                    full-stack applications and optimizing performance.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    When I'm not coding, you can find me exploring new
                    technologies, reading books, and
                    making music.
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="bg-black/20 p-4">
                  <h3 className="text-lg font-bold text-white/80 mb-3">
                    Quick Facts
                  </h3>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                      📍 Based in Jaipur, Rajasthan
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
                      🎓 B.Tech in Computer Science and Engineering
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                      💼 2+ Years Experience
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
                      🌟 Full-Stack Engineer
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                      ☕ Reading and Music Enthusiast
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SKILLS BLOCK */}
            <div className="bg-black/20 p-6">
              <p className="text-lg font-semibold text-white/80 mb-4 text-center">
                Technical Skills
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white/10">
                {skills.map((skill, idx) => (
                  <div key={idx} className="bg-black/20 p-4">
                    <div className="text-violet-400 mb-4">{skill.icon}</div>
                    <h3 className="text-md font-bold text-white/90 mb-2">
                      {skill.category}
                    </h3>
                    <ul className="text-white/65 text-sm space-y-1">
                      {skill.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE TIMELINE BLOCK */}
            <div className="bg-black/20 p-6">
              <p className="text-lg font-semibold text-white/80 text-center mb-4">
                Professional Experience
              </p>
              <ExperienceTimeline />
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-black/20 px-5 py-4 text-sm text-white/50">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Gaurav Tak</p>
              <p className="text-white/40">About</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;

