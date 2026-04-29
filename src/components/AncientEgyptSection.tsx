import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AncientEgyptSection = () => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <section
      className="relative z-10 overflow-hidden rounded-3xl mx-0"
      style={{
        backgroundImage: 'url(https://assets.tallyautomation.com/ancient%20egypt/hieroglyphs%20background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-0">
        <div className="w-full sm:w-[40%] relative select-none flex-shrink-0 overflow-hidden" style={{ maxHeight: '280px' }}>
          <img
            src="https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-threequarter-closeup-of-the__46053.jpg"
            alt="Ancient Egypt Throne Room - AI Generated"
            className="w-full h-full object-cover object-center pointer-events-none"
            style={{ minHeight: '280px' }}
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
            draggable={false}
          />
          <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
        </div>

        <div className="w-full sm:w-[60%] px-8 py-8 sm:py-6 flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-black/45 rounded-r-3xl" />
          <h2 className="relative text-2xl md:text-3xl font-bold mb-3" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            <span className="text-white">
              Ancient Egypt Throne Room
            </span>
          </h2>
          <p className="relative text-white/90 text-sm leading-relaxed mb-5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
            A collection of professional images from within the same environment, from macro closeups to wide angle and aerial views, showcasing consistency and attention to detail.
          </p>
          <Link
            to="/examples/ancient-egypt-showcase"
            className="relative inline-flex items-center self-start px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm"
          >
            <span>View Images</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
