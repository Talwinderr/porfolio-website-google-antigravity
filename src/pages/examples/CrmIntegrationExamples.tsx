import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Database, Users, Mail, CheckCircle, ArrowRight, Play, Pause, RotateCcw, Zap, Target, BarChart3, Clock } from 'lucide-react';
import { Navigation } from '../../components/Navigation';

export function CrmIntegrationExamples() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const workflowSteps = [
    {
      id: 1,
      title: "Lead Capture",
      description: "Customer fills out contact form on website",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      data: {
        name: "Sarah Johnson",
        email: "sarah@techcorp.com",
        company: "TechCorp Solutions",
        interest: "AI Chat Agents"
      }
    },
    {
      id: 2,
      title: "Data Enrichment",
      description: "AI automatically enriches lead data with company information",
      icon: <Database className="w-8 h-8 text-green-400" />,
      data: {
        name: "Sarah Johnson",
        email: "sarah@techcorp.com",
        company: "TechCorp Solutions",
        interest: "AI Chat Agents",
        companySize: "50-200 employees",
        industry: "Software Development",
        revenue: "$5M-$10M",
        location: "San Francisco, CA"
      }
    },
    {
      id: 3,
      title: "Lead Scoring",
      description: "AI calculates lead score based on multiple factors",
      icon: <Target className="w-8 h-8 text-purple-400" />,
      data: {
        name: "Sarah Johnson",
        email: "sarah@techcorp.com",
        company: "TechCorp Solutions",
        interest: "AI Chat Agents",
        companySize: "50-200 employees",
        industry: "Software Development",
        revenue: "$5M-$10M",
        location: "San Francisco, CA",
        score: 85,
        priority: "High"
      }
    },
    {
      id: 4,
      title: "CRM Integration",
      description: "Lead data is automatically synced to your CRM system",
      icon: <Database className="w-8 h-8 text-orange-400" />,
      data: {
        name: "Sarah Johnson",
        email: "sarah@techcorp.com",
        company: "TechCorp Solutions",
        interest: "AI Chat Agents",
        companySize: "50-200 employees",
        industry: "Software Development",
        revenue: "$5M-$10M",
        location: "San Francisco, CA",
        score: 85,
        priority: "High",
        status: "New Lead",
        assignedTo: "Sales Team Alpha"
      }
    },
    {
      id: 5,
      title: "Automated Follow-up",
      description: "Personalized email sequence is triggered automatically",
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      data: {
        name: "Sarah Johnson",
        email: "sarah@techcorp.com",
        company: "TechCorp Solutions",
        interest: "AI Chat Agents",
        companySize: "50-200 employees",
        industry: "Software Development",
        revenue: "$5M-$10M",
        location: "San Francisco, CA",
        score: 85,
        priority: "High",
        status: "Email Sent",
        assignedTo: "Sales Team Alpha",
        emailSent: "Personalized AI solution demo invitation"
      }
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          const nextStep = prev + 1;
          if (nextStep >= workflowSteps.length) {
            setIsPlaying(false);
            setCompletedSteps([...Array(workflowSteps.length).keys()]);
            return prev;
          }
          setCompletedSteps((prevCompleted) => [...prevCompleted, prev]);
          return nextStep;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, workflowSteps.length]);

  const handlePlay = () => {
    if (currentStep >= workflowSteps.length - 1) {
      setCurrentStep(0);
      setCompletedSteps([]);
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
  };

  const capabilities = [
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Real-time Data Sync",
      description: "Seamlessly synchronize data across all your business systems in real-time"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Automated Workflows",
      description: "Create complex automation workflows that trigger based on customer behavior"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your sales pipeline and customer journey"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Smart Lead Scoring",
      description: "AI-powered lead scoring that improves over time with machine learning"
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
                  CRM Integration Examples
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                See how my AI-powered CRM integration automates your entire sales process,
                from lead capture to customer conversion, with seamless data flow and intelligent automation.
              </p>
            </div>
          </div>

          {/* Interactive Workflow */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Interactive CRM Workflow Demo
              </span>
            </h2>

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
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                {workflowSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Connection Line */}
                    {index < workflowSteps.length - 1 && (
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Display */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Data View</h3>
                
                {/* Animated Data Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {Object.entries(workflowSteps[currentStep]?.data || {}).map(([key, value], index) => (
                    <div
                      key={key}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-4 transition-all duration-700 ease-in-out transform hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </span>
                        {key === 'score' && (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                            <span className="text-xs text-green-400">Live</span>
                          </div>
                        )}
                        {key === 'priority' && value === 'High' && (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-1"></div>
                            <span className="text-xs text-red-400">Priority</span>
                          </div>
                        )}
                      </div>
                      <div className="text-white font-semibold text-lg leading-tight">
                        {typeof value === 'string' && value.includes('@') ? (
                          <span className="text-blue-300">{value}</span>
                        ) : key === 'score' ? (
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-green-400">{value}</span>
                            <span className="text-sm text-gray-400 ml-1">/100</span>
                          </div>
                        ) : key === 'priority' ? (
                          <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                            value === 'High' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                            value === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                            'bg-green-500/20 text-green-300 border border-green-500/30'
                          }`}>
                            {value}
                          </span>
                        ) : key === 'status' ? (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                            {value}
                          </span>
                        ) : (
                          <span className="break-words">{value}</span>
                        )}
                      </div>
                      
                      {/* Progress bar for score */}
                      {key === 'score' && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Data Flow Visualization */}
                <div className="bg-black/30 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Data Flow</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400">Processing</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                    {Object.keys(workflowSteps[currentStep]?.data || {}).map((key, index) => (
                      <div key={key} className="flex items-center space-x-2 flex-shrink-0">
                        <div className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 whitespace-nowrap">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </div>
                        {index < Object.keys(workflowSteps[currentStep]?.data || {}).length - 1 && (
                          <div className="flex items-center">
                            <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full ml-1"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {currentStep < workflowSteps.length && (
                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-blue-300 font-medium">
                        Current Step: {workflowSteps[currentStep]?.title}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-2">{workflowSteps[currentStep]?.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                My CRM Integration Capabilities
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
                  <div className="text-4xl font-bold text-white mb-2">200%</div>
                  <div className="text-gray-400">ROI Through Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">90%</div>
                  <div className="text-gray-400">Reduction in Manual Data Entry</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400">Team Adoption Rate</div>
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