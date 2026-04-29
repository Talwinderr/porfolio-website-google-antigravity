import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MeetIvyProps {
  compact?: boolean;
}

export const MeetIvy = ({ compact = false }: MeetIvyProps) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  if (compact) {
    return (
      <section
        className="relative z-10 overflow-hidden rounded-3xl mx-0"
        style={{ backgroundColor: '#6a5e5e' }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-0">
          <div className="w-full sm:w-[40%] relative select-none flex-shrink-0">
            <img
              src="https://assets.tallyautomation.com/Ivy%20Page/Ivy%20Page%20Nova%20by%20Tally%20branded%20t-shirt.jpg"
              alt="Ivy - AI Generated Model by Nova"
              className="w-full h-auto object-contain pointer-events-none"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              draggable={false}
            />
            <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
          </div>

          <div className="w-full sm:w-[60%] px-8 py-8 sm:py-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Meet Ivy Page
              </span>
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-5">
              This AI-generated model ensures images maintain a uniform and consistent aesthetic across all marketing materials — a scalable solution that speeds up content production.
            </p>
            <Link
              to="/examples/ivy-showcase"
              className="inline-flex items-center self-start px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm"
            >
              <span>Her latest work</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative z-10 overflow-hidden h-auto min-h-[500px] py-12"
      style={{ backgroundColor: '#6a5e5e' }}
    >
      <div className="h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-[35%] h-full flex items-start justify-center px-8 py-16 lg:py-8 lg:pt-32">
          <div className="text-center max-w-md">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Meet Ivy
              </span>
            </h2>
            <Link
              to="/examples/ivy-showcase"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 mb-6"
            >
              <span>Her latest work</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              AI-generated models ensure product showcases maintain a uniform and consistent aesthetic across all marketing materials, eliminating the variables associated with human models. This approach allows brands to present products in a highly controlled environment, providing a scalable solution that speeds up content production.
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[65%] relative h-full min-h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full select-none">
            <img
              src="https://assets.tallyautomation.com/Ivy%20(with%20Nova%20by%20Tally)%20logo.jpg"
              alt="Ivy - AI Generated Model by Nova"
              className="w-full h-full object-contain pointer-events-none"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              draggable={false}
            />
            <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
          </div>
        </div>

        <div className="lg:hidden w-full px-4 pb-8">
          <div className="relative w-full select-none">
            <img
              src="https://assets.tallyautomation.com/Ivy%20(with%20Nova%20by%20Tally)%20logo.jpg"
              alt="Ivy - AI Generated Model by Nova"
              className="w-full h-auto object-contain pointer-events-none"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              draggable={false}
            />
            <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
          </div>
        </div>
      </div>
    </section>
  );
};
