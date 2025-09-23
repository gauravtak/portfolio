import React from "react";
import { Link } from "react-router";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-teal/5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-lightgray">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
                  Gaurav Tak
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-lightgray/80 mb-8 max-w-3xl mx-auto">
                Full-Stack Software Engineer crafting digital experiences with
                <span className="text-purple font-semibold">
                  {" "}
                  modern technologies
                </span>{" "}
                and
                <span className="text-teal font-semibold">
                  {" "}
                  innovative solutions
                </span>
              </p>
            </div>

            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/projects"
                className="group bg-gradient-to-r from-purple to-purple/80 text-dark px-8 py-4 rounded-lg font-semibold hover:from-purple/90 hover:to-purple/70 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-purple/25"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1m-z2ER1NHCWMao8jNVycddI-F3WNbpuK&export=download"
                className="border-2 border-teal text-teal px-8 py-4 rounded-lg font-semibold hover:bg-teal hover:text-dark transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in">
              <a
                href="https://github.com/gauravtak"
                className="text-lightgray/60 hover:text-purple transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-tak-a4190222a/"
                className="text-lightgray/60 hover:text-purple transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:gauravtak996@gmail.com"
                className="text-lightgray/60 hover:text-purple transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-teal/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple/5 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-gradient-to-r from-dark to-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-lightgray mb-6">
                Passionate about <span className="text-purple">Innovation</span>
              </h2>
              <p className="text-lg text-lightgray/80 mb-6">
                With 1.5+ years of experience in full-stack development, I
                specialize in creating scalable web applications using modern
                technologies like React, Node.js, Angular, Nest.js, Python, Go
                and cloud platforms.
              </p>
              <Link
                to="/about"
                className="text-teal hover:text-teal/80 font-semibold flex items-center gap-2 transition-colors"
              >
                Learn more about me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple/10 p-6 rounded-lg border border-purple/20">
                <h3 className="text-2xl font-bold text-purple mb-2">5+</h3>
                <p className="text-lightgray/80">Projects Completed</p>
              </div>
              <div className="bg-teal/10 p-6 rounded-lg border border-teal/20">
                <h3 className="text-2xl font-bold text-teal mb-2">1.5+</h3>
                <p className="text-lightgray/80">Years Experience</p>
              </div>
              <div className="bg-purple/10 p-6 rounded-lg border border-purple/20">
                <h3 className="text-2xl font-bold text-purple mb-2">15+</h3>
                <p className="text-lightgray/80">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
