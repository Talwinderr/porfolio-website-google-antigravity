import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Palette, Package, TrendingUp, Users, Award, X } from 'lucide-react';
import { Navigation } from '../../components/Navigation';

export function IvyShowcase() {
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

  const capabilities = [
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: "Consistent Face Recognition",
      description: "Ivy maintains perfect facial consistency across thousands of generated images, ensuring your brand character remains recognizable in every scenario, pose, and aesthetic."
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      title: "Unlimited Aesthetic Versatility",
      description: "From high fashion to casual wear, vintage to futuristic, Ivy adapts to any aesthetic vision while maintaining her signature look. One character, infinite possibilities."
    },
    {
      icon: <Package className="w-6 h-6 text-amber-400" />,
      title: "Seamless Product Integration",
      description: "Showcase products naturally with Ivy presenting them in lifestyle contexts. From clothing to accessories, tech to beauty products, she brings your offerings to life."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: "Brand Aesthetic Matching",
      description: "Ivy seamlessly adapts to your brand's visual identity, color schemes, and design language while maintaining character consistency across all marketing materials."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Professional Modeling Quality",
      description: "Every pose, expression, and styling choice meets professional modeling standards. Ivy delivers portfolio-grade images without the logistics of traditional photoshoots."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "Scalable Content Production",
      description: "Generate thousands of unique images featuring Ivy in different outfits, settings, and scenarios. Scale your content production without sacrificing consistency or quality."
    }
  ];

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        <Navigation currentPage="other" hidden={!!selectedImage} />

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
                  Ivy Page, an AI-generated model
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Ivy presents an unlimited wardrobe and aesthetic potential through a single, consistent face.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div
              className="columns-1 md:columns-2 lg:columns-3"
              style={{ columnGap: '1.5rem' }}
            >
              {[
                { src: 'https://assets.tallyautomation.com/Ivy%20Page%20model%20in%20desert%20back.jpg', alt: 'Ivy - Desert Back', border: '#b84500' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page%20model%20in%20desert%20front.jpg', alt: 'Ivy - Desert Front', border: '#b84500' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page%20model%20in%20desert.jpg', alt: 'Ivy - Desert', border: '#b84500' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page/Ivy%20Page%20and%20Buggati%20Chiron.jpg', alt: 'Ivy - Bugatti Chiron', border: '#1e3a5f' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page/Ivy%20Page%20in%20Buggati%20Chiron%20interior.jpg', alt: 'Ivy - Bugatti Chiron Interior', border: '#1e3a5f' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page/Ivy%20Page%20with%20Ferrari%20250%20GTO%20front.jpg', alt: 'Ivy - Ferrari 250 GTO Front', border: '#ffffff' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page/Ivy%20Page%20with%20Ferrari%20250%20GTO%20laying%20down.jpg', alt: 'Ivy - Ferrari 250 GTO Laying Down', border: '#ffffff' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page/Ivy%20Page%20with%20Ferrari%20250%20GTO%20rear.jpg', alt: 'Ivy - Ferrari 250 GTO Rear', border: '#ffffff' },
                { src: 'https://assets.tallyautomation.com/Ivy%20Page/Ivy%20Page%20with%20Ferrari%20250%20GTO%20standing.jpg', alt: 'Ivy - Ferrari 250 GTO Standing', border: '#ffffff' },
              ].map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-6 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer relative select-none"
                  onClick={() => openModal(image.src, image.alt)}
                  onContextMenu={handleContextMenu}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none', border: `2px solid ${image.border}` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover pointer-events-none"
                    loading="lazy"
                    draggable={false}
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitUserDrag: 'none' } as React.CSSProperties}
                  />
                  <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Ivy's Capabilities
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
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
                  The Power of Consistency
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400">Character Consistency</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">Unlimited</div>
                  <div className="text-gray-400">Aesthetic Variations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">Infinite</div>
                  <div className="text-gray-400">Wardrobe Options</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
