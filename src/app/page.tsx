'use client';

import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { motion } from 'framer-motion';
import { FiSettings, FiBarChart, FiShield, FiHeart } from 'react-icons/fi';

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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="AGV Protocol Investor Portal"
            subtitle="Welcome"
            description="Access comprehensive documentation, financial models, and technical resources for AGV Protocol's innovative blockchain infrastructure."
            className="mb-16"
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
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* One-Pager Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Executive Summary"
            subtitle="One-Pager"
            description="Get a quick overview of AGV Protocol's vision, technology, and market opportunity."
            className="mb-12"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-6">
                    AGV Protocol bridges the gap between real-world assets and blockchain technology, 
                    creating a sustainable infrastructure for IoT-enabled asset tokenization.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market Size:</span>
                      <span className="font-medium">$2.5T+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Target ROI:</span>
                      <span className="font-medium">25-40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">18-24 months</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Blockchain Infrastructure</li>
                    <li>• IoT Device Integration</li>
                    <li>• Smart Contract Automation</li>
                    <li>• Real-time Data Feeds</li>
                    <li>• Carbon Tracking</li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button href="/tech" variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
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
