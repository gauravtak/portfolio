import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Squeez",
      description:
        "A command-line file compression tool written in Go that implements the Huffman coding algorithm. It compresses text-based files into smaller binary representations while preserving data integrity. Features a simple CLI for both compression and decompression, making it useful for systems programming and data processing pipelines.",
      image:
        "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=600", // placeholder
      technologies: ["Go", "CLI", "Huffman Coding", "File Compression"],
      github: "https://github.com/gauravtak/CodingChallenges/tree/main/squeez", // replace with actual repo if available
      demo: "",
      featured: true,
    },
    {
      title: "CCWC",
      description:
        "A command-line utility written in Rust that replicates the functionality of the classic Unix wc (word count) tool. It efficiently computes and displays the number of lines, words, bytes, and characters in files or input streams.",
      image:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600", // placeholder
      technologies: ["Rust", "CLI", "Unix Tools", "File Processing"],
      github: "https://github.com/gauravtak/CodingChallenges/tree/main/ccwc", // replace with actual repo if available
      demo: "",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-lightgray mb-6">
            My <span className="text-purple">Projects</span>
          </h1>
          <p className="text-xl text-lightgray/80 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in
            full-stack development, UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-lightgray mb-12 text-center">
            Featured <span className="text-teal">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple/10 to-teal/5 rounded-lg overflow-hidden border border-purple/20 hover:border-purple/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-lightgray mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lightgray/80 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple/20 text-purple text-sm rounded-full border border-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-lightgray hover:text-purple transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-lightgray mb-12 text-center">
            Other <span className="text-purple">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple/5 to-teal/5 rounded-lg overflow-hidden border border-purple/10 hover:border-purple/30 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-lightgray mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lightgray/70 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple/10 text-purple text-xs rounded border border-purple/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-lightgray/60 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-lightgray/80 hover:text-purple transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-teal hover:text-teal/80 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
