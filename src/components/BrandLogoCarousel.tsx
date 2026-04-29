import React from 'react';
import '../styles/brand-carousel.css';

export const BrandLogoCarousel = () => {
  const logos = [
    { src: '/OpenAI Logo.png', alt: 'OpenAI', name: 'OpenAI', showText: false },
    { src: '/Kling AI Logo.png', alt: 'Kling AI', name: 'Kling AI', showText: false },
    { src: '/Midjourney Logo.png', alt: 'Midjourney', name: 'Midjourney', showText: true },
    { src: '/ElevenLabs Logo.png', alt: 'ElevenLabs', name: 'ElevenLabs', showText: false },
    { src: '/Google AI Logo.png', alt: 'Google AI', name: 'Google AI', showText: false },
    { src: '/claude_ai_logo.png', alt: 'Claude AI', name: 'Claude AI', showText: false },
    { src: '/DeepSeek AI Logo copy.png', alt: 'DeepSeek AI', name: 'DeepSeek AI', showText: false },
    { src: '/Google DeepMind Logo.png', alt: 'Google DeepMind', name: 'Google DeepMind', showText: false },
    { src: '/Make Logo copy.png', alt: 'Make', name: 'Make', showText: false },
    { src: '/Google Gemini Logo copy.png', alt: 'Google Gemini', name: 'Google Gemini', showText: false },
    { src: '/Hailuo AI Logo.png', alt: 'Hailuo AI', name: 'Hailuo AI', showText: false },
    { src: '/Grok Logo.png', alt: 'Grok', name: 'Grok', showText: false },
    { src: '/Leonardo AI Logo.png', alt: 'Leonardo AI', name: 'Leonardo AI', showText: false },
    { src: '/Microsoft Copilot Logo.png', alt: 'Microsoft Copilot', name: 'Microsoft Copilot', showText: false },
    { src: '/n8n Logo.png', alt: 'n8n', name: 'n8n', showText: false },
    { src: '/OpenArt Logo.png', alt: 'OpenArt', name: 'OpenArt', showText: false },
    { src: '/Perplexity AI Logo.png', alt: 'Perplexity AI', name: 'Perplexity AI', showText: false },
    { src: '/Retell AI Logo.png', alt: 'Retell AI', name: 'Retell AI', showText: false },
    { src: '/Zapier Logo.png', alt: 'Zapier', name: 'Zapier', showText: false },
    { src: '/Runway Logo.png', alt: 'Runway', name: 'Runway', showText: false },
  ];

  const logosReverse = [
    { src: '/Leonardo AI Logo.png', alt: 'Leonardo AI', name: 'Leonardo AI', showText: false },
    { src: '/Make Logo copy.png', alt: 'Make', name: 'Make', showText: false },
    { src: '/claude_ai_logo.png', alt: 'Claude AI', name: 'Claude AI', showText: false },
    { src: '/Hailuo AI Logo.png', alt: 'Hailuo AI', name: 'Hailuo AI', showText: false },
    { src: '/Midjourney Logo.png', alt: 'Midjourney', name: 'Midjourney', showText: true },
    { src: '/Google DeepMind Logo.png', alt: 'Google DeepMind', name: 'Google DeepMind', showText: false },
    { src: '/Kling AI Logo.png', alt: 'Kling AI', name: 'Kling AI', showText: false },
    { src: '/Google Gemini Logo copy.png', alt: 'Google Gemini', name: 'Google Gemini', showText: false },
    { src: '/ElevenLabs Logo.png', alt: 'ElevenLabs', name: 'ElevenLabs', showText: false },
    { src: '/Grok Logo.png', alt: 'Grok', name: 'Grok', showText: false },
    { src: '/DeepSeek AI Logo copy.png', alt: 'DeepSeek AI', name: 'DeepSeek AI', showText: false },
    { src: '/OpenAI Logo.png', alt: 'OpenAI', name: 'OpenAI', showText: false },
    { src: '/Google AI Logo.png', alt: 'Google AI', name: 'Google AI', showText: false },
    { src: '/Microsoft Copilot Logo.png', alt: 'Microsoft Copilot', name: 'Microsoft Copilot', showText: false },
    { src: '/n8n Logo.png', alt: 'n8n', name: 'n8n', showText: false },
    { src: '/OpenArt Logo.png', alt: 'OpenArt', name: 'OpenArt', showText: false },
    { src: '/Perplexity AI Logo.png', alt: 'Perplexity AI', name: 'Perplexity AI', showText: false },
    { src: '/Retell AI Logo.png', alt: 'Retell AI', name: 'Retell AI', showText: false },
    { src: '/Zapier Logo.png', alt: 'Zapier', name: 'Zapier', showText: false },
    { src: '/Runway Logo.png', alt: 'Runway', name: 'Runway', showText: false },
  ];

  return (
    <section className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Harnessing The World's Most Advanced Technology
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A curated selection of tools I use daily
          </p>
        </div>

        <div className="brand-carousel-container">
          <div className="brand-carousel-track">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="brand-carousel-set">
                {logos.map((logo, index) => (
                  <div key={`${setIndex}-${index}`} className={`brand-logo-item ${logo.showText ? 'brand-logo-with-text' : ''}`}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`brand-logo-img ${logo.name === 'OpenAI' ? 'openai-logo' : ''} ${logo.name === 'Kling AI' ? 'kling-logo' : ''} ${logo.name === 'Midjourney' ? 'midjourney-logo' : ''} ${logo.name === 'ElevenLabs' ? 'elevenlabs-logo' : ''} ${logo.name === 'Google AI' ? 'google-ai-logo' : ''} ${logo.name === 'Claude AI' ? 'claude-logo' : ''} ${logo.name === 'DeepSeek AI' ? 'deepseek-logo' : ''} ${logo.name === 'Google DeepMind' ? 'deepmind-logo' : ''} ${logo.name === 'Make' ? 'make-logo' : ''} ${logo.name === 'Google Gemini' ? 'gemini-logo' : ''} ${logo.name === 'Hailuo AI' ? 'hailuo-logo' : ''} ${logo.name === 'Grok' ? 'grok-logo' : ''} ${logo.name === 'Leonardo AI' ? 'leonardo-logo' : ''} ${logo.name === 'Microsoft Copilot' ? 'copilot-logo' : ''} ${logo.name === 'n8n' ? 'n8n-logo' : ''} ${logo.name === 'OpenArt' ? 'openart-logo' : ''} ${logo.name === 'Perplexity AI' ? 'perplexity-logo' : ''} ${logo.name === 'Retell AI' ? 'retell-logo' : ''} ${logo.name === 'Zapier' ? 'zapier-logo' : ''} ${logo.name === 'Runway' ? 'runway-logo' : ''}`}
                    />
                    {logo.showText && (
                      <span className="brand-logo-text">{logo.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="brand-carousel-container mt-8">
          <div className="brand-carousel-track-reverse">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="brand-carousel-set">
                {logosReverse.map((logo, index) => (
                  <div key={`reverse-${setIndex}-${index}`} className={`brand-logo-item ${logo.showText ? 'brand-logo-with-text' : ''}`}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`brand-logo-img ${logo.name === 'OpenAI' ? 'openai-logo' : ''} ${logo.name === 'Kling AI' ? 'kling-logo' : ''} ${logo.name === 'Midjourney' ? 'midjourney-logo' : ''} ${logo.name === 'ElevenLabs' ? 'elevenlabs-logo' : ''} ${logo.name === 'Google AI' ? 'google-ai-logo' : ''} ${logo.name === 'Claude AI' ? 'claude-logo' : ''} ${logo.name === 'DeepSeek AI' ? 'deepseek-logo' : ''} ${logo.name === 'Google DeepMind' ? 'deepmind-logo' : ''} ${logo.name === 'Make' ? 'make-logo' : ''} ${logo.name === 'Google Gemini' ? 'gemini-logo' : ''} ${logo.name === 'Hailuo AI' ? 'hailuo-logo' : ''} ${logo.name === 'Grok' ? 'grok-logo' : ''} ${logo.name === 'Leonardo AI' ? 'leonardo-logo' : ''} ${logo.name === 'Microsoft Copilot' ? 'copilot-logo' : ''} ${logo.name === 'n8n' ? 'n8n-logo' : ''} ${logo.name === 'OpenArt' ? 'openart-logo' : ''} ${logo.name === 'Perplexity AI' ? 'perplexity-logo' : ''} ${logo.name === 'Retell AI' ? 'retell-logo' : ''} ${logo.name === 'Zapier' ? 'zapier-logo' : ''} ${logo.name === 'Runway' ? 'runway-logo' : ''}`}
                    />
                    {logo.showText && (
                      <span className="brand-logo-text">{logo.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
