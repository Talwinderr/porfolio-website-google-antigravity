import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Zap, MessageSquare, PenTool, ArrowRight, BarChart, Clock, DollarSign, ChevronDown, CheckCircle, Bot, Globe, Camera } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import '../styles/animated-border.css';

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: "AI Chat & Voice Agents",
      description: "Deploy intelligent conversational AI that handles customer inquiries 24/7 with human-like responses across multiple channels.",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Voice and text capabilities",
        "Seamless human handoffs",
        "Custom training on your data",
        "Integration with existing systems"
      ],
      benefits: [
        "Reduce response time from hours to seconds",
        "Cut customer service costs by up to 70%",
        "Handle unlimited conversations simultaneously",
        "Improve customer satisfaction scores"
      ],
      metrics: {
        roi: "300% average ROI within 6 months",
        efficiency: "85% reduction in wait times",
        satisfaction: "92% positive customer feedback"
      },
      caseStudy: {
        company: "E-commerce Platform",
        result: "Reduced support costs by $2M annually while improving CSAT scores by 35%"
      }
    },
    {
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "Lead Generation & Qualification",
      description: "Automate your entire lead generation process with AI that identifies, engages, and qualifies prospects automatically.",
      features: [
        "Intelligent lead scoring",
        "Automated outreach campaigns",
        "Real-time lead qualification",
        "CRM integration",
        "Performance analytics",
        "A/B testing capabilities"
      ],
      benefits: [
        "Identify and engage high-value prospects automatically",
        "Qualify leads based on custom criteria",
        "Generate detailed prospect insights",
        "Scale outreach without increasing headcount"
      ],
      metrics: {
        roi: "250% increase in qualified leads",
        efficiency: "60% reduction in lead qualification time",
        satisfaction: "40% higher conversion rates"
      },
      caseStudy: {
        company: "B2B Software Company",
        result: "Generated $5M in additional pipeline value within 3 months"
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
      title: "CRM Integration & Automation",
      description: "Seamlessly connect AI capabilities with your existing CRM and business tools for complete workflow automation.",
      features: [
        "Real-time data synchronization",
        "Custom workflow automation",
        "Advanced analytics dashboard",
        "Multi-platform integration",
        "Automated reporting",
        "Data enrichment"
      ],
      benefits: [
        "Automate data entry and updates",
        "Generate AI-powered insights",
        "Streamline workflow automation",
        "Eliminate manual processes"
      ],
      metrics: {
        roi: "200% ROI through time savings",
        efficiency: "90% reduction in manual data entry",
        satisfaction: "95% team adoption rate"
      },
      caseStudy: {
        company: "Financial Services Firm",
        result: "Saved 2,000 work hours monthly through automation"
      }
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-400" />,
      title: "Website Creation",
      description: "Build professional, responsive websites automatically with AI-powered design and development that adapts to your brand.",
      features: [
        "Custom design generation",
        "Mobile-first responsive design",
        "SEO optimization built-in",
        "Content management system",
        "E-commerce integration",
        "Performance optimization"
      ],
      benefits: [
        "Launch professional websites in hours, not weeks",
        "Automatically optimized for all devices",
        "Built-in SEO best practices",
        "Scalable architecture for growth"
      ],
      metrics: {
        roi: "500% faster website deployment",
        efficiency: "90% reduction in development time",
        satisfaction: "95% mobile performance scores"
      },
      caseStudy: {
        company: "Retail Chain",
        result: "Launched 50 store websites in 2 weeks, increasing online sales by 200%"
      }
    },
    {
      icon: <Camera className="w-12 h-12 text-pink-400" />,
      title: "Image & Video Generation",
      description: "Create stunning visuals and engaging video content automatically with AI-powered media generation that maintains brand consistency.",
      features: [
        "Custom image creation",
        "Video content automation",
        "Brand-consistent visuals",
        "Multi-format output",
        "Batch processing",
        "Style customization"
      ],
      benefits: [
        "Generate unlimited branded visuals",
        "Create video content at scale",
        "Maintain consistent brand identity",
        "Reduce creative production costs"
      ],
      metrics: {
        roi: "300% increase in visual content output",
        efficiency: "80% reduction in design costs",
        satisfaction: "90% brand consistency score"
      },
      caseStudy: {
        company: "Social Media Agency",
        result: "Generated 10,000+ branded images monthly, reducing design costs by 70%"
      }
    },
    {
      icon: <PenTool className="w-12 h-12 text-orange-400" />,
      title: "Content Creation",
      description: "Scale your content creation and social media presence with AI that maintains your brand voice across all channels.",
      features: [
        "AI content generation",
        "Brand voice consistency",
        "Multi-platform scheduling",
        "Performance optimization",
        "Audience analysis",
        "Content personalization"
      ],
      benefits: [
        "Generate engaging content consistently",
        "Maintain brand voice across channels",
        "Optimize content performance",
        "Scale content production efficiently"
      ],
      metrics: {
        roi: "400% increase in content output",
        efficiency: "75% reduction in content creation time",
        satisfaction: "80% increase in engagement"
      },
      caseStudy: {
        company: "Marketing Agency",
        result: "Tripled content output while reducing costs by 50%"
      }
    }
  ];

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        <Navigation currentPage="services" />

        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20 pt-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                AI Solutions That Drive Results
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My comprehensive AI suite delivers measurable business impact through increased efficiency,
              reduced costs, and enhanced customer experiences.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`relative ${index === 4 ? 'animated-border-wrapper' : ''}`}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center space-x-4 mb-8">
                      {service.icon}
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center">
                          <BarChart className="w-5 h-5 mr-2" />
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center">
                          <ArrowRight className="w-5 h-5 mr-2" />
                          Business Benefits
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <ArrowRight className="w-5 h-5 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-6 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Performance Metrics
                      </h3>
                      <div className="grid gap-6">
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl">
                          <div className="text-sm text-gray-400 mb-2">ROI Potential</div>
                          <div className="text-lg font-semibold text-white">{service.metrics.roi}</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl">
                          <div className="text-sm text-gray-400 mb-2">Efficiency Gain</div>
                          <div className="text-lg font-semibold text-white">{service.metrics.efficiency}</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl">
                          <div className="text-sm text-gray-400 mb-2">Success Rate</div>
                          <div className="text-lg font-semibold text-white">{service.metrics.satisfaction}</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Success Story
                      </h3>
                      <div className="text-sm text-gray-400 mb-2">{service.caseStudy.company}</div>
                      <div className="text-lg text-gray-200">{service.caseStudy.result}</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {services.map((service, index) => (
              <div key={index} className={`relative ${index === 4 ? 'animated-border-wrapper-mobile' : ''}`}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden relative z-10">
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <h2 className="text-xl font-bold text-left">{service.title}</h2>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 transition-transform duration-300 ${
                      expandedService === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedService === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0 space-y-6">
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>

                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center">
                        <BarChart className="w-4 h-4 mr-2" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Key Metrics
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg">
                          <div className="text-xs text-gray-400">ROI</div>
                          <div className="text-sm font-semibold">{service.metrics.roi}</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg">
                          <div className="text-xs text-gray-400">Efficiency</div>
                          <div className="text-sm font-semibold">{service.metrics.efficiency}</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg">
                          <div className="text-xs text-gray-400">Success Rate</div>
                          <div className="text-sm font-semibold">{service.metrics.satisfaction}</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold flex items-center mb-2">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Success Story
                      </h3>
                      <div className="text-xs text-gray-400">{service.caseStudy.company}</div>
                      <div className="text-sm mt-1 text-gray-200">{service.caseStudy.result}</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}