import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CreateAnything = () => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const images = [
    {
      url: 'https://assets.tallyautomation.com/replicate-prediction-y6w36f8rtxrmy0cx7x8a50mz5w.jpg',
      alt: 'AI generated image'
    },
    {
      url: 'https://assets.tallyautomation.com/freepik_exact-same-image-in-high-quality-photorealistic-quality-with-maximum-material-detail-and-lifelike-textures._0001.jpg',
      alt: 'Ivy Page in Nova by Tally branding'
    },
    {
      url: 'https://assets.tallyautomation.com/Ferrari%20and%20white%20cougar%20in%20the%20snow.jpg',
      alt: 'Ferrari and white cougar in the snow'
    },
    {
      url: 'https://assets.tallyautomation.com/replicate-prediction-0hbd71ebshrmt0cx7x6rbcadq0.jpg',
      alt: 'AI generated image'
    },
    {
      url: 'https://assets.tallyautomation.com/Vintage%20woman%20and%20sculpture%20kiss.jpg',
      alt: 'Vintage woman and sculpture kiss'
    },
    {
      url: 'https://assets.tallyautomation.com/Woman%20sitting%20at%20her%20desk%20in%20the%20jungle.jpg',
      alt: 'Woman sitting at her desk in the jungle'
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Create Anything
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group aspect-[3/4] relative select-none"
              onContextMenu={handleContextMenu}
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
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

        <div className="flex justify-center">
          <Link
            to="/examples/image-generation"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
