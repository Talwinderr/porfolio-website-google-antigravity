import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export function AboutMe() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen text-white bg-black flex flex-col">
      <Navigation currentPage="about" />

      <main className="flex-grow">
        {/* Hero / Intro Block — Magazine Layout */}
        <section className="px-4 pt-24 pb-16">
          <div className="max-w-5xl mx-auto">

            {/* Magazine masthead */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-white/40" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium">About the Creator</p>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Magazine grid: large image left, editorial right */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-12 items-start">

              {/* Left — Large image */}
              <div
                className="relative select-none rounded-2xl border border-white/10 overflow-hidden"
                onContextMenu={handleContextMenu}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                <img
                  src="https://assets.tallyautomation.com/tally-black%20and%20white%20shot.jpg"
                  alt="Tally"
                  className="w-full h-auto block pointer-events-none"
                  draggable={false}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                  style={{
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    WebkitUserDrag: 'none',
                    display: 'block',
                  }}
                />
                <div className="absolute inset-0 z-20 rounded-2xl" onContextMenu={handleContextMenu} />
              </div>

              {/* Right — Editorial content */}
              <div className="flex flex-col py-2 mt-10 md:mt-0">
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
                  <span className="bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                    Hi, I'm Tally.
                  </span>
                </h1>
                <div className="w-full h-px bg-white/10 mb-8" />
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My journey and passion for AI started the same way it did for many others: through curiosity,
                  experimentation, and a fair share of trial and error.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Body Content */}
        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-8">

            <p className="text-lg text-gray-300 leading-relaxed">
              Before AI even started to become mainstream — when ChatGPT was publicly released in late 2022 — I was
              heavily involved in the e-commerce sector, where I was building my skills in digital marketing. My first
              store, built on platforms like Shopify and Etsy, was in the home décor niche, selling unique products like
              humanoid sculpture lamps and wall art. When I noticed that my artwork category was consistently
              outperforming everything else, I pivoted and launched a new e-commerce store focused entirely on art prints.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Because art prints were more affordable, offered greater variety, and were easier for customers to justify
              buying than furniture, I saw far more success than with my first store. When I looked at my sales metrics,
              I noticed that many of my original customers from the first store were now buying from my art prints store.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With my target audience locked in, I leaned into content creation to grow and create awareness. Platforms
              like Pinterest and TikTok proved to be the most effective, and I didn't spend any money on ads — it was
              all organic content. On Pinterest especially, if your SEO and visual content are strong, you will always
              get engagement. At my peak, my account had over 2 million monthly views without a single penny spent on
              advertising.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Around early 2023, when the first public AI video generation tools like Runway started appearing, I had a
              lightbulb moment. I began animating my static art prints — turning artwork into moving, breathing stories.
              The results were magic. Engagement exploded. Sales followed. And I got really good at pivoting whenever
              the algorithms changed (TikTok, I'm looking at you). One week it was short vertical videos; the next it
              was carousels or trending sounds — I just kept creating and adapting.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              But as generative AI became available to everyone, the art print world changed almost overnight. The
              market was suddenly flooded with AI-generated designs, and the ongoing problem of design theft became
              even worse. My store was still profitable, but I could clearly see it wasn't built to last. Instead of
              fighting the wave, I decided to ride it. I was already intrigued by AI through my own hands-on
              experience, and I knew this technology wasn't just a tool; it was the future.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              So I pivoted again and eventually left the e-commerce sector when profits dried up. And I know what you
              might be thinking: did I just quit? No. I was still working full time, and all of this was happening on
              the side, so I didn't have enough time to focus on everything at once. I had to choose. I left the world
              of e-commerce because I wanted to be fully involved in the growing AI space.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Bringing together my skills and experience in business, digital marketing, content creation, and now
              generative AI and automation, I built my portfolio to showcase what I can do.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's producing unique content creation for marketing campaigns or setting up agentic AI agents for specific
              use cases, my goal is always the same: make advanced AI simple and ridiculously effective.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              But AI isn't the only thing I focus on. Over the years, I've also built a strong foundation in website design, UI/UX optimization, SEO, digital marketing, and ad campaign management. I've spent countless hours testing what works online — from designing high-converting pages to improving visibility through smart SEO strategies. Combined with the power of AI, this broader skill set has become a pretty potent mix.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Take a look around, and when you're ready to explore what AI can do for you, I'd love to chat.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to Nova by Tally — or just Tally. It's just me 💯
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 px-4">
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
    </div>
  );
}
