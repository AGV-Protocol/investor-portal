'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import PDFViewer from '@/components/PDFViewer';
import { getDocumentsByCategory, Document } from '@/lib/firestore';
import { motion } from 'framer-motion';
import { FiFile, FiDownload } from 'react-icons/fi';

export default function TechPage() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocumentsByCategory('tech');
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Technology & Architecture"
            subtitle="Technical Documentation"
            description="Explore AGV Protocol's technical infrastructure, system architecture, and security audits."
            className="mb-16"
          />

          {/* Featured Document */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Featured: System Architecture</h2>
                <p className="text-muted-foreground mb-6">
                  Comprehensive overview of AGV Protocol&apos;s blockchain infrastructure and IoT integration layers.
                </p>
              <div className="h-96">
                <PDFViewer 
                  fileUrl="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf" 
                  title="AGV Protocol Architecture"
                />
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
                  
                  <div className="flex gap-2">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors"
                    >
                      View Document
                    </a>
                    <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
                      <FiDownload size={16} />
                      Download
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technical Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Technical Highlights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Blockchain Infrastructure</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Layer 2 scaling solutions</li>
                    <li>• Smart contract automation</li>
                    <li>• Cross-chain interoperability</li>
                    <li>• Decentralized governance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">IoT Integration</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time data feeds</li>
                    <li>• Device authentication</li>
                    <li>• Carbon tracking sensors</li>
                    <li>• Automated compliance</li>
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
