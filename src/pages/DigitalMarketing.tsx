import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, MousePointer, Share2, Mail, BarChart2, CheckCircle, Sparkles } from 'lucide-react';
import { Navigation } from '../components/Navigation';

interface MarketingSection {
  icon: React.ReactNode;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  title: string;
  subtitle: string;
  description: string;
  covers: string[];
  aiAngle: string;
}

const sections: MarketingSection[] = [
  {
    icon: <Search className="w-8 h-8 text-cyan-400" />,
    accentColor: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10',
    accentBorder: 'border-cyan-500/30',
    title: 'Search Engine Optimization (SEO) & Content Strategy',
    subtitle: 'Organic growth that compounds over time',
    description:
      'Sustainable, long-term visibility built on a foundation of relevance and authority. SEO is not a one-time fix — it is a strategic discipline that rewards consistency, technical rigor, and genuinely useful content.',
    covers: [
      'Keyword research and search intent mapping',
      'On-page SEO — optimizing titles, structure, and content',
      'Off-page SEO — building high-quality backlinks and domain authority',
      'Technical SEO — site speed, crawlability, Core Web Vitals, and indexing',
      'High-quality blog and article content that ranks and converts',
      'Content calendars aligned to seasonal trends and search demand',
    ],
    aiAngle:
      'I leverage AI for programmatic SEO at scale — clustering thousands of keywords into logical topic pillars, generating SEO-optimized content outlines in minutes, and using AI-powered tools to identify ranking opportunities competitors have missed.',
  },
  {
    icon: <MousePointer className="w-8 h-8 text-yellow-400" />,
    accentColor: 'text-yellow-400',
    accentBg: 'bg-yellow-500/10',
    accentBorder: 'border-yellow-500/30',
    title: 'Paid Advertising (PPC & SEM)',
    subtitle: 'Precision targeting with maximum return on ad spend',
    description:
      'Paid advertising done right is not about spending more — it is about spending smarter. Every dollar of budget is accountable, every campaign is measurable, and every creative asset is tested to find what actually converts.',
    covers: [
      'Google Ads (Search, Display, Shopping) — Search Engine Marketing (SEM)',
      'Pay-Per-Click (PPC) campaign strategy, setup, and management',
      'Pinterest Ads and TikTok Ads for high-intent visual audiences',
      'Demographic and interest-based audience targeting',
      'Budget management and bid strategy optimisation',
      'Return on Ad Spend (ROAS) tracking and performance reporting',
    ],
    aiAngle:
      'AI supercharges paid campaigns by automating A/B tests across dozens of ad copy variations simultaneously, generating ad creatives at scale using the same image and video generation capabilities showcased elsewhere in this portfolio, and applying predictive AI for smarter audience targeting before a single dollar is spent.',
  },
  {
    icon: <Share2 className="w-8 h-8 text-pink-400" />,
    accentColor: 'text-pink-400',
    accentBg: 'bg-pink-500/10',
    accentBorder: 'border-pink-500/30',
    title: 'Social Media Marketing (SMM)',
    subtitle: 'Building authentic community and lasting brand presence',
    description:
      'Social media success is not just about posting consistently — it is about understanding the unique culture and algorithm of each platform, then creating content that genuinely resonates. A strong organic presence compounds in value the same way a good reputation does.',
    covers: [
      'Multi-platform profile strategy and management (Instagram, TikTok, LinkedIn, Pinterest)',
      'Platform-specific content creation tailored to each algorithm',
      'Community management — responding, engaging, and building loyalty',
      'Consistent posting schedules and content pillar frameworks',
      'Hashtag research and discoverability optimisation',
      'Performance analysis and strategy iteration based on real data',
    ],
    aiAngle:
      'AI is used for real-time trend analysis to catch emerging topics before they peak, generating full content calendars in hours instead of days, and automating social media scheduling workflows — freeing up time to focus on strategy and community rather than logistics.',
  },
  {
    icon: <Mail className="w-8 h-8 text-green-400" />,
    accentColor: 'text-green-400',
    accentBg: 'bg-green-500/10',
    accentBorder: 'border-green-500/30',
    title: 'Email Marketing & Lead Nurturing',
    subtitle: 'Direct, personal communication with your warmest audience',
    description:
      'Email remains one of the highest-ROI marketing channels available. An engaged email list is an owned asset — not subject to algorithm changes or platform fees. Done well, it turns cold leads into loyal customers through intelligent, personalised automation.',
    covers: [
      'Email list building strategy and lead magnet design',
      'Newsletter design, copywriting, and brand voice consistency',
      'Automated drip campaigns — welcome sequences, re-engagement, and abandoned cart flows',
      'List segmentation based on behaviour, interests, and funnel stage',
      'Open rate, click-through rate, and conversion tracking',
      'Deliverability optimisation to ensure emails actually land in inboxes',
    ],
    aiAngle:
      'This ties directly to the AI Automation capabilities in this portfolio — building end-to-end lead-nurturing workflows that trigger personalised email sequences based on user behaviour, and using AI to generate and A/B test high-converting subject lines that dramatically lift open rates.',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-400" />,
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/30',
    title: 'Data Analytics & Conversion Rate Optimisation (CRO)',
    subtitle: 'Making every data point count',
    description:
      'Marketing without measurement is just guesswork. This discipline closes the loop — connecting traffic, behaviour, and outcomes into a clear picture of what is working, what is not, and where the next improvement should come from.',
    covers: [
      'Google Analytics 4 (GA4) setup, configuration, and event tracking',
      'User behaviour analysis — heatmaps, session recordings, and funnel drop-off',
      'KPI dashboard creation for real-time performance visibility',
      'A/B and multivariate testing to improve conversion rates',
      'Conversion Rate Optimisation — turning more visitors into customers',
      'Attribution modelling to understand which channels drive real results',
    ],
    aiAngle:
      'AI data analysis tools are applied to automatically spot traffic anomalies and emerging trends, predict customer churn before it happens, and generate automated weekly performance reports — making it possible to act on insights faster than any manual review process allows.',
  },
];

export function DigitalMarketing() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navigation currentPage="digital-marketing" />

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="pt-16">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enhance your digital marketing with AI — from SEO and paid ads to email automation and analytics, built to attract, engage, and convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300${index === 4 ? ' md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className={`p-3 rounded-xl ${section.accentBg} border ${section.accentBorder} flex-shrink-0`}>
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{section.title}</h2>
                    <p className={`text-sm font-medium tracking-wide ${section.accentColor}`}>{section.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">{section.description}</p>

                <div className="mb-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.covers.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`rounded-xl p-5 ${section.accentBg} border ${section.accentBorder}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className={`w-4 h-4 ${section.accentColor}`} />
                    <span className={`text-sm font-semibold uppercase tracking-widest ${section.accentColor}`}>
                      The AI Angle
                    </span>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{section.aiAngle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 py-12 px-4 relative z-10 mt-16">
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
  );
}
