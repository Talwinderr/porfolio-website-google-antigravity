import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { CheckCircle, Layers, Monitor, Smartphone } from 'lucide-react';

export function UXUIDesign() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-cyan-400" />,
      title: "Website Design",
      description: "Professional, responsive websites crafted with precision to convert visitors into customers.",
      benefits: ["Custom brand identity", "Mobile-first design", "Conversion-optimised layouts", "SEO-ready structure"],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: "Mobile App Design",
      description: "Intuitive mobile experiences for iOS and Android that users love and return to.",
      benefits: ["Native-feel interfaces", "Smooth micro-interactions", "Accessibility standards", "Prototype & handoff"],
    },
    {
      icon: <Layers className="w-8 h-8 text-green-400" />,
      title: "Digital Product Design",
      description: "End-to-end UX strategy and UI execution for SaaS platforms, dashboards, and digital tools.",
      benefits: ["User research & flows", "Wireframes & prototypes", "Design systems", "Iterative refinement"],
    },
  ];

  return (
    <div className="min-h-screen text-white bg-black">
      <Navigation currentPage="uxui" />

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="pt-16 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              UX/UI Design
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Beautiful, functional digital experiences built for real users. From concept to pixel-perfect execution.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex flex-wrap gap-6">
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 w-full max-w-sm flex-shrink-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://assets.tallyautomation.com/Ambience%20(Real%20Estate%20Website%20Template).jpg"
                  alt="Ambience Real Estate Website Template"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-sm text-gray-400 mb-3">Ambience (Real Estate Website Example)</p>
                <a
                  href="https://remarkable-walkthroughs-422739.framer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 w-full max-w-sm flex-shrink-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://assets.tallyautomation.com/Aset%20(Investment%20with%20AI%20Technology%20Website%20Template).jpg"
                  alt="Aset Investment with AI Technology Website Template"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-sm text-gray-400 mb-3">Aset (Investment with AI Technology Website Template)</p>
                <a
                  href="https://marvelous-life-231806.framer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 w-full max-w-sm flex-shrink-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://assets.tallyautomation.com/(AI%20Artist%20Portfolio%20Website%20Template).jpg"
                  alt="AI Artist Portfolio Website Template"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-sm text-gray-400 mb-3">(AI Artist Portfolio Website Template)</p>
                <a
                  href="https://sympathetic-engineers-820725.framer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 w-full max-w-sm flex-shrink-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://assets.tallyautomation.com/CryptoVault%20(Cryptocurrency%20Platform%20Website%20Template).jpg"
                  alt="CryptoVault Cryptocurrency Platform Website Template"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-sm text-gray-400 mb-3">CryptoVault (Cryptocurrency Platform Website Template)</p>
                <a
                  href="https://crowded-homework-010725.framer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-xl font-bold ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/1.PNG" alt="Nova" className="w-12 h-12 sm:w-14 sm:h-14" />
              <span className="text-xl font-bold tracking-wider">Nova by Tally</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/examples/content-media" className="text-gray-400 hover:text-white transition-colors">Video Generation</Link>
              <Link to="/examples/image-generation" className="text-gray-400 hover:text-white transition-colors">Image Generation</Link>
              <Link to="/ux-ui-design" className="text-gray-400 hover:text-white transition-colors">UX/UI Design</Link>
              <Link to="/services/ai-automation" className="text-gray-400 hover:text-white transition-colors">AI Automation</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Me</Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nova by Tally. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
