'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { getDocumentsByCategory, Document } from '@/lib/firestore';
import { motion } from 'framer-motion';
import { FiFile } from 'react-icons/fi';
import Image from 'next/image';

export default function BrandKitPage() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocumentsByCategory('brandkit');
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Brand Assets & Guidelines"
            subtitle="Brand Kit"
            description="Download AGV Protocol's complete brand assets, logos, and marketing materials."
            className="mb-16"
          />

          {/* Brand Guidelines Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Brand Guidelines</h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive brand identity guidelines including logo usage, color palette, typography, and design principles.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Color Palette</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary rounded mr-3"></div>
                      <div>
                        <div className="font-medium">Primary Blue</div>
                        <div className="text-sm text-muted-foreground">#3399FF</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-secondary rounded mr-3"></div>
                      <div>
                        <div className="font-medium">Secondary Gray</div>
                        <div className="text-sm text-muted-foreground">#F8FAFC</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-foreground rounded mr-3"></div>
                      <div>
                        <div className="font-medium">Text Dark</div>
                        <div className="text-sm text-muted-foreground">#171717</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Typography</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold">Inter (Primary)</div>
                      <div className="text-sm text-muted-foreground">Headings and body text</div>
                    </div>
                    <div>
                      <div className="font-semibold">Poppins (Secondary)</div>
                      <div className="text-sm text-muted-foreground">Display and accent text</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Logo Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Logo Variations</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border">
                    <Image 
                      src="/logo.png" 
                      alt="AGV Protocol Primary Logo" 
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">Primary Logo</h3>
                  <p className="text-sm text-muted-foreground">Main brand logo for all applications</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Image 
                      src="/logo.png" 
                      alt="AGV Protocol Dark Logo" 
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">Dark Variant</h3>
                  <p className="text-sm text-muted-foreground">For dark backgrounds</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 border-2 border-primary rounded-xl flex items-center justify-center mx-auto mb-4 bg-white">
                    <Image 
                      src="/logo.png" 
                      alt="AGV Protocol Outline Logo" 
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">Outline Variant</h3>
                  <p className="text-sm text-muted-foreground">For minimal applications</p>
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Brand Usage Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Do&apos;s</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Maintain proper spacing around logos</li>
                    <li>• Use approved color variations only</li>
                    <li>• Ensure high resolution for print</li>
                    <li>• Follow typography guidelines</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Don&apos;ts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Don&apos;t modify logo proportions</li>
                    <li>• Don&apos;t use unapproved colors</li>
                    <li>• Don&apos;t place on busy backgrounds</li>
                    <li>• Don&apos;t use low-resolution versions</li>
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
