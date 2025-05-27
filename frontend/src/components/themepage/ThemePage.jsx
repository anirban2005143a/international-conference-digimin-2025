"use client"

import { useState, useEffect } from "react"
import { Cpu, Bot, Brain, Map, Shield, Zap, ChevronRight, Sparkles, ArrowRight, CheckCircle } from "lucide-react"

export default function ThemesPage() {
  const [isVisible, setIsVisible] = useState({})
  const [activeTheme, setActiveTheme] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const themes = [
    {
      id: 1,
      title: "Digital Foundations for Smart Mining",
      icon: Cpu,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "Building the technological backbone for next-generation mining operations",
      points: [
        "Integration of IoT, cloud, and edge computing in mine operations",
        "Real-time data collection and processing systems",
        "Secure communication networks for mining infrastructure",
        "Digital twin technology for mine planning and optimization",
      ],
    },
    {
      id: 2,
      title: "Robotics and Automation in Harsh Environments",
      icon: Bot,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      description: "Advanced robotic systems designed for challenging mining conditions",
      points: [
        "Autonomous drilling, blasting, and hauling systems",
        "Swarm robotics for exploration and maintenance",
        "Human-robot collaboration in underground and confined spaces",
        "Adaptive robotics for variable terrain and conditions",
      ],
    },
    {
      id: 3,
      title: "Edge AI and Real-Time Analytics",
      icon: Brain,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      description: "Intelligent systems for immediate decision-making and process optimization",
      points: [
        "Low-latency AI applications for critical mine operations",
        "Edge devices for environmental and structural monitoring",
        "Federated learning in distributed mine networks",
        "Predictive analytics for equipment maintenance and safety",
      ],
    },
    {
      id: 4,
      title: "Geospatial Intelligence and Mapping",
      icon: Map,
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      description: "Advanced mapping and spatial analysis for comprehensive mine understanding",
      points: [
        "AI-powered remote sensing and satellite imaging",
        "3D subsurface modeling using LiDAR and hyperspectral data",
        "Integration of GIS, drones, and ground-penetrating radar",
        "Real-time geological mapping and resource estimation",
      ],
    },
    {
      id: 5,
      title: "Digital Resilience and Disaster Management",
      icon: Shield,
      color: "red",
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-50 to-rose-50",
      description: "Comprehensive systems for risk management and emergency response",
      points: [
        "Design of intelligent operation centers",
        "Integration of AR/VR for remote inspections and diagnostics",
        "Enabling remote decision-making with digital twins",
        "Emergency response systems and evacuation protocols",
      ],
    },
    {
      id: 6,
      title: "Energy Efficiency and Process Optimization",
      icon: Zap,
      color: "yellow",
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
      description: "Sustainable mining through intelligent energy management and optimization",
      points: [
        "AI for optimizing crushing, grinding, and material handling",
        "Dynamic control of furnaces and kilns using digital feedback",
        "CPS-enabled real-time energy monitoring and reduction strategies",
        "Renewable energy integration and smart grid systems",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0opacity-20"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-300 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-300 rounded-full animate-float animation-delay-3000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-300" />
              Technical Focus Areas
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Conference
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300 mt-2">
                Themes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed text-blue-100">
              Exploring cutting-edge technologies and innovations
              <span className="block text-lg md:text-xl mt-2 text-blue-200">
                shaping the future of mining industry
              </span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Brain className="w-5 h-5 mr-2 text-cyan-300" />
                <span className="text-sm font-medium">AI & Machine Learning</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Bot className="w-5 h-5 mr-2 text-purple-300" />
                <span className="text-sm font-medium">Robotics & Automation</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Zap className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">Energy Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Themes Overview */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Six Pillars of Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DIGMIN-2025 focuses on six critical areas that will define the future of intelligent mining operations
            </p>
          </div>

          {/* Themes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {themes.map((theme, index) => (
              <div
                key={theme.id}
                className={`group relative cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isVisible['themes-overview'] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveTheme(activeTheme === theme.id ? null : theme.id)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${theme.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100/50 backdrop-blur-sm h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <theme.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {theme.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {theme.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Themes */}
        <section 
          id="themes-overview"
          data-animate
          className="space-y-24"
        >


          {themes.map((theme, index) => (
            <div
              key={theme.id}
              id={`theme-${theme.id}`}
              data-animate
              className={`transition-all duration-1000 ${
                isVisible[`theme-${theme.id}`] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${theme.gradient} rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${theme.gradient}`}></div>
                  
                  <div className="p-8 lg:p-16">
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`p-4 bg-gradient-to-r ${theme.gradient} rounded-2xl flex-shrink-0`}>
                        <theme.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <span className={`inline-block px-4 py-2 bg-gradient-to-r ${theme.bgGradient} text-${theme.color}-800 rounded-full text-sm font-semibold mr-4`}>
                            Theme {theme.id}
                          </span>
                          <div className={`w-8 h-8 bg-gradient-to-r ${theme.gradient} rounded-full flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">{theme.id}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                          {theme.title}
                        </h2>
                        
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                          {theme.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-r ${theme.bgGradient} rounded-2xl p-8 border-l-4 border-${theme.color}-500`}>
                      <h3 className={`text-xl font-bold text-${theme.color}-900 mb-6 flex items-center`}>
                        <CheckCircle className={`w-6 h-6 text-${theme.color}-600 mr-2`} />
                        Key Focus Areas
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {theme.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50"
                          >
                            <ArrowRight className={`w-5 h-5 text-${theme.color}-600 flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700 font-medium leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technical Highlights */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Advanced Tech</h4>
                        <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                      </div>
                      
                      <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">AI Integration</h4>
                        <p className="text-sm text-gray-600">Intelligent automation</p>
                      </div>
                      
                      <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Safety Focus</h4>
                        <p className="text-sm text-gray-600">Risk mitigation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
            )}
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 mt-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0  opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-blue-200 mr-3" />
                  <h3 className="text-2xl lg:text-3xl font-black">
                    Join the Innovation
                  </h3>
                  <Sparkles className="w-8 h-8 text-blue-200 ml-3" />
                </div>
                
                <p className="text-lg lg:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                  Be part of the technological revolution that will transform mining operations worldwide. 
                  Connect with industry leaders, researchers, and innovators at DIGMIN-2025.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold hover:bg-blue-50 transition-colors duration-300 flex items-center">
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 font-bold hover:bg-white/30 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

