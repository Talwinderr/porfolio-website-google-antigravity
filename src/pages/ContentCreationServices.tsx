import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Video, ArrowRight, CheckCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function ContentCreationServices() {
  const videoService = {
    icon: <Video className="w-12 h-12 text-purple-400" />,
    title: "Video Generation",
    description: "Create professional video content at scale with AI-powered automation that delivers cinematic quality and brand consistency.",
    benefits: [
      "Professional video creation",
      "Cinematic quality output",
      "Brand consistency in motion",
      "Multi-platform optimization"
    ],
    path: "/examples/content-media"
  };

  const imageService = {
    icon: <Camera className="w-12 h-12 text-pink-400" />,
    title: "Image Generation",
    description: "Generate stunning images automatically with AI that creates unlimited visual content while maintaining your brand identity.",
    benefits: [
      "Stunning image generation",
      "Brand-consistent visuals",
      "Unlimited creative potential",
      "Multi-format output"
    ],
    path: "/examples/image-generation"
  };

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        <Navigation currentPage="other" />

        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="pt-16">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Content Creation
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Create stunning visual content at scale with AI-powered image and video generation.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-center mb-6">
                    {videoService.icon}
                    <h3 className="text-2xl font-bold ml-4">{videoService.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-center flex-grow">
                    {videoService.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {videoService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <Link
                      to={videoService.path}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>View Video Examples</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-center mb-6">
                    {imageService.icon}
                    <h3 className="text-2xl font-bold ml-4">{imageService.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-center flex-grow">
                    {imageService.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {imageService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <Link
                      to={imageService.path}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>View Image Examples</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Why Choose AI-Powered Content Creation?
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Scale Production</h3>
                  <p className="text-gray-400">
                    Generate unlimited high-quality content without the traditional time and cost constraints.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Brand Consistency</h3>
                  <p className="text-gray-400">
                    Maintain your unique brand identity across all visual content automatically.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Professional Quality</h3>
                  <p className="text-gray-400">
                    Achieve cinematic-quality results that engage and convert your audience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <footer className="border-t border-white/10 py-12 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <img src="/1.PNG" alt="Nova" className="w-12 h-12 sm:w-14 sm:h-14" />
                <span className="text-xl font-bold tracking-wider">Nova by Tally</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
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
    </>
  );
}
