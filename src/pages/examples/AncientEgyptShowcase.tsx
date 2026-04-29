import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { Navigation } from '../../components/Navigation';

const CLEOPATRA_CLOSEUP = 'https://assets.tallyautomation.com/ancient%20egypt/Cleopatra%20closeup%204K.jpg';
const PTOLEMY_CLOSEUP = 'https://assets.tallyautomation.com/ancient%20egypt/Ptolemy%20closeup%204K.jpg';
const CLEOPATRA_THRONE = 'https://assets.tallyautomation.com/ancient%20egypt/Cleopatra%20on%20the%20throne.jpg';
const PTOLEMY_THRONE = 'https://assets.tallyautomation.com/ancient%20egypt/Ptolemy%20on%20the%20throne.jpg';

const environmentImages = [
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/throne%20platform.jpg', alt: 'Throne Platform' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/throne%20room.jpg', alt: 'Throne Room' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/gold%20double%20doors.jpg', alt: 'Gold Double Doors' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-intimate-groundlevel-close__89256.jpg', alt: 'Intimate Ground Level Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-intimate-eyelevel-closeup-__74522.jpg', alt: 'Intimate Eye Level Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-intimate-aeriallevel-close__74516.jpg', alt: 'Intimate Aerial Level Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-eyelevel-threequarter-clos__89258.jpg', alt: 'Eye Level Three Quarter Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-eyelevel-threequarter-clos__74517.jpg', alt: 'Eye Level Three Quarter View' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-extreme-sharp-closeup-of-t__89260.jpg', alt: 'Extreme Sharp Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-extreme-sharp-closeup-of-t__74521.jpg', alt: 'Extreme Sharp Detail Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-atmospheric-closeup-of-the__74520.jpg', alt: 'Atmospheric Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-atmospheric-closeup-of-one__89261.jpg', alt: 'Atmospheric Closeup of One' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-atmospheric-closeup-of-one__89254.jpg', alt: 'Atmospheric Detail Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-an-aerial-closeup-view-of-the__89263.jpg', alt: 'Aerial Closeup View' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-threequarter-closeup-of-the__46053.jpg', alt: 'Three Quarter Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-rich-highangle-closeup-look__89255.jpg', alt: 'Rich High Angle Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-rich-highangle-closeup-look__74518.jpg', alt: 'Rich High Angle Look' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-powerful-lowangle-closeup-o__89259.jpg', alt: 'Powerful Low Angle Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-dynamic-lowangle-closeup-of__89252.jpg', alt: 'Dynamic Low Angle Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-dynamic-low-threequarter-cl__74519.jpg', alt: 'Dynamic Low Three Quarter Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-dramatic-lowangle-closeup-o__74512.jpg', alt: 'Dramatic Low Angle Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-dramatic-frontal-closeup-of__89257.jpg', alt: 'Dramatic Frontal Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-detailed-overhead-closeup-o__89253.jpg', alt: 'Detailed Overhead Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-detailed-highangle-closeup-__89262.jpg', alt: 'Detailed High Angle Closeup' },
  { src: 'https://assets.tallyautomation.com/ancient%20egypt/freepik__exact-same-image-but-a-beautiful-highangle-closeup__89251.jpg', alt: 'Beautiful High Angle Closeup' },
];

export function AncientEgyptShowcase() {
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

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        <Navigation currentPage="other" hidden={!!selectedImage} />

        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="pt-16 mb-16">
            <Link
              to="/examples/image-generation"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Image Generation
            </Link>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Ancient Egypt Throne Room
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                AI-generated imagery transporting you to the grandeur of ancient Egypt.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Cleopatra', closeup: CLEOPATRA_CLOSEUP, throne: CLEOPATRA_THRONE },
                { name: 'Ptolemy', closeup: PTOLEMY_CLOSEUP, throne: PTOLEMY_THRONE },
              ].map(({ name, closeup, throne }) => (
                <div key={name} className="flex flex-col gap-5">
                  <div
                    className="relative rounded-2xl overflow-hidden cursor-pointer select-none group"
                    style={{
                      border: '2px solid',
                      borderColor: '#C9A84C',
                      boxShadow: '0 0 18px 2px rgba(201,168,76,0.35), inset 0 0 18px 2px rgba(201,168,76,0.10)',
                      background: 'linear-gradient(180deg, rgba(201,168,76,0.10) 0%, rgba(0,0,0,0) 40%)',
                    }}
                    onClick={() => openModal(closeup, `${name} Closeup`)}
                    onContextMenu={handleContextMenu}
                  >
                    <div
                      className="text-center py-2 px-4 text-sm font-bold tracking-[0.2em] uppercase"
                      style={{ color: '#E8C96A', letterSpacing: '0.2em' }}
                    >
                      {name}
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={closeup}
                        alt={`${name} Closeup`}
                        className="w-full aspect-video object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        draggable={false}
                        onContextMenu={handleContextMenu}
                        onDragStart={handleDragStart}
                        style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitUserDrag: 'none' }}
                      />
                      <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
                    </div>
                  </div>

                  <div
                    className="relative rounded-2xl overflow-hidden cursor-pointer select-none bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    onClick={() => openModal(throne, `${name} on the Throne`)}
                    onContextMenu={handleContextMenu}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >
                    <img
                      src={throne}
                      alt={`${name} on the Throne`}
                      className="w-full aspect-video object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      draggable={false}
                      onContextMenu={handleContextMenu}
                      onDragStart={handleDragStart}
                      style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitUserDrag: 'none' }}
                    />
                    <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {environmentImages.map(({ src, alt }) => (
                <div
                  key={src}
                  className="break-inside-avoid bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer relative select-none group"
                  onClick={() => openModal(src, alt)}
                  onContextMenu={handleContextMenu}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full aspect-video object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitUserDrag: 'none' }}
                  />
                  <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
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
