import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-lightgray mb-6">
            Get In <span className="text-purple">Touch</span>
          </h1>
          <p className="text-xl text-lightgray/80 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-lightgray mb-8">
              Let's <span className="text-teal">Connect</span>
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-lightgray">
                    Email
                  </h3>
                  <p className="text-lightgray/80">gauravtak996@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-lightgray">
                    Phone
                  </h3>
                  <p className="text-lightgray/80">+91 7877694168</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-lightgray">
                    Location
                  </h3>
                  <p className="text-lightgray/80">Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-lightgray mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/gauravtak"
                  className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center hover:bg-purple/30 transition-colors"
                >
                  <Github className="w-6 h-6 text-purple" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurav-tak-a4190222a/"
                  className="w-12 h-12 bg-teal/20 rounded-lg flex items-center justify-center hover:bg-teal/30 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-teal" />
                </a>
                <a
                  href="https://x.com/ALLOY992"
                  className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center hover:bg-purple/30 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-purple" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple/10 to-teal/5 p-8 rounded-lg border border-purple/20">
            <h2 className="text-2xl font-bold text-lightgray mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-lightgray mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-purple/30 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent text-lightgray placeholder-lightgray/50"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-lightgray mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-purple/30 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent text-lightgray placeholder-lightgray/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-lightgray mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-purple/30 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent text-lightgray placeholder-lightgray/50"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-lightgray mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-purple/30 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent text-lightgray placeholder-lightgray/50 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple to-purple/80 text-dark px-8 py-4 rounded-lg font-semibold hover:from-purple/90 hover:to-purple/70 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
