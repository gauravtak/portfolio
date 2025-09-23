import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Wisflux Pvt. Ltd. (Awarion)",
      period: "Feb 2025 – Present",
      description:
        "Maintaining and enhancing Junction, a digital marketplace platform for programmatic DOOH campaigns. Improved system performance, ensured scalability, and collaborated with cross-functional teams in an agile environment. Actively contributed to code reviews, debugging, and client-facing sprint demos.",
      technologies: [
        "TypeScript",
        "Angular",
        "Nest.js",
        "PostgreSQL",
        "Redis",
        "Kafka",
        "Docker",
        "Kubernetes",
        "AWS",
      ],
    },
    {
      title: "Full-Stack Software Engineer",
      company: "Truss Studios",
      period: "Jan 2024 – Feb 2025",
      description:
        "Developed and maintained responsive web applications in collaboration with UI/UX teams. Implemented OAuth 2.0 authentication with Google and LinkedIn, integrated RESTful APIs, and optimized client-server interactions. Automated CI/CD pipelines with GitHub Actions and deployed scalable services on Google Compute Engine.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "GCE"],
    },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start space-x-8">
            {/* Timeline dot */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-purple rounded-full border-4 border-dark">
              <div className="w-6 h-6 bg-teal rounded-full"></div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-gradient-to-br from-purple/10 to-teal/5 p-6 rounded-lg border border-purple/20 hover:border-purple/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-lightgray">
                  {exp.title}
                </h3>
                <span className="text-teal font-semibold">{exp.period}</span>
              </div>

              <h4 className="text-lg text-purple font-semibold mb-3">
                {exp.company}
              </h4>

              <p className="text-lightgray/80 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple/20 text-purple text-sm rounded-full border border-purple/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
