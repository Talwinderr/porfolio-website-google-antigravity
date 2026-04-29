import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Camera, Award, Target, PenTool, Infinity, X } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { MeetIvy } from '../../components/MeetIvy';
import { AncientEgyptSection } from '../../components/AncientEgyptSection';

export function ImageGenerationExamples() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const scrollPositionRef = useRef(0);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const openModal = (src: string, alt: string) => {
    scrollPositionRef.current = window.scrollY;
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = '100%';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPositionRef.current);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);
  const images = [
    'https://assets.tallyautomation.com/Urban%20Night%20Stroll.jpg',
    'https://assets.tallyautomation.com/freepik_a-closeup-portrait-of-a-young-woman-with-short-tousled-blonde-hair-featuring-soft-waves-and-natural-flyaways-her-eyes-gently-closed-in-a-serene-introspective-expressi.jpg',
    'https://assets.tallyautomation.com/Snowy%20Owl%20Portrait.jpg',
    'https://assets.tallyautomation.com/freepik_exact-same-image-in-high-quality-photorealistic-quality-with-maximum-material-detail-and-lifelike-textures._0001%20(1).jpg',
    'https://assets.tallyautomation.com/Serenity%20Among%20Sculptures.jpg',
    'https://assets.tallyautomation.com/freepik_a-sharpfeatured-man-embodying-thomas-shelby-as-portrayed-by-cillian-murphy-with-piercing-iceblue-eyes-high-angular-cheekbones-a-strong-defined-jawline-and-short-dark-hair.jpg',
    'https://assets.tallyautomation.com/Red%20Sports%20Car%20in%20Motion.jpg',
    'https://assets.tallyautomation.com/freepik_exact-same-image-but-show-the-full-front-of-the-buggati-chiron_0001.jpg',
    'https://assets.tallyautomation.com/Blackberry%20Mint%20Beverage.jpg',
    'https://assets.tallyautomation.com/Woman%20laying%20on%20bed%20floating%20in%20the%20ocean.jpg',
    'https://assets.tallyautomation.com/freepik_exact-same-image-but-put-drake-in-a-black-tuxedo._0001.jpg',
    'https://assets.tallyautomation.com/Classical%20Sculpture%20Closeup.jpg',
    'https://assets.tallyautomation.com/freepik_exact-same-image-in-high-quality-photorealistic-quality-with-maximum-material-detail-and-lifelike-textures._0001%20(2).jpg',
    'https://assets.tallyautomation.com/Elegant%20Portrait.jpg',
    'https://assets.tallyautomation.com/freepik_a-tall-elegant-young-woman-with-long-voluminous-wavy-blonde-hair-cascading-down-her-back-in-soft-silky-waves-and-natural-flyaways-secured-by-a-thin-black-velvet-headband-.jpg',
    'https://assets.tallyautomation.com/Woman%20as%20mermaid%20in%20an%20aesthetic%20pose%20next%20to%20rock.jpg',
    'https://assets.tallyautomation.com/Festive%20Gathering%20Scene.jpg',
    'https://assets.tallyautomation.com/freepik_exact-same-image-but-replace-the-woman-with-patrick-bateman-in-a-suit-same-pose_0001.jpg',
    'https://assets.tallyautomation.com/Gold%20Ring%20with%20Blue%20Gemstone.jpg',
    'https://assets.tallyautomation.com/freepik_exact-same-image-in-high-quality-photorealistic-quality-with-maximum-material-detail-and-lifelike-textures._0001.jpg',
    'https://assets.tallyautomation.com/Graceful%20Woman%20Pose.jpg',
    'https://assets.tallyautomation.com/freepik_exact-same-image._0001.jpg',
    'https://assets.tallyautomation.com/Minimalist%20Skincare%20Tube.jpg',
    'https://assets.tallyautomation.com/Ivy%20(close-up%20portrait).jpg',
    'https://assets.tallyautomation.com/Ivy%20Page%20close-up%20portrait%2C%20macro%20detail.jpg',
    'https://assets.tallyautomation.com/Vintage%20old%20money%20woman%20on%20the%20phone.jpg'
  ];

  const capabilities = [
    {
      icon: <Infinity className="w-6 h-6 text-cyan-400" />,
      title: "Unlimited Generations",
      description: "Create as many images as you need with no limits on output. Your imagination is truly the only boundary to what you can generate."
    },
    {
      icon: <Camera className="w-6 h-6 text-pink-400" />,
      title: "Photorealistic Quality",
      description: "Generate stunning, lifelike images with incredible detail, lighting, and composition that rival professional photography."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Artistic Style Mastery",
      description: "Master any visual style from hyperrealistic photography to abstract art, vintage aesthetics to futuristic designs with perfect execution."
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: "Concept Visualization",
      description: "Bring any imaginative concept to life - from fashion photography to product demonstrations with photorealistic precision."
    }
  ];

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        <Navigation currentPage="image" hidden={!!selectedImage} />

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
                  Image Generation Examples
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Discover the unlimited potential of AI-generated imagery. Create stunning, photorealistic images with no limits on output.
                From fashion photography to conceptual art, bring any vision to life with professional-grade quality.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Featured Image Examples
              </span>
            </h2>

            <div
              className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
              style={{ columnGap: '1.5rem' }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer relative select-none"
                  onClick={() => openModal(image, 'AI Generated Image')}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                >
                  <img
                    src={image}
                    alt="AI Generated Image"
                    className="w-full h-auto object-cover pointer-events-none"
                    loading="lazy"
                    draggable="false"
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                    style={{
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      WebkitUserDrag: 'none'
                    }}
                  />
                  <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                My Image Generation Capabilities
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

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 mb-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Results That Speak for Themselves
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">Unlimited</div>
                  <div className="text-gray-400">Image Generations Possible</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400">Quality Consistency Score</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">Instant</div>
                  <div className="text-gray-400">Creative Iteration Speed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <MeetIvy compact />
          </div>

          <div className="mb-20">
            <AncientEgyptSection />
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300 p-4"
          onClick={closeModal}
        >
          <div
            className="relative select-none max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-2xl pointer-events-none block"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              draggable={false}
            />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-lg border border-white/20 rounded-full transition-all duration-300 z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
          </div>
        </div>
      )}
    </>
  );
}
