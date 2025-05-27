"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Award, Calendar, MapPin, Sparkles, TrendingUp, Globe, Zap } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({})
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <div className="absolute inset-0 bg-primary-500/10 opacity-20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-300 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary-300 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-accent-300 rounded-full animate-float animation-delay-3000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 text-accent-400" />
              Centenary Celebrations 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                DIGMIN
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-primary-400 mt-2">
                2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed text-gray-300">
              Digital Intelligence for Green Mining
              <span className="block text-lg md:text-xl lg:text-2xl mt-2 text-gray-400">
                and Industrial Networks
              </span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Calendar className="w-5 h-5 mr-2 text-primary-300" />
                <span className="text-sm font-medium">2025 Conference</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <MapPin className="w-5 h-5 mr-2 text-secondary-300" />
                <span className="text-sm font-medium">IIT (ISM) Dhanbad</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Award className="w-5 h-5 mr-2 text-accent-300" />
                <span className="text-sm font-medium">Global Ranking #20</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
        
        {/* Parallax Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* Conference Concept Section */}
        <section 
          id="conference-concept"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible['conference-concept'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
              
              <div className="lg:grid lg:grid-cols-5 lg:gap-0">
                <div className="lg:col-span-3 p-8 lg:p-16">
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary-100 rounded-xl mr-4">
                        <Globe className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 rounded-full text-sm font-semibold">
                          Conference Overview
                        </span>
                      </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                      Conference
                      <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Concept
                      </span>
                    </h2>
                  </div>
                  
                  <div className="prose prose-xl text-gray-700 leading-relaxed space-y-6">
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-2xl border-l-4 border-primary-500">
                      <p className="font-semibold text-primary-900 text-lg mb-2">
                        Digital Intelligence for Green Mining and Industrial Networks (DIGMIN) – 2025
                      </p>
                      <p className="text-gray-700">
                        India's flagship conference at the intersection of digitalization, intelligent automation, 
                        and sustainable mining practices.
                      </p>
                    </div>
                    
                    <p className="text-lg">
                      DIGMIN-2025 is envisioned as a premier conference focused on accelerating the digital transformation 
                      of the mining sector. Anchored on the pillars of <strong className="text-primary-600">Digitalization, 
                      Intelligent Systems, Green Technologies, Mining 5.0, Industrial Integration, and Next-generation 
                      Infrastructure</strong>, the conference aims to bring together mining professionals, regulatory personnel, 
                      academic researchers, technologists, sustainability experts, policymakers, and industry leaders.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                      {[
                        { icon: Zap, label: "AI/ML Systems", color: "primary" },
                        { icon: TrendingUp, label: "Mining 5.0", color: "secondary" },
                        { icon: Globe, label: "Sustainability", color: "accent" }
                      ].map((item, index) => (
                        <div key={index} className={`p-4 bg-${item.color}-50 rounded-xl text-center border border-${item.color}-100`}>
                          <item.icon className={`w-8 h-8 text-${item.color}-600 mx-auto mb-2`} />
                          <span className={`text-sm font-semibold text-${item.color}-800`}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-lg">
                      The goal is to unlock hidden opportunities in mining through smart digital systems, drive sustainable 
                      resource management, and build a roadmap for a resilient, technology-integrated, and environmentally 
                      responsible mining ecosystem in India.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
                  <Image
                    src="/images/conference-concept.png"
                    alt="Conference Concept"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-gray-900 mb-1">Innovation Hub</h3>
                      <p className="text-sm text-gray-600">Driving the future of mining technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About IIT ISM Dhanbad Section */}
        <section 
          id="iit-dhanbad"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible['iit-dhanbad'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-500 via-primary-500 to-accent-500"></div>
              
              <div className="lg:grid lg:grid-cols-5 lg:gap-0">
                <div className="lg:col-span-2 relative h-64 lg:h-auto order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-600/20 via-primary-600/20 to-accent-600/20"></div>
                  <Image
                    src="/images/iit-dhanbad.png"
                    alt="IIT ISM Dhanbad Historical View"
                    fill
                    className="object-cover sepia"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-gray-900 mb-1">Since 1926</h3>
                      <p className="text-sm text-gray-600">Nearly a century of excellence</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8 lg:p-16 order-1 lg:order-2">
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-secondary-100 rounded-xl mr-4">
                        <Award className="w-8 h-8 text-secondary-600" />
                      </div>
                      <div>
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-800 rounded-full text-sm font-semibold">
                          Institute Heritage
                        </span>
                      </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                      About IIT
                      <span className="block bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                        (ISM) Dhanbad
                      </span>
                    </h2>
                  </div>
                  
                  <div className="prose prose-xl text-gray-700 leading-relaxed space-y-6">
                    <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-2xl border-l-4 border-secondary-500">
                      <p className="font-semibold text-secondary-900 text-lg">
                        Located in India's prime coking coal belt, 260 km from Kolkata
                      </p>
                    </div>
                    
                    <p className="text-lg">
                      The Indian School of Mines was officially inaugurated on <strong className="text-secondary-600">December 9th, 1926</strong>, 
                      by Lord Irwin, the then Viceroy of India, to meet the demand for trained manpower associated with mining 
                      activities in the country, focusing on Mining and Applied Geology disciplines.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-2xl border border-secondary-200">
                        <h4 className="font-bold text-secondary-900 mb-2">2016 Transformation</h4>
                        <p className="text-gray-700 text-sm">Granted IIT status by the Government of India</p>
                      </div>
                      <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-200">
                        <h4 className="font-bold text-primary-900 mb-2">Comprehensive Education</h4>
                        <p className="text-gray-700 text-sm">B.Tech, M.Tech, MBA, and Ph.D. programs</p>
                      </div>
                    </div>
                    
                    <p className="text-lg">
                      Since its inception, the institute has significantly broadened its scope of activities, evolving into 
                      a comprehensive technology education institute. <strong className="text-secondary-600">IIT(ISM) Dhanbad has made 
                      significant contributions to the advancement of mining, minerals, petroleum, and groundwater exploration in India.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Mining Engineering Department Section */}
        <section 
          id="mining-department"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible['mining-department'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-600 to-primary-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500"></div>
              
              <div className="lg:grid lg:grid-cols-5 lg:gap-0">
                <div className="lg:col-span-3 p-8 lg:p-16">
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-accent-100 rounded-xl mr-4">
                        <TrendingUp className="w-8 h-8 text-accent-600" />
                      </div>
                      <div>
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 text-accent-800 rounded-full text-sm font-semibold">
                          Academic Excellence
                        </span>
                      </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                      Mining Engineering
                      <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                        Department
                      </span>
                    </h2>
                  </div>
                  
                  <div className="prose prose-xl text-gray-700 leading-relaxed space-y-6">
                    <div className="bg-gradient-to-r from-accent-50 to-primary-50 p-6 rounded-2xl border-l-4 border-accent-500">
                      <p className="font-semibold text-accent-900 text-lg">
                        Founded in 1926 by Lord Irwin, Viceroy of India
                      </p>
                    </div>
                    
                    <p className="text-lg">
                      Over the past <strong className="text-accent-600">99 years</strong>, it has developed and grown to become 
                      the country's largest department of its kind, boasting excellent teaching and research facilities alongside 
                      widespread activities in the coal, metalliferous mining, and construction sectors.
                    </p>
                    
                    <div className="bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50 p-8 rounded-3xl border-2 border-accent-200 my-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-accent-900 mb-2">Global Recognition</h3>
                        <p className="text-accent-700">QS World University Rankings by Subject 2025</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-accent-100">
                          <div className="text-4xl font-black text-accent-600 mb-2">20th</div>
                          <div className="text-sm font-semibold text-accent-800">Global Ranking</div>
                          <div className="text-xs text-gray-600 mt-1">Mineral & Mining Engineering</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-primary-100">
                          <div className="text-4xl font-black text-primary-600 mb-2">#1</div>
                          <div className="text-sm font-semibold text-primary-800">In India</div>
                          <div className="text-xs text-gray-600 mt-1">Top Indian Institution</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-secondary-100">
                          <div className="text-4xl font-black text-secondary-600 mb-2">99+</div>
                          <div className="text-sm font-semibold text-secondary-800">Years Legacy</div>
                          <div className="text-xs text-gray-600 mt-1">Since 1926</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 via-primary-600/20 to-secondary-600/20"></div>
                  <Image
                    src="/images/department.png"
                    alt="Mining Engineering Department Campus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-gray-900 mb-1">World-Class Facilities</h3>
                      <p className="text-sm text-gray-600">Leading research and education</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Centenary Celebration Banner */}
        <section className="text-center py-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-12 h-12 text-white mr-4" />
                  <h3 className="text-3xl lg:text-4xl font-black">
                    Centenary Celebrations
                  </h3>
                  <Sparkles className="w-12 h-12 text-white ml-4" />
                </div>
                
                <p className="text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed font-medium">
                  DIGMIN-2025 will be a landmark conference organized as part of the 
                  <strong className="text-white"> Centenary Celebrations of IIT (ISM) Dhanbad</strong>, 
                  commemorating 100 years of excellence in mining education and research.
                </p>
                
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="font-semibold">1926 - 2026</span>
                  </div>
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="font-semibold">100 Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}