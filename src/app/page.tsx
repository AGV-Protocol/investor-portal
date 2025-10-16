'use client';

import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import Card from '@/components/Card';
import PDFViewer from '@/components/PDFViewer';
import { motion } from 'framer-motion';
import { FiSettings, FiBarChart, FiShield, FiHeart, FiFile } from 'react-icons/fi';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      title: 'Technology & Architecture',
      description: 'Explore our technical whitepaper, system diagrams, and audit reports.',
      href: '/tech',
      icon: <FiSettings size={24} />,
    },
    {
      title: 'Financial Models',
      description: 'Access detailed financial projections, valuations, and token economics.',
      href: '/financials',
      icon: <FiBarChart size={24} />,
    },
    {
      title: 'Legal Documentation',
      description: 'Review incorporation docs, IP transfers, and regulatory compliance.',
      href: '/legal',
      icon: <FiShield size={24} />,
    },
    {
      title: 'ESG & Sustainability',
      description: 'Discover our environmental impact and real-world asset verification.',
      href: '/esg',
      icon: <FiHeart size={24} />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/landing-hero.png"
            alt="AGV Protocol - Sustainable Energy Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader
            title="AGV Protocol Investor Portal"
            subtitle="Welcome"
            description="Access comprehensive documentation, financial models, and technical resources for AGV Protocol's innovative blockchain infrastructure."
            className="mb-16"
            variant="white"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <Button href="/investor" variant="primary" size="lg" className="mr-4">
              Explore Data Room
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="text-white hover:text-primary">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pitch Deck and Executive Summary Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Investment Materials"
            subtitle="Key Documents"
            description="Review our comprehensive pitch deck and executive summary covering AGV Protocol's vision, technology, and market opportunity."
            className="mb-12"
          />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pitch Deck */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <FiFile size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Pitch Deck</h3>
                      <p className="text-muted-foreground text-sm">Complete investment presentation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Last updated</div>
                    <div className="text-sm font-medium">December 2024</div>
                  </div>
                </div>
                
                <div className="h-[500px] rounded-lg overflow-hidden border border-border mb-6">
                  <PDFViewer 
                    fileUrl="https://drive.google.com/file/d/11N8RXY9NnAQd9bi-nyvCBco2l6c0vZVo/view" 
                    title="AGV Protocol Pitch Deck"
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive presentation covering vision, technology, and financial projections.
                  </p>
                  <Button href="/contact" variant="outline" size="sm">
                    Request Additional Information
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <FiFile size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Executive Summary</h3>
                    <p className="text-muted-foreground text-sm">Quick overview and key metrics</p>
                  </div>
                </div>
                
                <div className="h-[500px] rounded-lg overflow-hidden border border-border mb-6">
                  <PDFViewer
                    fileUrl="https://drive.google.com/file/d/11N8RXY9NnAQd9bi-nyvCBco2l6c0vZVo/view"
                    title="AGV Protocol Pitch Deck"
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive presentation covering vision, technology, and financial projections.
                  </p>
                  <Button href="/contact" variant="outline" size="sm">
                    Request Additional Information
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Investment Resources"
            subtitle="Data Room"
            description="Comprehensive documentation and resources for potential investors and partners."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>
                  <Button href={feature.href} variant="outline" size="sm" className="w-full">
                    Explore
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Invest in the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join AGV Protocol in revolutionizing real-world asset tokenization through sustainable blockchain infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Schedule a Call
              </Button>
              <Button href="/investor" variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Access Full Data Room
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
