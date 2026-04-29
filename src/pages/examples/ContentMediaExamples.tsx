import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Play, Award, Clock, Target, Camera, PenTool } from 'lucide-react';
import { Navigation } from '../../components/Navigation';

export function ContentMediaExamples() {
  const capabilities = [
    {
      icon: <Play className="w-6 h-6 text-cyan-400" />,
      title: "AI Video Generation",
      description: "Craft cinematic, professional-grade video content with AI that brings any creative vision to life"
    },
    {
      icon: <Camera className="w-6 h-6 text-pink-400" />,
      title: "Visual Storytelling",
      description: "Transform abstract ideas into compelling visual narratives that captivate audiences and convey complex emotions"
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "Brand Consistency",
      description: "Maintain consistent visual identity and messaging across all content and media formats"
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: "Unlimited Creative Potential",
      description: "Transform any concept into stunning visual reality - your imagination is the only limit"
    },
    {
      icon: <PenTool className="w-6 h-6 text-orange-400" />,
      title: "Content Automation",
      description: "Scale your content creation across all platforms with AI-powered automation that maintains quality"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "Cinematic Production Quality",
      description: "Create Hollywood-caliber content with professional cinematography, lighting, and visual effects"
    }
  ];

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        <Navigation currentPage="video" />

        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="pt-16 mb-16">
            <Link
              to="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Video Generation Examples
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Discover the unlimited potential of AI-generated video. Create cinematic, professional-grade productions with no limits on output.
                From luxury brand commercials to satirical content and travel showcases, bring any vision to life with Hollywood-caliber quality.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1zQfLf4PHI-S9i1ZN7TAHkQK1fX0fC8ZP/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Lincoln - Reimagined, Resurrected, Ready for Anything</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A cinematic luxury car advertisement showcasing the Lincoln brand's commitment to elegance, sophistication, and premium craftsmanship. This AI-generated commercial captures the essence of luxury automotive marketing with stunning visuals, atmospheric lighting, and compelling storytelling that resonates with discerning customers.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        Cinematic Production
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        Luxury Branding
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        Atmospheric Lighting
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        Premium Storytelling
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1MjqTXlK-MjUvI3x6QOgbpaIpIuLhgjRD/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Tesla CYBERTRUCK - Built for the Next Frontier</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A unique space-themed advertisement for the Tesla Cybertruck that pushes the boundaries of automotive marketing. This AI-generated commercial combines futuristic vehicle design with cosmic storytelling, showcasing the Cybertruck's revolutionary aesthetics against otherworldly backdrops and space exploration themes.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        Space Theme
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        Futuristic Design
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        Revolutionary Aesthetics
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        Cosmic Storytelling
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1E3W--m5PcWqBOd4fsFySAQiCnFUDHO9n/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Mini Cooper - Drive Your Style, Own the Moment</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A dynamic Mini Cooper advertisement that captures the brand's spirit of adventure and urban mobility. This AI-generated commercial showcases the iconic design and agile performance of the Mini Cooper through engaging storytelling and vibrant cinematography that appeals to modern city dwellers.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30">
                        Urban Adventure
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        Iconic Design
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        Agile Performance
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        City Lifestyle
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1tPEzYfjfL1yPJsnGkoip7qIWVJ1sEf5l/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Rolex Oyster Perpetual Sea-Dweller - Mastery of Depth and Precision</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A stunning cinematic macro showcase of the legendary Rolex Oyster Perpetual Sea-Dweller. This AI-generated visual experience captures every intricate detail of Swiss horological excellence, from the precision-engineered bezel to the iconic dial, revealing the masterful craftsmanship that defines luxury watchmaking.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        Cinematic Macro
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        Swiss Precision
                      </span>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30">
                        Luxury Craftsmanship
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        Depth Mastery
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        Professional Horology
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1NvJZ_D1MZh8DQnoKBDBJgVWP22KSi5Z0/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Musk, by Musk - Satire Cologne Advert</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A brilliantly crafted satirical cologne advertisement that pushes the boundaries of creative marketing with bold humor and unconventional storytelling. This AI-generated entertainment piece showcases the power of parody in advertising, delivering a witty and memorable experience that demonstrates how humor and creativity can captivate audiences while building brand recognition through unexpected and delightfully absurd concepts.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                        Satirical Content
                      </span>
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                        Creative Parody
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        Bold Humor
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        Entertainment Marketing
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        Unique Concept
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1-gmYEEHzt3wE0CmXEwegtqC_gPWCmrYR/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Mercedes 300SL Gullwing - Timeless Elegance Reimagined</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A captivating cinematic journey through automotive history, showcasing the legendary Mercedes 300SL Gullwing in all its vintage glory. This video celebrates the iconic design and sophisticated craftsmanship of one of the most revered classic sports cars ever created, with its distinctive gullwing doors and timeless silhouette that continues to inspire generations of automotive enthusiasts.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30">
                        Vintage Luxury
                      </span>
                      <span className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm border border-slate-500/30">
                        Classic Design
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        Automotive Heritage
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        Timeless Elegance
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                        Iconic Gullwing Doors
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1XbgCnucXwnEfcT9Io7p9b4wU26OHe_3d/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">London - A Cinematic Urban Journey</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Experience the vibrant energy and timeless elegance of London through a breathtaking cinematic drone showcase. This AI-generated production captures the city's most iconic landmarks in stunning detail, from the historic Big Ben and Palace of Westminster to the modern marvel of the London Eye, the underground Tube network, the regal Buckingham Palace, and the culturally rich British Museum. A visual journey through architecture, history, and contemporary urban life.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        Drone Cinematography
                      </span>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30">
                        Urban Landmarks
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        Historical Showcase
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        Architectural Excellence
                      </span>
                      <span className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm border border-slate-500/30">
                        City Portrait
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                My Video Generation Capabilities
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {capability.icon}
                    <h3 className="text-xl font-bold ml-4">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 mb-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Results That Speak for Themselves
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">90%</div>
                  <div className="text-gray-400">Faster Production Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">75%</div>
                  <div className="text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400">Brand Consistency</div>
                </div>
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
    </>
  );
}
