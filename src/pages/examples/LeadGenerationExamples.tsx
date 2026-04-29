import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Target, Users, Mail, TrendingUp, CheckCircle, ArrowRight, Play, Pause, RotateCcw, Zap, BarChart3, Clock, Star } from 'lucide-react';
import { Navigation } from '../../components/Navigation';

export function LeadGenerationExamples() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [leadScore, setLeadScore] = useState(0);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const leadGenerationSteps = [
    {
      id: 1,
      title: "Prospect Identification",
      description: "AI scans multiple data sources to identify potential leads",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      data: {
        source: "LinkedIn, Company Databases, Web Scraping",
        prospects: 1247,
        criteria: "Tech companies, 50-500 employees, Recent funding"
      },
      scoreIncrease: 0
    },
    {
      id: 2,
      title: "Lead Qualification",
      description: "AI analyzes company data and assigns qualification scores",
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      data: {
        source: "LinkedIn, Company Databases, Web Scraping",
        prospects: 1247,
        criteria: "Tech companies, 50-500 employees, Recent funding",
        qualified: 342,
        avgScore: 72,
        topTier: 89
      },
      scoreIncrease: 25
    },
    {
      id: 3,
      title: "Personalized Outreach",
      description: "AI crafts personalized messages based on prospect data",
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      data: {
        source: "LinkedIn, Company Databases, Web Scraping",
        prospects: 1247,
        criteria: "Tech companies, 50-500 employees, Recent funding",
        qualified: 342,
        avgScore: 72,
        topTier: 89,
        emailsSent: 342,
        personalization: "Company news, Recent achievements, Pain points"
      },
      scoreIncrease: 20
    },
    {
      id: 4,
      title: "Response Tracking",
      description: "AI monitors responses and engagement metrics",
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      data: {
        source: "LinkedIn, Company Databases, Web Scraping",
        prospects: 1247,
        criteria: "Tech companies, 50-500 employees, Recent funding",
        qualified: 342,
        avgScore: 72,
        topTier: 89,
        emailsSent: 342,
        personalization: "Company news, Recent achievements, Pain points",
        responses: 89,
        responseRate: "26%",
        interested: 34
      },
      scoreIncrease: 30
    },
    {
      id: 5,
      title: "Lead Nurturing",
      description: "AI automatically nurtures leads with targeted follow-ups",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      data: {
        source: "LinkedIn, Company Databases, Web Scraping",
        prospects: 1247,
        criteria: "Tech companies, 50-500 employees, Recent funding",
        qualified: 342,
        avgScore: 72,
        topTier: 89,
        emailsSent: 342,
        personalization: "Company news, Recent achievements, Pain points",
        responses: 89,
        responseRate: "26%",
        interested: 34,
        nurtured: 34,
        meetings: 18,
        conversionRate: "53%"
      },
      scoreIncrease: 25
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          const nextStep = prev + 1;
          if (nextStep >= leadGenerationSteps.length) {
            setIsPlaying(false);
            setCompletedSteps([...Array(leadGenerationSteps.length).keys()]);
            return prev;
          }
          setCompletedSteps((prevCompleted) => [...prevCompleted, prev]);
          setLeadScore((prevScore) => prevScore + leadGenerationSteps[prev].scoreIncrease);
          return nextStep;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, leadGenerationSteps]);

  const handlePlay = () => {
    if (currentStep >= leadGenerationSteps.length - 1) {
      setCurrentStep(0);
      setCompletedSteps([]);
      setLeadScore(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setCompletedSteps([]);
    setLeadScore(0);
  };

  const capabilities = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "AI-Powered Prospecting",
      description: "Identify high-quality leads from multiple data sources using advanced AI algorithms"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Smart Lead Scoring",
      description: "Automatically score and prioritize leads based on conversion probability"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: "Personalized Outreach",
      description: "Generate personalized messages that resonate with each prospect's specific needs"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: "Performance Analytics",
      description: "Track and optimize campaign performance with detailed analytics and insights"
    }
  ];

  return (
    <>
      <div className="min-h-screen text-white relative bg-black">
        <Navigation currentPage="other" />

        <div className="max-w-7xl mx-auto px-4 py-24">
          {/* Header */}
          <div className="pt-16 mb-16">
            <Link 
              to="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Lead Generation Examples
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Discover how my AI-powered lead generation system identifies, qualifies, and nurtures
                high-quality prospects automatically, turning cold outreach into warm conversations.
              </p>
            </div>
          </div>

          {/* Interactive Workflow */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Interactive Lead Generation Demo
              </span>
            </h2>

            {/* Lead Score Display */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Campaign Performance Score</div>
                  <div className="text-4xl font-bold text-white mb-2">{leadScore}%</div>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(leadScore / 20) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3">
                <button
                  onClick={isPlaying ? handlePause : handlePlay}
                  className="flex items-center space-x-2 px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-2 px-4 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="max-w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                {leadGenerationSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Connection Line */}
                    {index < leadGenerationSteps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0"></div>
                    )}
                    
                    {/* Step Card */}
                    <div className={`relative z-10 bg-white/5 backdrop-blur-lg border rounded-2xl p-6 transition-all duration-500 ${
                      currentStep === index 
                        ? 'border-white/40 bg-white/10 scale-105' 
                        : completedSteps.includes(index)
                        ? 'border-green-400/40 bg-green-400/10'
                        : 'border-white/10'
                    }`}>
                      <div className="flex flex-col items-center text-center">
                        <div className={`mb-4 p-3 rounded-full transition-colors duration-500 ${
                          currentStep === index 
                            ? 'bg-white/20' 
                            : completedSteps.includes(index)
                            ? 'bg-green-400/20'
                            : 'bg-white/10'
                        }`}>
                          {completedSteps.includes(index) ? (
                            <CheckCircle className="w-8 h-8 text-green-400" />
                          ) : (
                            step.icon
                          )}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.description}</p>
                        {step.scoreIncrease > 0 && (
                          <div className="mt-2 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                            +{step.scoreIncrease}% Score
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Display */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Workflow Visualization</h3>
                
                {/* Workflow Steps Visualizer */}
                <div className="mb-8">
                  <div className="flex items-center justify-center pb-4 gap-x-4 px-4">
                    {leadGenerationSteps.map((step, index) => (
                      <div key={step.id} className="flex items-center flex-shrink-0">
                        {/* Step Node */}
                        <div className={`relative transition-all duration-500 ${
                          currentStep === index 
                            ? 'scale-110' 
                            : completedSteps.includes(index)
                            ? 'scale-105'
                            : 'scale-100'
                        }`}>
                          <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${
                            currentStep === index 
                              ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/25' 
                              : completedSteps.includes(index)
                              ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-500/25'
                              : 'bg-white/5 border-white/20'
                          }`}>
                            {completedSteps.includes(index) ? (
                              <CheckCircle className="w-8 h-8 text-green-400" />
                            ) : currentStep === index ? (
                              <div className="relative">
                                {step.icon}
                                <div className="absolute -inset-2 rounded-full border-2 border-blue-400 animate-ping opacity-30"></div>
                              </div>
                            ) : (
                              step.icon
                            )}
                          </div>
                          
                          {/* Step Label */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 text-center">
                            <div className={`text-xs font-medium transition-colors duration-300 ${
                              currentStep === index 
                                ? 'text-blue-300' 
                                : completedSteps.includes(index)
                                ? 'text-green-300'
                                : 'text-gray-400'
                            }`}>
                              {step.title}
                            </div>
                          </div>
                        </div>
                        
                        {/* Connection Line */}
                        {index < leadGenerationSteps.length - 1 && (
                          <div className="flex items-center mx-4">
                            <div className={`h-0.5 w-16 transition-all duration-500 ${
                              completedSteps.includes(index)
                                ? 'bg-gradient-to-r from-green-400 to-blue-400'
                                : currentStep === index
                                ? 'bg-gradient-to-r from-blue-400 to-gray-600'
                                : 'bg-gray-600'
                            }`}>
                              {(completedSteps.includes(index) || currentStep === index) && (
                                <div className="relative h-full">
                                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                                      completedSteps.includes(index) ? 'bg-green-400' : 'bg-blue-400'
                                    }`}></div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${
                              completedSteps.includes(index)
                                ? 'text-green-400'
                                : currentStep === index
                                ? 'text-blue-400'
                                : 'text-gray-600'
                            }`} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Dynamic Data Stream */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white">Data Stream</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-blue-300">Processing</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(leadGenerationSteps[currentStep]?.data || {}).map(([key, value], index) => (
                      <div
                        key={key}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-4 animate-fade-in-up"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </span>
                          {typeof value === 'number' && value > 50 && (
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        
                        <div className="text-white font-semibold">
                          {typeof value === 'string' && value.includes('%') ? (
                            <div className="space-y-2">
                              <span className="text-lg">{value}</span>
                              <div className="w-full bg-gray-700 rounded-full h-1.5">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-green-400 h-1.5 rounded-full transition-all duration-1000 ease-out"
                                  style={{ width: value }}
                                ></div>
                              </div>
                            </div>
                          ) : typeof value === 'number' ? (
                            <span className="text-xl font-bold">{value.toLocaleString()}</span>
                          ) : (
                            <span className="text-sm break-words">{value}</span>
                          )}
                        </div>
                        
                        {/* Data flow indicator */}
                        <div className="mt-3 flex items-center space-x-1">
                          <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 200}ms` }}
                              ></div>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">streaming</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Current Step Info */}
                  {currentStep < leadGenerationSteps.length && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-3"></div>
                        <span className="text-blue-300 font-medium">
                          Active: {leadGenerationSteps[currentStep]?.title}
                        </span>
                      </div>
                      <p className="text-gray-300 mt-2 ml-6">{leadGenerationSteps[currentStep]?.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                My Lead Generation Capabilities
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {capability.icon}
                    <h3 className="text-xl font-bold ml-4">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 mb-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Results That Speak for Themselves
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">250%</div>
                  <div className="text-gray-400">Increase in Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">60%</div>
                  <div className="text-gray-400">Reduction in Qualification Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">40%</div>
                  <div className="text-gray-400">Higher Conversion Rates</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

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
              <Link to="/services/ai-automation" className="text-gray-400 hover:text-white transition-colors">AI Automation</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Me</Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nova by Tally. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}