import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Brain, MessageSquare, Zap, ArrowRight, CheckCircle, Star, Globe, Camera, PenTool } from 'lucide-react';
import { BackgroundPaths } from './components/ui/background-paths';
import Galaxy from './components/Galaxy';
import HeroVideoBackground from './components/HeroVideoBackground';
import { BrandLogoCarousel } from './components/BrandLogoCarousel';
import { MeetIvy } from './components/MeetIvy';
import { AncientEgyptSection } from './components/AncientEgyptSection';
import { CreateAnything } from './components/CreateAnything';
import { MonochromeCardsSection } from './components/MonochromeCardsSection';
import { Navigation } from './components/Navigation';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { AIAutomationServices } from './pages/AIAutomationServices';
import { ContentCreationServices } from './pages/ContentCreationServices';
import { ContentMediaExamples } from './pages/examples/ContentMediaExamples';
import { CrmIntegrationExamples } from './pages/examples/CrmIntegrationExamples';
import { LeadGenerationExamples } from './pages/examples/LeadGenerationExamples';
import { ImageGenerationExamples } from './pages/examples/ImageGenerationExamples';
import { IvyShowcase } from './pages/examples/IvyShowcase';
import { AncientEgyptShowcase } from './pages/examples/AncientEgyptShowcase';
import { UXUIDesign } from './pages/UXUIDesign';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { AboutMe } from './pages/AboutMe';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}

