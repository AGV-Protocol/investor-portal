'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import PDFViewer from '@/components/PDFViewer';
import { getDocumentsByCategory, Document } from '@/lib/firestore';
import { motion } from 'framer-motion';
import { FiFile } from 'react-icons/fi';

export default function FinancialsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocumentsByCategory('financials');
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Financial Models & Projections"
            subtitle="Financial Documentation"
            description="Access detailed financial models, valuation analyses, and revenue projections for AGV Protocol."
            className="mb-16"
          />

          {/* Featured Financial Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Featured: Q1 2024 Financial Model</h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive financial projections including revenue streams, cost structures, and growth assumptions.
              </p>
              <div className="h-96">
                <PDFViewer 
                  fileUrl="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf" 
                  title="Q1 2024 Financial Model"
                />
              </div>
            </Card>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Key Financial Metrics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$2.5T</div>
                  <div className="text-sm text-muted-foreground">Total Addressable Market</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25-40%</div>
                  <div className="text-sm text-muted-foreground">Expected ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50M</div>
                  <div className="text-sm text-muted-foreground">Series A Target</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">18-24</div>
                  <div className="text-sm text-muted-foreground">Months to Profitability</div>
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

          {/* Revenue Streams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Revenue Streams</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transaction Fees</h3>
                  <p className="text-muted-foreground text-sm">0.1-0.5% per asset tokenization transaction</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Subscription Services</h3>
                  <p className="text-muted-foreground text-sm">Monthly/annual fees for premium features</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Data Licensing</h3>
                  <p className="text-muted-foreground text-sm">Licensing of IoT and carbon tracking data</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
