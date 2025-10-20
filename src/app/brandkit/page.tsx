'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { getDocumentsByCategory, Document } from '@/lib/firestore';
import { motion } from 'framer-motion';
import { FiFile } from 'react-icons/fi';
import Image from 'next/image';

export default function BrandKitPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocumentsByCategory('brandkit');
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= 31 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#223256] to-[#4FACFE] bg-clip-text text-transparent">
                AGRIVOLT
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                PROTOCOL
              </h2>
              <div className="text-xl md:text-2xl text-muted-foreground mb-8">
                Brand Guide 2025
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Powering the Future of Intelligent Energy
              </p>
            </motion.div>
          </div>

          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-background">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={`/brand-kit/sllide-${currentSlide}.webp`}
                  alt={`Brand slide ${currentSlide}`}
                  fill
                  className="object-contain"
                  priority={currentSlide <= 3}
                />
              </motion.div>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((slide) => (
                  <button
                    key={slide}
                    onClick={() => setCurrentSlide(slide)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentSlide === slide ? 'bg-white' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentSlide} / 31
              </div>
            </div>
          </motion.div>

          {/* Brand Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#223256]/5 to-[#4FACFE]/5 rounded-3xl p-12 border border-[#223256]/10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-full text-white font-bold text-xl mb-6">
                  01
                </div>
                <h2 className="text-5xl font-bold mb-4 text-foreground">Brand Overview</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#223256] to-[#4FACFE] mx-auto rounded-full"></div>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p className="text-muted-foreground">
                        In the last century, <span className="font-semibold text-foreground">oil fueled industrial wealth</span>.
                      </p>
                      <p className="text-muted-foreground">
                        In this century, <span className="font-semibold text-foreground">electricity + compute will fuel AI wealth</span>.
                      </p>
                      <p className="text-foreground font-semibold">
                        AGV is the decentralized, investable, globally accessible gateway.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h4 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      AGV Protocol redefines the Real-World Asset (RWA) category by bridging
                      clean energy, artificial intelligence, and decentralized finance. More than a
                      tokenized asset platform, AGV positions itself as the world&apos;s first
                      decentralized AI Power ETF — an ecosystem where real electricity and
                      compute capacity become liquid, yield-bearing digital assets.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-4">Our Tagline</h3>
                    <p className="text-3xl font-bold leading-tight">
                      Real Energy. Real Yield.<br />
                      <span className="text-white/90">Real Assets — On-Chain.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logo System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-full text-white font-bold text-xl mb-6">
                  02
                </div>
                <h2 className="text-5xl font-bold mb-4 text-foreground">Logo System</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#223256] to-[#4FACFE] mx-auto rounded-full mb-8"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our logo symbolizes growth, upward momentum, and dual energy flow. The ascending form reflects
                  continuous innovation, yield expansion, and sustainable progress within the decentralized energy network.
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                {/* Primary Logo Variations */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Primary Logo Variations</h3>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-white to-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-gray-200">
                        <Image
                          src="/assets/Agv-logo.png"
                          alt="AGV Protocol Logomark"
                          width={100}
                          height={100}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground">Logomark</h4>
                      <p className="text-muted-foreground">Standalone symbol for compact spaces</p>
                    </div>
                    <div className="text-center">
                      <div className="w-64 h-32 bg-gradient-to-br from-white to-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-gray-200">
                        <Image
                          src="/assets/Agv-logo.png"
                          alt="AGV Protocol Primary Logo"
                          width={150}
                          height={75}
                          className="h-16 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground">Primary Logo</h4>
                      <p className="text-muted-foreground">Full logo with wordmark for general use</p>
                    </div>
                  </div>
                </div>

                {/* Background Usage */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Usage on Different Backgrounds</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                        <Image
                          src="/assets/Agv-logo.png"
                          alt="AGV Protocol on White"
                          width={80}
                          height={80}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <h4 className="font-semibold mb-2 text-foreground">White Background</h4>
                      <p className="text-sm text-muted-foreground">Clean, professional appearance</p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-[#223256] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Image
                          src="/assets/Agv-logo.png"
                          alt="AGV Protocol on Navy"
                          width={80}
                          height={80}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <h4 className="font-semibold mb-2 text-foreground">Navy Background</h4>
                      <p className="text-sm text-muted-foreground">Bold, authoritative presence</p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-[#4FACFE] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Image
                          src="/assets/Agv-logo.png"
                          alt="AGV Protocol on Sky Blue"
                          width={80}
                          height={80}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <h4 className="font-semibold mb-2 text-foreground">Sky Blue Background</h4>
                      <p className="text-sm text-muted-foreground">Modern, tech-forward look</p>
                    </div>
                  </div>
                </div>

                {/* Clear Spacing */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Clear Spacing Guidelines</h3>
                  <div className="bg-gradient-to-r from-[#223256]/5 to-[#4FACFE]/5 rounded-2xl p-8">
                    <p className="text-center text-muted-foreground mb-6">
                      Maintain proper spacing around the logo to ensure visual clarity and brand integrity
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-xl flex items-center justify-center mr-12">
                        <Image
                          src="/assets/Agv-logo.png"
                          alt="AGV Protocol"
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-foreground mb-2">Clear Space</div>
                        <div className="text-muted-foreground">Minimum distance = cap height of logomark</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media & Favicon */}
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Social Media Avatars</h3>
                    <div className="space-y-6">
                      <div className="flex items-center bg-white/50 rounded-2xl p-4">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm border">
                          <Image
                            src="/assets/Agv-logo.png"
                            alt="Square Avatar"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Square Avatar</div>
                          <div className="text-sm text-muted-foreground">LinkedIn, Facebook, and other square platforms</div>
                        </div>
                      </div>
                      <div className="flex items-center bg-white/50 rounded-2xl p-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm border">
                          <Image
                            src="/assets/Agv-logo.png"
                            alt="Circle Avatar"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Circle Avatar</div>
                          <div className="text-sm text-muted-foreground">X, Instagram, and other circular platforms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Favicon</h3>
                    <div className="flex items-center bg-white/50 rounded-2xl p-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm border">
                        <Image
                          src="/assets/Agv-logo.png"
                          alt="Favicon"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Web Favicon</div>
                        <div className="text-sm text-muted-foreground">16x16px for browser tabs and bookmarks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Color System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#223256]/5 to-[#4FACFE]/5 rounded-3xl p-12 border border-[#223256]/10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-full text-white font-bold text-xl mb-6">
                  03
                </div>
                <h2 className="text-5xl font-bold mb-4 text-foreground">Color System</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#223256] to-[#4FACFE] mx-auto rounded-full mb-8"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our color palette reflects trust, innovation, and clean technology. Each color has been carefully
                  selected to convey our brand values and create a cohesive visual identity.
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                {/* Primary Colors */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Primary Color Palette</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-[#223256] rounded-3xl mx-auto mb-6 shadow-xl border-4 border-white"></div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Navy Blue</h4>
                      <div className="bg-white/80 rounded-xl p-4 mb-4">
                        <div className="text-lg font-mono font-semibold text-[#223256] mb-2">#223256</div>
                        <div className="text-sm text-muted-foreground mb-1">CMYK: 60 / 42 / 0 / 66</div>
                        <div className="text-sm text-muted-foreground">RGB: 34 / 50 / 86</div>
                      </div>
                      <p className="text-sm text-muted-foreground">Authority, trust, and stability</p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-[#4FACFE] rounded-3xl mx-auto mb-6 shadow-xl border-4 border-white"></div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Sky Blue</h4>
                      <div className="bg-white/80 rounded-xl p-4 mb-4">
                        <div className="text-lg font-mono font-semibold text-[#4FACFE] mb-2">#4FACFE</div>
                        <div className="text-sm text-muted-foreground mb-1">CMYK: 69 / 32 / 0 / 0</div>
                        <div className="text-sm text-muted-foreground">RGB: 79 / 172 / 254</div>
                      </div>
                      <p className="text-sm text-muted-foreground">Innovation, clarity, and technology</p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white border-4 border-gray-200 rounded-3xl mx-auto mb-6 shadow-xl"></div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">White</h4>
                      <div className="bg-white/80 rounded-xl p-4 mb-4">
                        <div className="text-lg font-mono font-semibold text-gray-600 mb-2">#FFFFFF</div>
                        <div className="text-sm text-muted-foreground mb-1">CMYK: 00 / 00 / 00 / 00</div>
                        <div className="text-sm text-muted-foreground">RGB: 255 / 255 / 255</div>
                      </div>
                      <p className="text-sm text-muted-foreground">Purity, simplicity, and clarity</p>
                    </div>
                  </div>
                </div>

                {/* Gradient System */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Gradient System</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="w-full h-32 bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-2xl shadow-lg mb-6"></div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-2 text-foreground">Primary Gradient</h4>
                      <p className="text-muted-foreground mb-4">
                        Navy Blue to Sky Blue gradient for modern, dynamic applications
                      </p>
                      <div className="bg-gray-50 rounded-xl p-4 inline-block">
                        <div className="text-sm font-mono text-gray-600">
                          background: linear-gradient(90deg, #223256 0%, #4FACFE 100%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">TYPOGRAPHY</h2>
                <div className="text-sm text-muted-foreground mb-6">04</div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">PRIMARY TYPEFACE</h3>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-lato)' }}>
                      LATO
                    </div>
                    <div className="text-lg mb-4 tracking-widest" style={{ fontFamily: 'var(--font-lato)' }}>
                      AaABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                      abcdefghijklmnopqrstuvwxyz<br />
                      1234567890<br />
                      !@#$%^&*()
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This primary typeface helps define your company to anyone interacting with your brand.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">SECONDARY TYPEFACE</h3>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                      INTER
                    </div>
                    <div className="text-lg mb-4 tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>
                      AaABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                      abcdefghijklmnopqrstuvwxyz<br />
                      1234567890<br />
                      !@#$%^&*()
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This secondary font helps support the primary in defining your company to anyone interacting with your brand.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">USAGE</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-6xl font-bold mb-2" style={{ fontFamily: 'var(--font-lato)' }}>AGV</div>
                      <div className="text-sm text-muted-foreground">XXL Title - 96PX</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-lato)' }}>AGV</div>
                      <div className="text-sm text-muted-foreground">XL Title - 64PX</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The Title Head styles are designed to create strong visual hierarchy and instant brand recognition
                      across all AGV communications. These headline sizes are reserved for key moments where clarity,
                      impact, and authority are essential such as hero sections, campaign titles, and major callouts.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">LINE SPACING / LEADING</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-semibold mb-1" style={{ fontFamily: 'var(--font-lato)' }}>H1 - 32PX</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold mb-1" style={{ fontFamily: 'var(--font-lato)' }}>H2 - 24PX</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-lato)' }}>H3 - 20PX</div>
                    </div>
                    <div>
                      <div className="text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-lato)' }}>H4 - 16PX</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-lato)' }}>H5 - 14PX</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">BODY USAGE</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-base mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Body Large - 16PX</div>
                      <div className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mus mollis ac, sociis malesuada
                        sollicitudin fringilla vivamus aenean imperdiet nec rhoncus, nunc posuere nostra
                        fermentum maecenas commodo vitae ornare nibh.
                      </div>
                    </div>
                    <div>
                      <div className="text-sm mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Body Medium - 14PX</div>
                      <div className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mus mollis ac, sociis malesuada
                        sollicitudin fringilla vivamus aenean imperdiet nec rhoncus, nunc posuere nostra
                        fermentum maecenas commodo vitae ornare nibh.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Body Small - 12PX</div>
                      <div className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mus mollis ac, sociis malesuada
                        sollicitudin fringilla vivamus aenean imperdiet nec rhoncus, nunc posuere nostra
                        fermentum maecenas commodo vitae ornare nibh.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Caption 1 - 10PX</div>
                      <div className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mus mollis ac, sociis malesuada
                        sollicitudin fringilla vivamus aenean imperdiet nec rhoncus, nunc posuere nostra
                        fermentum maecenas commodo vitae ornare nibh.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">PHOTOGRAPHY</h2>
                <div className="text-sm text-muted-foreground mb-6">05</div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A style used as framework or guide when creating imagery for the brand, ensuring a similar
                    visual aesthetic and style is specific to the brand.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="group cursor-pointer">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/photography/photo1.png"
                        alt="AGV Protocol Photography Style 1"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">Clean Technology Focus</p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/photography/photo2.png"
                        alt="AGV Protocol Photography Style 2"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">Energy Innovation</p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/photography/photo3.png"
                        alt="AGV Protocol Photography Style 3"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">Sustainable Future</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">APPLICATIONS</h2>
                <div className="text-sm text-muted-foreground mb-6">06</div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg">
                    <div className="w-full h-64 rounded-xl overflow-hidden mb-4 shadow-lg">
                      <Image
                        src="/assets/brandkit-app-1.png"
                        alt="AGV Protocol Brand Application - Water Bottle"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Water Bottle</h3>
                    <p className="text-sm text-muted-foreground">Brand application on sustainable merchandise</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg">
                    <div className="w-full h-64 rounded-xl overflow-hidden mb-4 shadow-lg">
                      <Image
                        src="/assets/brandkit-app-3.png"
                        alt="AGV Protocol Brand Application - Baseball Cap"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Baseball Cap</h3>
                    <p className="text-sm text-muted-foreground">Brand application on promotional apparel</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <FiFile size={24} />
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>

                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors block"
                  >
                    View Document
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Usage Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">INCORRECT USAGE</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Logo Guidelines</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li> <span className="text-red-500">•</span> Do not use alternative lockups of the logo</li>
                    <li> <span className="text-red-500">•</span> Do not use unapproved colours</li>
                    <li> <span className="text-red-500">•</span> Do not outline any part of the logo</li>
                    <li> <span className="text-red-500">•</span> Do not apply any special effects on the logo</li>
                    <li> <span className="text-red-500">•</span> Do not rotate the logo</li>
                    <li> <span className="text-red-500">•</span> Do not stretch the logo to fill space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Brand Standards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li> <span className="text-green-500">•</span> Maintain proper spacing around logos</li>
                    <li> <span className="text-green-500">•</span> Use approved color variations only</li>
                    <li> <span className="text-green-500">•</span> Ensure high resolution for print</li>
                    <li> <span className="text-green-500">•</span> Follow typography guidelines</li>
                    <li> <span className="text-green-500">•</span> Use approved fonts (Lato & Inter)</li>
                    <li> <span className="text-green-500">•</span> Maintain brand consistency across all materials</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