function Home() {
  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();
  const handleDragStart = (e: React.DragEvent) => e.preventDefault();

  const achievements = [
    "#1 CONTENT CREATION",
    "#1 DIGITAL MARKETING",
    "#1 AI AUTOMATION"
  ];
  
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI Chat & Voice Agents",
      description: "24/7 intelligent customer service that never sleeps. Handle unlimited conversations simultaneously with human-like responses.",
      benefits: ["Instant response times", "Multi-language support", "Seamless handoffs"],
      path: null,
      buttonText: "Coming Soon"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Lead Generation",
      description: "Automated lead capture and qualification that fills your sales pipeline with high-quality prospects.",
      benefits: ["Smart lead scoring", "Automated follow-ups", "CRM integration"],
      path: "/examples/lead-generation",
      buttonText: "View Examples"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: "CRM Integration",
      description: "Seamlessly connect with your existing tools and workflows for maximum efficiency.",
      benefits: ["Real-time sync", "Custom workflows", "Data analytics"],
      path: "/examples/crm-integration",
      buttonText: "View Examples"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Website Creation",
      description: "Build professional, responsive websites automatically with AI-powered design and development.",
      benefits: ["Custom design generation", "Mobile-first approach", "SEO optimization"],
      path: null,
      buttonText: "Coming Soon"
    },
    {
      icon: <Camera className="w-8 h-8 text-pink-400" />,
      title: "Content Creation (Image & Video Generation)",
      description: "Scale your content creation and visual media production with AI-powered automation that generates professional images, videos, and social content.",
      benefits: ["Professional video creation", "Stunning image generation", "Brand consistency", "Multi-platform optimization", "Cinematic quality", "Unlimited creative potential"],
      path: "/examples/content-media",
      buttonText: "View Examples",
      dualButtons: true,
      imagePath: "/examples/image-generation"
    }
  ];


  return (
    <>
      <div className="min-h-screen text-white relative">
        <Navigation currentPage="home" noSpacer />

        {/* Hero Section */}
        <section className="px-4 flex items-center relative overflow-hidden" style={{height: '100vh'}}>
          <HeroVideoBackground
            videoUrl="https://assets.tallyautomation.com/black%20hole%204k%20background.mp4"
            posterUrl="/black-hole-poster.svg"
          />
          <div className="max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col">
            <div className="text-center w-full flex flex-col h-full">
              <div className="flex-grow flex flex-col justify-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-12 leading-tight text-center mx-auto">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Nova by Tally
                  </span>
                </h1>

              </div>

              <div className="pb-8 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <span>{achievement}</span>
                    {index < achievements.length - 1 && (
                      <span className="ml-4 md:ml-8 text-gray-600">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Welcome to my Portfolio Section — Magazine Layout */}
        <section className="py-20 px-4 relative z-10 border-b border-white/5">
          <div className="max-w-6xl mx-auto">

            {/* Magazine header row */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-white/40" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium">Portfolio Introduction</p>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Magazine grid: large image left, stacked editorial content right */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-12 items-start">

              {/* Left — Large dominant image */}
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

              {/* Right — Editorial text column */}
              <div className="flex flex-col py-2 mt-10 md:mt-0">

                {/* Headline block */}
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-8 tracking-tight">
                    <span className="bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                      Welcome<br />to my<br />Portfolio
                    </span>
                  </h2>
                  <div className="w-full h-px bg-white/10 mb-8" />
                </div>

                {/* Body copy */}
                <div className="space-y-5 mb-8">
                  <p className="text-base text-gray-300 leading-relaxed">
                    Hi, I'm Tally. My journey into AI began with curiosity and hands-on experimentation — long before it became mainstream. I first built my skills in digital marketing while running a couple of e-commerce stores, growing an art prints brand to over <span className="text-white font-medium">2 million monthly Pinterest views</span> entirely through organic content.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    When the first AI video tools like Runway emerged in 2023, I started using it for content creation and watched engagement explode across social media platforms. That spark turned into a full pivot — away from e-commerce and into the world of <span className="text-white font-medium">generative AI and automation</span>.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Today I combine AI expertise with a strong background in website design, UI/UX, SEO, and digital marketing to help others make advanced AI simple and ridiculously effective.
                  </p>
                </div>

                <div className="w-full h-px bg-white/10 mb-8" />
                <div>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-3 px-7 py-3 border border-white/20 rounded-full text-sm font-medium tracking-wide text-white hover:bg-white hover:text-black transition-all duration-300 group whitespace-nowrap"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Galaxy Background - Disabled for homepage, kept for other pages */}
        {/* To re-enable Galaxy on homepage, uncomment below:
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.0}
            glowIntensity={0.22}
            saturation={0.0}
            hueShift={240}
          />
        </div>
        */}

        {/* Content Creation Highlights Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Content Creation Highlights
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A short look at some of my professional video productions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1M-711ZqtXyPfnhFRCM7L_rypCQpWwlRu/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Aston Martin DB12S - V8 Performance Shaped into Refinement</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A breathtaking cinematic showcase of the Aston Martin DB12S, captured in a beautiful ambient blue backdrop that perfectly complements the vehicle's elegant design. This masterpiece highlights the DB12S's powerful V8 performance merged seamlessly with refined British luxury.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        Cinematic Showcase
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        V8 Performance
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        Ambient Cinematography
                      </span>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30">
                        Refined Luxury
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        British Craftsmanship
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1ydt5YwMYuTPM5aTK4x7moyQRXBnuAiYB/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">The Bank Heist — A High-Stakes Cinematic Action Thriller</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A gritty, adrenaline-fuelled cinematic experience that plays like a real Hollywood blockbuster. Pulse-pounding bank heist sequences unfold through brutal hand-to-hand combat, explosive car chases through narrow city streets, and high-tension action beats that keep you on the edge of your seat from the first frame to the last. Raw. Visceral. Cinematic.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm border border-red-600/30">
                        Gritty Realism
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        High Adrenaline
                      </span>
                      <span className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm border border-slate-500/30">
                        Car Chases
                      </span>
                      <span className="px-3 py-1 bg-rose-600/20 text-rose-400 rounded-full text-sm border border-rose-600/30">
                        Cinematic Combat
                      </span>
                      <span className="px-3 py-1 bg-zinc-500/20 text-zinc-300 rounded-full text-sm border border-zinc-500/30">
                        Bank Heist
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1PAM6wVKSrUHLlOZqaVA3TRyGRnQRo3QT/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Beethoven - An Immortal Symphony Trailer</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A sweeping cinematic trailer reimagining the life and legacy of Ludwig van Beethoven through the lens of AI-generated visuals. This dramatic production captures the raw emotion, genius, and defiance of one of history's greatest composers, blending period grandeur with modern cinematic storytelling to create a deeply moving tribute to an immortal musical legacy.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30">
                        Cinematic Trailer
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        Period Drama
                      </span>
                      <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-sm border border-rose-500/30">
                        Emotional Storytelling
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                        Musical Legacy
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        Historical Epic
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1UMJKCxixZmuWFm9pLsOjy_eyWxPnposv/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Cleopatra: Before the Throne (Trailer)</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Cleopatra faces off against her brother, Ptolemy XIII, after their father, Ptolemy Auletes, leaves the throne to both siblings, with his initial wish for them to rule Egypt together, side by side. A cinematic trailer exploring the origins of one of history's most commanding figures — before the crown, before the legend.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Creative Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm border border-amber-600/30">
                        Ancient Egypt
                      </span>
                      <span className="px-3 py-1 bg-rose-700/20 text-rose-400 rounded-full text-sm border border-rose-700/30">
                        Political Rivalry
                      </span>
                      <span className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm border border-slate-500/30">
                        Historical Drama
                      </span>
                      <span className="px-3 py-1 bg-yellow-700/20 text-yellow-500 rounded-full text-sm border border-yellow-700/30">
                        Dynastic Succession
                      </span>
                      <span className="px-3 py-1 bg-stone-500/20 text-stone-300 rounded-full text-sm border border-stone-500/30">
                        Cinematic Trailer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Logo Carousel Section */}
        <BrandLogoCarousel />

        {/* Meet Ivy Section */}
        <section className="relative z-10 px-4 md:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <MeetIvy compact={true} />
          </div>
        </section>

        {/* Ancient Egypt Section */}
        <section className="relative z-10 px-4 md:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <AncientEgyptSection />
          </div>
        </section>

        {/* Create Anything Section */}
        <CreateAnything />

        {/* Monochrome Cards Section */}
        <MonochromeCardsSection />

        {/* Footer */}
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
                <Link to="/digital-marketing" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-automation" element={<AIAutomationServices />} />
        <Route path="/services/content-creation" element={<ContentCreationServices />} />
        <Route path="/examples/content-media" element={<ContentMediaExamples />} />
        <Route path="/examples/image-generation" element={<ImageGenerationExamples />} />
        <Route path="/examples/ivy-showcase" element={<IvyShowcase />} />
        <Route path="/examples/ancient-egypt-showcase" element={<AncientEgyptShowcase />} />
        <Route path="/examples/crm-integration" element={<CrmIntegrationExamples />} />
        <Route path="/examples/lead-generation" element={<LeadGenerationExamples />} />
        <Route path="/ux-ui-design" element={<UXUIDesign />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;