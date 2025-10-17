'use client';

import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Globe, FileText, CheckCircle, Star, ArrowRight, MessageCircle, Users, Award, TrendingUp, Play, X, Sparkles, Target, Clock, Shield } from 'lucide-react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Verify pixel is loaded
    if (typeof window !== 'undefined') {
      // Wait a bit for pixel to load
      const checkPixel = setTimeout(() => {
        if (window.fbq) {
          console.log('✅ Facebook Pixel loaded successfully');
          console.log('Pixel ID: 887402196248385');
        } else {
          console.warn('⚠️ Facebook Pixel not loaded');
        }
      }, 1000);

      return () => clearTimeout(checkPixel);
    }
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el));

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleWhatsAppClick = (buttonName = 'WhatsApp') => {
    try {
      if (typeof window !== 'undefined') {
        // Ensure fbq is available
        if (window.fbq) {
          console.log('Tracking Contact event:', buttonName);
          window.fbq('track', 'Contact', {
            content_name: buttonName,
            content_type: 'product'
          });

          console.log('Tracking Lead event:', buttonName);
          window.fbq('track', 'Lead', {
            content_name: buttonName,
            content_type: 'product'
          });
        } else {
          console.warn('fbq not available yet');
        }
      }
    } catch (error) {
      console.error('Error tracking WhatsApp click:', error);
    }
  };

  const handleVideoClick = () => {
    try {
      if (typeof window !== 'undefined') {
        if (window.fbq) {
          console.log('Tracking ViewContent event');
          window.fbq('track', 'ViewContent', {
            content_name: 'Testimonials Video',
            content_type: 'video'
          });
        } else {
          console.warn('fbq not available yet');
        }
      }
    } catch (error) {
      console.error('Error tracking video click:', error);
    }
  };

  const testimonials = [
    { 
      name: "Arnold K.", 
      location: "Mbouda , Cameroon",
      text: "De mon rêve à ma réalité en 3 mois. L'équipe de Triumph a géré chaque détail de mon dossier. Aujourd'hui, j'étudie à Frankfurt-Allemagne!", 
      rating: 5,
      image: "👩‍🎓"
    },
    { 
      name: "Kamdem B.", 
      location: "Mbouda , Cameroon ",
      text: "Score IELTS 7.5 obtenu ! Les techniques enseignées sont révolutionnaires.", 
      rating: 5,
      image: "👨‍💼"
    },
    { 
      name: "Mafor Y.", 
      location: "Moscou , Russie",
      text: "Visa accepté du premier coup ! Service premium, suivi constant, équipe exceptionnelle. Je recommande les yeux fermés.", 
      rating: 5,
      image: "👩‍🔬"
    }
  ];

  const benefits = [
    { icon: <Target className="w-8 h-8" />, title: "Taux de Réussite 98%", desc: "Le plus élevé de l’Ouest" },
    { icon: <Clock className="w-8 h-8" />, title: "Traitement Rapide", desc: "3 mois en moyenne" },
    { icon: <Shield className="w-8 h-8" />, title: "Garantie Satisfait", desc: "Votre satisfaction est notre priorité" },
    { icon: <Award className="w-8 h-8" />, title: "Experts Certifiés", desc: "15+ ans d'expérience" }
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-3 sm:gap-4">
        <a
          href="https://wa.me/237691583934"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleWhatsAppClick('Floating WhatsApp Button')}
          className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7" />
          <span className="hidden sm:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
            Discuter sur whatsapp
          </span>
        </a>
        <button
          onClick={() => {
            handleVideoClick();
            setShowVideo(true);
          }}
          className="group relative bg-gradient-to-r from-red-500 to-pink-600 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Play className="w-6 sm:w-7 h-6 sm:h-7" />
          <span className="hidden sm:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
            Voir les témoignages
          </span>
        </button>
      </div>

      {/* Video Modal - Flash Player Error */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-8 right-8 text-white hover:text-red-400 transition-colors z-10"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Flash Player Error Container */}
          <div className="max-w-2xl w-full">
            {/* Flash Player Background */}
            <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              {/* Video Area with Error */}
              <div className="aspect-video bg-black flex flex-col items-center justify-center relative">
                {/* Flash Player Error Message */}
                <div className="text-center px-8">
                  <div className="mb-6">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h3 className="text-2xl font-bold text-red-500 mb-2">Flash Player Error</h3>
                    <p className="text-gray-300 text-sm mb-4">Error Code: 2048</p>
                  </div>

                  <div className="bg-gray-900 rounded p-4 mb-6 text-left border border-gray-700">
                    <p className="text-gray-400 text-xs font-mono mb-2">Error Details:</p>
                    <p className="text-red-400 text-xs font-mono">
                      SecurityError: Error #2048: Security sandbox violation
                    </p>
                    <p className="text-gray-500 text-xs font-mono mt-2">
                      The file cannot be accessed from this domain.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm">Possible solutions:</p>
                    <ul className="text-gray-500 text-xs space-y-1">
                      <li>• Check your internet connection</li>
                      <li>• Verify the video URL is correct</li>
                      <li>• Try refreshing the page</li>
                      <li>• Update Adobe Flash Player</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Flash Player Controls Bar */}
              <div className="bg-gray-900 px-4 py-3 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs font-semibold transition-colors">
                      ▶ Play
                    </button>
                    <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-400 text-xs">00:00 / 00:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs">🔊</span>
                    <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-400 text-xs">⛶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Error Info */}
            <div className="mt-4 text-center text-gray-400 text-xs">
              <p>Flash Player v32.0.0.465 | © 2024 Adobe Systems</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Immersive */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(#011f68 1px, transparent 1px), linear-gradient(90deg, #011f68 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Logo with glow effect */}
          <div className="mb-8 inline-block relative group">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img src="logo.jpg" alt="Triumph Logo" className="relative w-28 h-28 mx-auto rounded-full border-4 border-cyan-400 shadow-2xl" />
          </div>

          {/* Main Headline with Typing Effect */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Votre Succès International Commence Ici</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Transformez
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Votre Avenir
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4">
            <span className="text-cyan-400 font-semibold">Formation d'élite</span>, préparation <span className="text-blue-400 font-semibold">certifiée</span> et <span className="text-purple-400 font-semibold">visa garanti a 90%</span> pour étudier dans les meilleures universités mondiales
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            <a
              href="https://wa.me/237691583934"
              onClick={() => handleWhatsAppClick('Hero Consultation Button')}
              className="group relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-[#25D366] hover:bg-[#20BA5A] rounded-full font-bold text-base sm:text-lg md:text-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-[#25D366]/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                <span>Discuter sur whatsapp</span>
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform hidden sm:block" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <button
              onClick={() => {
                handleVideoClick();
                setShowVideo(true);
              }}
              className="group w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-white/20 active:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            >
              <Play className="w-5 sm:w-6 h-5 sm:h-6" />
              <span>Voir Comment Ça Marche</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center group hover:scale-110 active:scale-95 transition-transform duration-300">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-2 sm:mb-3 text-cyan-400 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all">
                  <div className="w-6 sm:w-8 h-6 sm:h-8">{benefit.icon}</div>
                </div>
                <div className="font-bold text-sm sm:text-base md:text-lg mb-1">{benefit.title}</div>
                <div className="text-xs sm:text-sm text-gray-400">{benefit.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-cyan-400">
            <span className="text-sm font-semibold">Découvrir</span>
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Counter Section */}
      <section className="observe py-16 sm:py-24 px-4 sm:px-6 relative opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#011f68] via-blue-900 to-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4">
                Rejoignez une communauté <span className="text-cyan-400">d'excellence</span>
              </h2>
              <p className="text-center text-gray-300 mb-8 sm:mb-12 text-base sm:text-lg md:text-xl">En temps réel, nos étudiants réalisent leurs rêves</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
                <div className="relative group">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">400+</div>
                  <div className="text-gray-300 text-xs sm:text-base md:text-lg">Étudiants Formés</div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <div className="relative group">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">98.3%</div>
                  <div className="text-gray-300 text-xs sm:text-base md:text-lg">Taux de Réussite</div>
                </div>
                <div className="relative group">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">3</div>
                  <div className="text-gray-300 text-xs sm:text-base md:text-lg">Pays Partenaires</div>
                </div>
                <div className="relative group">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">3+</div>
                  <div className="text-gray-300 text-xs sm:text-base md:text-lg">Années d'Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Card Flip Style */}
      <section className="observe py-16 sm:py-24 px-4 sm:px-6 opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              Nos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions Premium</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Des programmes conçus pour garantir votre succès à l'international
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <GraduationCap className="w-16 h-16" />,
                title: "Formation Linguistique Elite",
                desc: "Maîtrisez l'anglais, le français ou toute autre langue avec nos experts",
                features: [
                  "Professeurs natifs certifiés",
                  "Classes sur mesure (individuel/groupe)",
                  "Certificat reconnu internationalement"
                ],
                color: "from-cyan-500 to-blue-600",
              },
              {
                icon: <FileText className="w-16 h-16" />,
                title: "Préparation Examens Certifiés",
                desc: "TOEFL, IELTS, DELF, TCF - Garantie de score",
                features: [
                  "Méthodologie exclusive 98% réussite",
                  "Tests blancs illimités + corrections",
                  "Coaching personnalisé intensif",
                  "Garantie satisfaction 100%"
                ],
                color: "from-purple-500 to-pink-600",
                popular: true
              },
              {
                icon: <Globe className="w-16 h-16" />,
                title: "Immigration Clé en Main",
                desc: "De votre dossier à votre installation, nous gérons tout",
                features: [
                  "Constitution complète du dossier",
                  "Suivi visa jusqu'à l'acceptation",
                  "Accompagnement pré-départ",
                  "Support après installation"
                ],
                color: "from-orange-500 to-red-600",
              }
            ].map((service, idx) => (
              <div key={idx} className="group perspective">
                <div className="relative h-full transform-gpu transition-all duration-500 group-hover:scale-105 active:scale-95">
                  {service.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                        ⭐ PLUS POPULAIRE
                      </div>
                    </div>
                  )}

                  <div className={`relative h-full bg-gradient-to-br ${service.color} p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative h-full bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                      <div className="text-white mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform">
                        <div className="w-12 sm:w-16 h-12 sm:h-16">{service.icon}</div>
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                        {service.desc}
                      </p>

                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-gray-800 pt-4 sm:pt-6 mt-auto">
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{service.price}</div>
                        <a
                          href="https://wa.me/237691583934"
                          onClick={() => handleWhatsAppClick(`Service Card - ${service.title}`)}
                          className="block w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-center text-sm sm:text-base bg-[#25D366] hover:bg-[#20BA5A] text-white hover:shadow-2xl hover:shadow-[#25D366]/50 active:scale-95 transition-all duration-300"
                        >
                          Discuter sur whatsapp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="observe py-16 sm:py-24 px-4 sm:px-6 opacity-0 transition-opacity duration-1000">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16">
            Histoires de <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Réussite</span>
          </h2>

          <div className="relative">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  currentTestimonial === idx
                    ? 'opacity-100 scale-100 relative'
                    : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-6xl sm:text-9xl opacity-5">❝</div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0">{testimonial.image}</div>
                      <div className="flex-1 w-full">
                        <div className="flex gap-1 mb-2 sm:mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-base sm:text-lg md:text-2xl text-gray-100 mb-3 sm:mb-4 leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <p className="font-bold text-base sm:text-lg md:text-xl text-white">{testimonial.name}</p>
                          <p className="text-cyan-400 text-sm sm:text-base">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 active:scale-90 ${
                    currentTestimonial === idx
                      ? 'w-8 sm:w-12 bg-gradient-to-r from-cyan-400 to-blue-400'
                      : 'w-2 sm:w-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Urgency */}
      <section className="observe py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative opacity-0 transition-opacity duration-1000">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-3xl opacity-30"></div>

          <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 animate-pulse">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
              <span className="text-red-400 font-bold text-xs sm:text-sm md:text-base">Places Limitées - Octobre 2025</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8">
              <span className="block mb-2 sm:mb-4">Votre Avenir</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Commence Maintenant
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Ne laissez pas passer cette opportunité. Plus de <span className="text-cyan-400 font-bold">400 étudiants</span> ont déjà transformé leur vie avec Triumph.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
              <a
                href="https://wa.me/237691583934"
                onClick={() => handleWhatsAppClick('Final CTA Button')}
                className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-[#25D366] hover:bg-[#20BA5A] rounded-full font-bold text-base sm:text-lg md:text-xl lg:text-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-[#25D366]/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <MessageCircle className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                  <span>Discuter sur whatsapp</span>
                  <ArrowRight className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform hidden sm:block" />
                </span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400 px-4 text-xs sm:text-sm md:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                <span>Réponse en 5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                <span>Disponible 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left">
              <img src="logo.jpg" alt="Triumph Logo" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full flex-shrink-0" />
              <div>
                <p className="font-bold text-base sm:text-lg md:text-xl">Triumph Linguistique & Immigration</p>
                <p className="text-gray-400 text-xs sm:text-sm">Votre succès est notre mission</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                © {new Date().getFullYear()} Triumph. Tous droits réservés.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Excellence · Intégrité · Résultats
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .observe {
          transition: opacity 1s ease-out, transform 1s ease-out;
          transform: translateY(30px);
        }
        .observe.visible {
          opacity: 1 !important;
          transform: translateY(0);
        }
        .perspective {
          perspective: 1000px;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
}