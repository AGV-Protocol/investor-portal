'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import ProtectedRoute from '@/components/ProtectedRoute';
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ProtectedRoute>
      <Layout>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="AGRIVOLT PROTOCOL"
            subtitle="BRAND GUIDE 2025"
            description="Powering the Future of Intelligent Energy"
            className="mb-16"
          />

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
            className="mb-16"
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">BRAND OVERVIEW</h2>
                <div className="text-sm text-muted-foreground mb-6">01</div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">VISION</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In the last century, oil fueled industrial wealth.<br />
                    In this century, electricity + compute will fuel AI wealth.<br />
                    AGV is the decentralized, investable, globally accessible gateway.
                  </p>
                </div>
                
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    AGV Protocol redefines the Real-World Asset (RWA) category by bridging
                    clean energy, artificial intelligence, and decentralized finance. More than a
                    tokenized asset platform, AGV positions itself as the world's first
                    decentralized AI Power ETF — an ecosystem where real electricity and
                    compute capacity become liquid, yield-bearing digital assets.
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">TAGLINE</h3>
                  <p className="text-xl font-medium text-primary">
                    Real Energy. Real Yield.<br />
                    Real Assets — On-Chain.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Logo System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">LOGO SYSTEM</h2>
                <div className="text-sm text-muted-foreground mb-6">02</div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The AGV Protocol logo symbolizes growth, upward momentum, and dual
                    energy flow. Their ascending form reflects continuous innovation, yield expansion,
                    and sustainable progress within the decentralized energy network.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The gradient blue evokes clean technology, trust, and digital
                    transparency, aligning with AGV's mission to power real-world yield through
                    renewable and compute-based assets.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border">
                      <Image 
                        src="/logo.png" 
                        alt="AGV Protocol Logomark" 
                        width={80}
                        height={80}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">LOGOMARK</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border">
                      <Image 
                        src="/logo.png" 
                        alt="AGV Protocol Primary Logo" 
                        width={120}
                        height={60}
                        className="h-12 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">PRIMARY LOGO</h3>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">USAGE ON BACKGROUND COLOURS</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border">
                        <Image 
                          src="/logo.png" 
                          alt="AGV Protocol on White" 
                          width={64}
                          height={64}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">White Background</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#223256] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Image 
                          src="/logo.png" 
                          alt="AGV Protocol on Navy" 
                          width={64}
                          height={64}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Navy Background</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#4FACFE] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Image 
                          src="/logo.png" 
                          alt="AGV Protocol on Sky Blue" 
                          width={64}
                          height={64}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Sky Blue Background</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">CLEAR SPACING</h3>
                  <p className="text-muted-foreground mb-4">
                    The logo's clear space defines the distance between the logo and any graphic element
                    it may be sitting next to in a composition. Use the cap height from the logomark as a
                    reference for the appropriate clear space.
                  </p>
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded flex items-center justify-center mr-8">
                        <Image 
                          src="/logo.png" 
                          alt="AGV Protocol" 
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Clear space = cap height of logomark
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">SOCIAL MEDIA AVATARS</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm border">
                          <Image 
                            src="/logo.png" 
                            alt="Square Avatar" 
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-medium">SQUARE AVATAR</div>
                          <div className="text-sm text-muted-foreground">Use on LinkedIn and any other platform that uses square avatars.</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm border">
                          <Image 
                            src="/logo.png" 
                            alt="Circle Avatar" 
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      <div>
                          <div className="font-medium">CIRCLE AVATAR</div>
                          <div className="text-sm text-muted-foreground">Use on X, Instagram and any other platform that uses circle avatars.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">FAVICON</h3>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-4 shadow-sm border">
                        <Image 
                          src="/logo.png" 
                          alt="Favicon" 
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">16x16px favicon for web browsers</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Color System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">COLOUR SYSTEM</h2>
                <div className="text-sm text-muted-foreground mb-6">03</div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">PRIMARY PALETTE</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#223256] rounded-xl mx-auto mb-4 shadow-sm"></div>
                      <h4 className="font-semibold mb-2">NAVY BLUE</h4>
                      <div className="text-sm text-muted-foreground mb-2">#223256</div>
                      <div className="text-xs text-muted-foreground">60 / 42 / 0 / 66</div>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#4FACFE] rounded-xl mx-auto mb-4 shadow-sm"></div>
                      <h4 className="font-semibold mb-2">SKY BLUE</h4>
                      <div className="text-sm text-muted-foreground mb-2">#4FACFE</div>
                      <div className="text-xs text-muted-foreground">69 / 32 / 0 / 0</div>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-xl mx-auto mb-4 shadow-sm"></div>
                      <h4 className="font-semibold mb-2">WHITE</h4>
                      <div className="text-sm text-muted-foreground mb-2">#FFFFFF</div>
                      <div className="text-xs text-muted-foreground">00 / 00 / 00 / 00</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">GRADIENT PALETTE</h3>
                  <div className="w-full h-24 bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-xl shadow-sm mb-4"></div>
                  <p className="text-sm text-muted-foreground text-center">
                    Navy Blue to Sky Blue gradient for modern, dynamic applications
                  </p>
                </div>
              </div>
            </Card>
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
                    <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                      LATO
                    </div>
                    <div className="text-lg mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
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
                    <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      INTER
                    </div>
                    <div className="text-lg mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                      <div className="text-6xl font-bold mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>AGV</div>
                      <div className="text-sm text-muted-foreground">XXL Title - 96PX</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>AGV</div>
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
                      <div className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>H1 - 32PX</div>
                      <div className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>H2 - 24PX</div>
                      <div className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>H3 - 20PX</div>
                      <div className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur</div>
                    </div>
                    <div>
                      <div className="text-base font-semibold mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>H4 - 16PX</div>
                      <div className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>H5 - 14PX</div>
                      <div className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">BODY USAGE</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-base mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Body Large - 16PX</div>
                      <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mus mollis ac, sociis malesuada
                        sollicitudin fringilla vivamus aenean imperdiet nec rhoncus, nunc posuere nostra
                        fermentum maecenas commodo vitae ornare nibh.
                      </div>
                    </div>
                    <div>
                      <div className="text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Body Medium - 14PX</div>
                      <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mus mollis ac, sociis malesuada
                        sollicitudin fringilla vivamus aenean imperdiet nec rhoncus, nunc posuere nostra
                        fermentum maecenas commodo vitae ornare nibh.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Body Small - 12PX</div>
                      <div className="text-xs text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mus mollis ac, sociis malesuada
                        sollicitudin fringilla vivamus aenean imperdiet nec rhoncus, nunc posuere nostra
                        fermentum maecenas commodo vitae ornare nibh.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Caption 1 - 10PX</div>
                      <div className="text-xs text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Image Placeholder 1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Photography style example</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Image Placeholder 2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Photography style example</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Image Placeholder 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Photography style example</p>
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
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Application Example 1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Brand application example</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Application Example 2</span>
                </div>
                    <p className="text-sm text-muted-foreground">Brand application example</p>
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
                    <li>• Do not use alternative lockups of the logo</li>
                    <li>• Do not use unapproved colours</li>
                    <li>• Do not outline any part of the logo</li>
                    <li>• Do not apply any special effects on the logo</li>
                    <li>• Do not rotate the logo</li>
                    <li>• Do not stretch the logo to fill space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Brand Standards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Maintain proper spacing around logos</li>
                    <li>• Use approved color variations only</li>
                    <li>• Ensure high resolution for print</li>
                    <li>• Follow typography guidelines</li>
                    <li>• Use approved fonts (Lato & Inter)</li>
                    <li>• Maintain brand consistency across all materials</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        </section>
      </Layout>
    </ProtectedRoute>
  );
}
