import ExperienceTimeline from "../components/ExperienceTimeline";
import { Code, Database, Globe, Smartphone, Workflow } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "Angular", "Tailwind CSS"],
      color: "purple",
    },
    {
      category: "Backend",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Node.js", "Nest.js", "Python", "Go", "Kafka"],
      color: "teal",
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Postgres", "MongoDB", "Redis"],
      color: "purple",
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native"],
      color: "teal",
    },
    {
      category: "DevOps",
      icon: <Workflow className="w-6 h-6" />,
      technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-lightgray mb-6">
            About <span className="text-purple">Me</span>
          </h1>
          <p className="text-xl text-lightgray/80 max-w-3xl mx-auto">
            I'm a passionate software engineer with a love for creating
            innovative solutions and building exceptional digital experiences.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-lightgray mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-lightgray/80">
              <p>
                I began my journey in software development with a Undergraduate
                in Computer Science. Over the past few years, I’ve gained
                hands-on experience as a full-stack software engineer, working
                with startups and enterprise teams at Truss Studios and Wisflux
                (Awarion). Beyond professional projects, I’ve built developer
                tools such as Squeez, a file compression utility in Go, and
                CCWC, a Unix-like word count tool in Rust. I believe in writing
                clean, maintainable code, following best practices,
              </p>
              <p>
                I specialize in modern web technologies, with expertise in
                TypeScript, Python, Go, and frameworks like React, Angular,
                Nest.js, and Node.js. My work spans building scalable full-stack
                applications, integrating secure authentication systems,
                optimizing performance
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to projects, reading books and making music.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple/10 to-teal/10 p-8 rounded-lg border border-purple/20">
            <h3 className="text-2xl font-bold text-lightgray mb-6">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-lightgray/80">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple rounded-full"></span>
                📍 Based in Jaipur, Rajasthan
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-teal rounded-full"></span>
                🎓 Computer Science Degree
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple rounded-full"></span>
                💼 1.5+ Years Experience
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-teal rounded-full"></span>
                🌟 Full-Stack Engineer
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple rounded-full"></span>☕
                Reading and Music Enthusiast
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-lightgray text-center mb-12">
            Technical <span className="text-teal">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${
                  skill.color === "purple"
                    ? "from-purple/10 to-purple/5 border-purple/20"
                    : "from-teal/10 to-teal/5 border-teal/20"
                } p-6 rounded-lg border hover:scale-105 transition-transform duration-300`}
              >
                <div className={`text-${skill.color} mb-4`}>{skill.icon}</div>
                <h3 className="text-xl font-bold text-lightgray mb-4">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-lightgray/80 text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-lightgray text-center mb-12">
            Professional <span className="text-purple">Experience</span>
          </h2>
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
};

export default About;
