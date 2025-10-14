'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { getAllDocuments, Document } from '@/lib/firestore';
import { motion } from 'framer-motion';
import { FiSettings, FiBarChart, FiShield, FiHeart } from 'react-icons/fi';

export default function InvestorPage() {
  const [allDocuments, setAllDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getAllDocuments();
      setAllDocuments(docs);
    };
    fetchDocuments();
  }, []);

  const categories = [
    {
      name: 'Technology',
      href: '/tech',
      description: 'Technical documentation, architecture, and audit reports',
      icon: <FiSettings className="w-6 h-6" />,
      count: allDocuments.filter(doc => doc.category === 'tech').length,
    },
    {
      name: 'Financials',
      href: '/financials',
      description: 'Financial models, valuations, and projections',
      icon: <FiBarChart className="w-6 h-6" />,
      count: allDocuments.filter(doc => doc.category === 'financials').length,
    },
    {
      name: 'Legal',
      href: '/legal',
      description: 'Legal documents, compliance, and registration',
      icon: <FiShield className="w-6 h-6" />,
      count: allDocuments.filter(doc => doc.category === 'legal').length,
    },
    {
      name: 'ESG',
      href: '/esg',
      description: 'Environmental impact and sustainability reports',
      icon: <FiHeart className="w-6 h-6" />,
      count: allDocuments.filter(doc => doc.category === 'esg').length,
    },
    {
      name: 'Brand Kit',
      href: '/brandkit',
      description: 'Brand assets, logos, and marketing materials',
      // Changed icon to a defined icon (FiBarChart as placeholder since FiPalette does not exist)
      icon: <FiBarChart className="w-6 h-6" />,
      count: allDocuments.filter(doc => doc.category === 'brandkit').length,
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="AGV Protocol Data Room"
            subtitle="Investor Portal"
            description="Comprehensive access to all AGV Protocol documentation, financial models, and investment materials."
            className="mb-16"
          />

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Data Room Overview</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{allDocuments.length}</div>
                  <div className="text-sm text-muted-foreground">Total Documents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Access Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Transparency</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {category.count} docs
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  
                  <Button href={category.href} variant="outline" size="sm" className="w-full">
                    Explore {category.name}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Recently Updated Documents</h2>
              <div className="space-y-4">
                {allDocuments.slice(0, 5).map((doc, index) => (
                  <div key={doc.title} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {doc.category}
                      </span>
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Investment Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Investment Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Review Materials</h3>
                  <p className="text-sm text-muted-foreground">Explore our comprehensive documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Schedule Call</h3>
                  <p className="text-sm text-muted-foreground">Connect with our team for detailed discussions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Due Diligence</h3>
                  <p className="text-sm text-muted-foreground">Access confidential information with NDA</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Investment Decision</h3>
                  <p className="text-sm text-muted-foreground">Finalize terms and join AGV Protocol</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Card className="p-8 bg-primary">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Ready to Invest in AGV Protocol?
              </h2>
              <p className="text-white/90 mb-6">
                Join us in revolutionizing real-world asset tokenization through sustainable blockchain infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Our Team
                </Button>
                <Button href="/financials" variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  View Financial Models
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
