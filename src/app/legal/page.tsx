'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import PDFViewer from '@/components/PDFViewer';
import { getDocumentsByCategory, Document } from '@/lib/firestore';
import { motion } from 'framer-motion';
import { FiFile } from 'react-icons/fi';

export default function LegalPage() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocumentsByCategory('legal');
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Legal & Registration Documents"
            subtitle="Legal Documentation"
            description="Review AGV Protocol's legal structure, compliance status, and regulatory framework."
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
              <h2 className="text-2xl font-semibold mb-4">Featured: Certificate of Incorporation</h2>
              <p className="text-muted-foreground mb-6">
                Official incorporation documents and business registration for AGV Protocol.
              </p>
              <div className="h-96">
                <PDFViewer 
                  fileUrl="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf" 
                  title="Certificate of Incorporation"
                />
              </div>
            </Card>
          </motion.div>

          {/* Compliance Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Compliance Status</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Regulatory Compliance</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">SEC Registration (Pending)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">KYC/AML Compliance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <span className="text-sm">Token Classification (In Review)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">Data Protection (GDPR)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal Structure</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <div>• Delaware C-Corporation</div>
                    <div>• Established: Q3 2023</div>
                    <div>• Registered Agent: LegalCorp Inc.</div>
                    <div>• Tax ID: 12-3456789</div>
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

          {/* Legal Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Legal Framework</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Corporate Governance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Board of Directors (5 members)</li>
                    <li>• Independent audit committee</li>
                    <li>• Regular compliance reviews</li>
                    <li>• Transparent reporting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Risk Management</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comprehensive insurance coverage</li>
                    <li>• Legal opinion letters</li>
                    <li>• Regulatory monitoring</li>
                    <li>• Compliance training programs</li>
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
