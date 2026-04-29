import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Zap, MessageSquare, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Navigation } from '../components/Navigation';

interface AutomationSection {
  icon: React.ReactNode;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  title: string;
  subtitle: string;
  description: string;
  covers: string[];
  aiAngle: string;
  path: string | null;
  buttonText: string;
}

const sections: AutomationSection[] = [
  {
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/30',
    title: 'AI Chat & Voice Agents',
    subtitle: '24/7 intelligent conversations at unlimited scale',
    description:
      'Modern customers expect instant answers — not hold music and ticket queues. AI chat and voice agents deliver human-like responses around the clock, handling the full weight of first-line customer interactions so your team can focus on complex, high-value work that genuinely requires a human touch.',
    covers: [
      'Custom-trained chatbots built on your brand voice and knowledge base',
      'Voice agents for inbound call handling and automated phone support',
      'Multi-language support across all major global languages',
      'Intelligent conversation routing and seamless human handoff',
      'Integration with your website, WhatsApp, Instagram, and more',
      'Conversation analytics and continuous performance improvement',
    ],
    aiAngle:
      'These agents are powered by the latest large language models — fine-tuned on your specific products, tone, and FAQs so responses feel on-brand, not robotic. Every conversation is logged and analysed, allowing the agent to get smarter over time without any manual effort.',
    path: null,
    buttonText: 'Coming Soon',
  },
  {
    icon: <Zap className="w-8 h-8 text-green-400" />,
    accentColor: 'text-green-400',
    accentBg: 'bg-green-500/10',
    accentBorder: 'border-green-500/30',
    title: 'Lead Generation',
    subtitle: 'Automated pipelines that fill themselves',
    description:
      'A leaky pipeline kills revenue quietly. AI-powered lead generation builds a systematic, always-on acquisition engine — capturing prospects at the right moment, qualifying them automatically, and delivering only the warmest leads to your sales team. No more wasted calls on cold or unqualified contacts.',
    covers: [
      'AI-powered lead capture forms and conversational landing pages',
      'Automated lead scoring based on behaviour, fit, and intent signals',
      'Multi-channel outreach sequences — email, SMS, and social DMs',
      'Personalised follow-up workflows triggered by prospect actions',
      'Real-time lead routing to the right sales rep or team',
      'Pipeline reporting and attribution tracking from first touch to close',
    ],
    aiAngle:
      'AI enables hyper-personalised outreach at a scale no human team could match — generating tailored message variations for every prospect segment, predicting which leads are most likely to convert, and automatically adjusting follow-up timing based on engagement patterns.',
    path: '/examples/lead-generation',
    buttonText: 'View Examples',
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
    accentColor: 'text-orange-400',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/30',
    title: 'CRM Integration & Workflow Automation',
    subtitle: 'Your tools working together, automatically',
    description:
      'Disconnected tools create manual work, data silos, and missed opportunities. CRM integration ties your entire tech stack together — so every customer interaction, lead update, and pipeline movement is captured, synced, and acted on in real time without anyone lifting a finger.',
    covers: [
      'Two-way CRM sync across HubSpot, Salesforce, Pipedrive, and more',
      'Automated data entry — contacts, deals, and activity logging',
      'Custom workflow triggers based on CRM events and field changes',
      'Cross-platform automation using Make (Integromat), Zapier, and n8n',
      'Internal notifications and task assignment based on deal stage',
      'Reporting dashboards that pull live data from every connected tool',
    ],
    aiAngle:
      'AI layers intelligence on top of raw CRM data — automatically enriching contact records with company data and social profiles, flagging deals that are at risk of going cold, and generating personalised outreach suggestions based on a prospect\'s full interaction history.',
    path: '/examples/crm-integration',
    buttonText: 'View Examples',
  },
];

export function AIAutomationServices() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navigation currentPage="automation" />

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
                AI Automation
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation that works 24/7 — capturing leads, handling conversations, and syncing your entire tech stack without manual effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300${index === 2 ? ' md:col-span-2' : ''}`}
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

                <div className={`rounded-xl p-5 ${section.accentBg} border ${section.accentBorder} mb-6`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className={`w-4 h-4 ${section.accentColor}`} />
                    <span className={`text-sm font-semibold uppercase tracking-widest ${section.accentColor}`}>
                      The AI Angle
                    </span>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{section.aiAngle}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  {section.path ? (
                    <Link
                      to={section.path}
                      className="inline-flex items-center px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>{section.buttonText}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-gray-400 font-medium rounded-full opacity-50 cursor-not-allowed"
                    >
                      <span>Examples Coming Soon</span>
                    </button>
                  )}
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
