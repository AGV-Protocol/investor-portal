'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import PDFViewer from '@/components/PDFViewer';
import ProtectedRoute from '@/components/ProtectedRoute';
import { getDocumentsByCategory, Document } from '@/lib/firestore';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

export default function ESGPage() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocumentsByCategory('esg');
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  return (
    <ProtectedRoute>
      <Layout>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="ESG & Real-World Asset Proof"
            subtitle="Sustainability & Impact"
            description="Explore AGV Protocol's environmental impact, sustainability initiatives, and real-world asset verification."
            className="mb-16"
          />

          {/* Featured ESG Report */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Featured: Sustainability Impact Report</h2>
                <p className="text-muted-foreground mb-6">
                  Comprehensive assessment of AGV Protocol&apos;s environmental impact and carbon footprint reduction initiatives.
                </p>
              <div className="h-96">
                <PDFViewer 
                  fileUrl="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf" 
                  title="Sustainability Impact Report"
                />
              </div>
            </Card>
          </motion.div>

          {/* ESG Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">ESG Performance Metrics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">-45%</div>
                  <div className="text-sm text-muted-foreground">Carbon Footprint Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Renewable Energy Usage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Waste Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Verified RWA Assets</div>
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
                      <FiHeart size={24} />
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {doc.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                  
                  <div className="flex gap-2">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors"
                    >
                      View Document
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Real-World Asset Verification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Real-World Asset Verification</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">IoT Monitoring</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time asset tracking</li>
                    <li>• Environmental sensors</li>
                    <li>• Carbon emission monitoring</li>
                    <li>• Automated compliance reporting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Verification Process</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Third-party audits</li>
                    <li>• Blockchain immutability</li>
                    <li>• Smart contract automation</li>
                    <li>• Transparent reporting</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Carbon Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Carbon Impact Dashboard</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2.3M</div>
                  <div className="text-sm text-primary/80">Tons CO2 Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">1,250</div>
                  <div className="text-sm text-primary/80">IoT Devices Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-primary/80">Real-time Monitoring</div>
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
