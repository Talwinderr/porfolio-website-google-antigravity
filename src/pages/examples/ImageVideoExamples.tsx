import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Play, Award, Clock, Target, Camera } from 'lucide-react';

export function ImageVideoExamples() {
  React.useEffect(() => {
    // Force scroll to top with multiple methods to ensure it works
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const capabilities = [
    {
      icon: <Camera className="w-6 h-6 text-pink-400" />,
      title: "Visual Storytelling",
      description: "Transform abstract ideas into compelling visual narratives that captivate audiences and convey complex emotions through stunning imagery"
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: "Concept Visualization",
      description: "Bring any imaginative concept to life - from surreal artistic visions to practical product demonstrations with photorealistic precision"
    },
    {
      icon: <Play className="w-6 h-6 text-purple-400" />,
      title: "Dynamic Motion Graphics",
      description: "Create fluid animations and cinematic sequences that seamlessly blend reality with imagination for maximum visual impact"
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Artistic Style Mastery",
      description: "Master any visual style from hyperrealistic photography to abstract art, vintage aesthetics to futuristic designs with perfect execution"
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
                  Image & Video Generation Examples
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Discover the power of AI-generated visual content. From cinematic short films to stunning imagery, 
                see how my technology creates professional-grade visuals that captivate and engage.
              </p>
            </div>
          </div>

          {/* Cinematic Short Film Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Featured Video Examples
              </span>
            </h2>
            
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Musk Cologne Advertisement */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src="https://drive.google.com/file/d/1UBvBDLejsucbwEGpXYkwDn8Ofs4PdsdK/preview"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Musk - The Ultimate Cologne Advertisement"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Musk, by Musk - The Ultimate Cologne</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="bg-white/10 px-3 py-1 rounded-full">Celebrity Branding</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Creative Advertising</span>
                    </div>
                  </div>
                  
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A brilliantly creative cologne advertisement featuring Elon Musk promoting his own "Musk" fragrance - showcasing 
                  the genius wordplay of "Musk, by Musk." This imaginative concept perfectly demonstrates AI's unlimited creative 
                  potential to bring any wild idea to life, no matter how playful or unconventional. The clever play on words 
                  combines celebrity branding with product marketing in ways that push the boundaries of traditional advertising creativity.
                  </p>
                  
                  <div className="space-y-3">
                  <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      Celebrity Integration
                      </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                      Creative Wordplay
                      </span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                      Bold Concept Design
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      Unlimited Imagination
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            {/* Thebes - Ancient Egypt */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src="https://drive.google.com/file/d/1oEAzxnkdAJqc30EB8SY0xZRnUJ2V7R99/preview"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Thebes - Ancient Egypt 1200 BCE"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Thebes - Ancient Egypt 1200 BCE</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="bg-white/10 px-3 py-1 rounded-full">Historical Recreation</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Cultural Heritage</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  An immersive journey into ancient Thebes, the magnificent capital of Egypt during 1200 BCE. This AI-generated 
                  historical recreation, brings to life the grandeur of one of antiquity's greatest cities, showcasing the bustling 
                  streets, towering temples, and daily life of ancient Egyptians. Experience the architectural marvels, religious 
                  ceremonies, and cultural richness of this past civilization with stunning historical accuracy and cinematic 
                  storytelling that transports viewers back over 3,000 years.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Creative Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30">
                      Historical Authenticity
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                      Ancient Architecture
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      Cultural Immersion
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                      Cinematic Storytelling
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Through Time */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src="https://drive.google.com/file/d/1ms3vlpp8_o1ujQx0hDTJ97VJBxbmy2sl/preview"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Journey Through Time - AI Short Film"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Journey Through Time</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="bg-white/10 px-3 py-1 rounded-full">Time Travel</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Narrative Film</span>
                  </div>
                  </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  An AI-generated cinematic short film following a modern man's extraordinary journey through different historical periods. 
                  This piece showcases the limitless storytelling possibilities of AI video generation, blending historical authenticity 
                  with contemporary narrative techniques to create a compelling visual experience.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Creative Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      Historical Storytelling
                    </span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                      Cinematic Production
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                      Time Period Transitions
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      Character Development
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
              My Image & Video Generation Capabilities
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
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-gray-400">Increase in Visual Content Output</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">80%</div>
                <div className="text-gray-400">Reduction in Design Costs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">90%</div>
                <div className="text-gray-400">Brand Consistency Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Ready to Create Stunning Visual Content?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let me help you generate professional images and videos that captivate your audience and drive results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <span>Start Creating Visual Content</span>
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
        {/* Featured Video Examples */}
    </>
  );
}