import React from 'react';
import { PageSpeedAuditor } from './PageSpeedAuditor';

export function MonochromeCardsSection() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <section
      className="py-20 px-4 relative z-10 min-h-[600px] flex items-center overflow-hidden"
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://assets.tallyautomation.com/Hexagon%20white%20and%20black%203d%20background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="space-y-8">
          {/* Centered Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Website Performance & SEO Auditor
            </span>
          </h2>

          {/* Full-Width PageSpeed Auditor Card */}
          <div
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-black/25 transition-all duration-300 min-h-[400px]"
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
          >
            <PageSpeedAuditor />
          </div>
        </div>
      </div>
    </section>
  );
}
