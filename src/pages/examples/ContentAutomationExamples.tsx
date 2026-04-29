import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Play, Award, Clock, Target, Camera } from 'lucide-react';

export function ContentAutomationExamples() {
  React.useEffect(() => {
    // Force scroll to top with multiple methods to ensure it works
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const capabilities = [
    {
      icon: <Play className="w-6 h-6 text-cyan-400" />,
      title: "AI Video Generation",
      description: "Craft cinematic, professional-grade video content with AI that brings any creative vision to life"
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "Brand Consistency",
      description: "Maintain consistent visual identity and messaging across all content"
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: "Unlimited Creative Potential",
      description: "Transform any concept into stunning visual reality - your imagination is the only limit"
    },
    {
      icon: <Camera className="w-6 h-6 text-purple-400" />,
      title: "Cinematic Production Quality",
      description: "Create Hollywood-caliber content with professional cinematography, lighting, and visual effects that rival major studio productions"
    }
  ];

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-3">
                <Bot className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold tracking-wider">TALLY.AI</span>
              </Link>
              
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                <Link 
                  to="/contact"
                  className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-24">
          {/* Header */}
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
                  Content Creation Examples
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                See how my AI-powered content creation creates stunning, professional-grade advertisements
                that maintain brand consistency while delivering exceptional visual impact.
              </p>
            </div>
          </div>

          {/* Video Examples Grid */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Lincoln Car Advertisement */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1zQfLf4PHI-S9i1ZN7TAHkQK1fX0fC8ZP/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
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

              {/* Tesla Cybertruck Space Advertisement */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1MjqTXlK-MjUvI3x6QOgbpaIpIuLhgjRD/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
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

              {/* Mini Cooper Advertisement */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1E3W--m5PcWqBOd4fsFySAQiCnFUDHO9n/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
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

              {/* Bentley Flying Spur Advertisement */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1PoltJAwdT4hyvlUo2y5DXISciL-b1AF_/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Bentley Flying Spur - The Art of Grand Touring</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Experience the epitome of luxury and performance with the Bentley Flying Spur. This AI-generated cinematic showcase highlights the exquisite craftsmanship, powerful presence, and unparalleled comfort of Bentley's flagship sedan, capturing its elegance and dynamic capabilities through stunning visuals and sophisticated storytelling.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30">
                        Luxury Sedan
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                        Exquisite Craftsmanship
                      </span>
                      <span className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm border border-violet-500/30">
                        Dynamic Performance
                      </span>
                      <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-sm border border-rose-500/30">
                        Sophisticated Design
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Jacob & Co. Astronomia Solar Zodiac Watch */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden md:col-span-2">
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1P8fuqeIiJBKua0zTdnIAY9GyrXSl67jy/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Jacob & Co. Astronomia Solar Zodiac – Time Written in the Stars</h3>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    A stunning close-up cinematic showcase of the Jacob & Co. Astronomia Solar Zodiac watch, founded and designed by Jacob Arabo, highlighting the intricate celestial mechanics and exceptional craftsmanship of this high watchmaking masterpiece. This AI-generated visual art reveals the mesmerizing details through detailed close-up shots, featuring the rotating astronomical complications, finely hand-finished parts, and the beautiful blend of artisanal watchmaking skill with cosmic inspiration.
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs border border-amber-500/30">
                        Macro Cinematography
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30">
                        Celestial Mechanics
                      </span>
                      <span className="px-2 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs border border-rose-500/30">
                        Haute Horlogerie
                      </span>
                      <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs border border-indigo-500/30">
                        Astronomical Complications
                      </span>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">
                        Luxury Craftsmanship
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                My Content Automation Capabilities
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Results Section */}
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

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Ready to Automate Your Content Creation?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let me help you create stunning, professional content that drives results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Content Automation</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}