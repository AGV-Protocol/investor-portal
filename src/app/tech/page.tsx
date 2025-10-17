'use client';

import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import PDFViewer from '@/components/PDFViewer';
import DocumentCard from '@/components/DocumentCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';

// Document data structure
interface Document {
  title: string;
  description: string;
  url: string;
  type?: string;
}

interface DocumentSection {
  title: string;
  description: string;
  documents: Document[];
}

export default function TechPage() {
  // Main document
  const mainDocument = {
    title: "Technical Audit and Infrastructure Verification Index",
    description: "Comprehensive technical audit and infrastructure verification documentation covering system architecture, security assessments, and technology stack validation.",
    url: "https://drive.google.com/file/d/1mGqwUxxpJkHuaCjzlhQgnf8nUlLWXC0L/view?usp=drive_link"
  };

  // Document sections
  const documentSections: DocumentSection[] = [
    {
      title: "IP Summary",
      description: "Intellectual property documentation including whitepaper excerpts covering power to mint functionality and RWA mapping protocols.",
      documents: [
        {
          title: "Power to Mint (Whitepaper Excerpt) V2025.10",
          description: "Technical whitepaper excerpt detailing the power to mint functionality and token generation mechanisms within the AGV Protocol ecosystem.",
          url: "https://drive.google.com/file/d/1T-SuRerI2noUMrSeaIy7bL6wUCpYKZpU/view"
        },
        {
          title: "RWA Mapping (Whitepaper Excerpt) v2025.10",
          description: "Comprehensive whitepaper excerpt covering Real-World Asset (RWA) mapping protocols and tokenization mechanisms.",
          url: "https://drive.google.com/file/d/1NlumvYZAisfl9sZDZ9c0qeV5FDXcXTZD/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Links to GitHub (Smart Contracts)",
      description: "Access to smart contract repositories and development resources for AGV Protocol's blockchain infrastructure.",
      documents: [
        {
          title: "GitHub Profile Link",
          description: "Direct access to AGV Protocol's GitHub profile containing smart contract repositories, development documentation, and source code.",
          url: "https://docs.google.com/document/d/1YjG5OKFfkTjOht3GTaUTMRUiKazyYaMTfjj3NTKhnfM/edit"
        }
      ]
    },
    {
      title: "Pitch Decks",
      description: "Comprehensive pitch deck collection covering different versions for business development, institutional investors, and specialized presentations.",
      documents: [
        {
          title: "AGV Protocol Pitch Deck (BD-Version) v2025.10",
          description: "Business development focused pitch deck highlighting AGV Protocol's value proposition and market opportunities.",
          url: "https://drive.google.com/file/d/1kVwwThMXEOsAsfsH66yGA_7UFEbmvkAf/view"
        },
        {
          title: "AGV Protocol Pitch Deck (Institutional) v2025.10",
          description: "Institutional investor focused pitch deck with detailed financial projections and risk assessments.",
          url: "https://drive.google.com/file/d/11rC_K2nBziNDhDtFdIu-LtdhlGJtgsLB/view"
        },
        {
          title: "AGV Protocol Pitch Deck (Oil to AI Power Edition) v2025.10",
          description: "Specialized pitch deck focusing on the transition from traditional oil-based power to AI-powered renewable energy solutions.",
          url: "https://drive.google.com/file/d/1NlWfJ2tjYq8mWH-oXnZAXv4AXXBSUNDN/view"
        },
        {
          title: "AGV Protocol Pitch Deck v2025.10",
          description: "Comprehensive pitch deck covering all aspects of AGV Protocol including technology, market opportunity, and business model.",
          url: "https://drive.google.com/file/d/11N8RXY9NnAQd9bi-nyvCBco2l6c0vZVo/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Technology Architecture & Process Flow",
      description: "Detailed technical documentation covering system architecture, process flows, and ecosystem design.",
      documents: [
        {
          title: "AGV Protocol Ecosystem V2025.10",
          description: "Comprehensive ecosystem documentation covering technology architecture, process flows, and system integration points.",
          url: "https://drive.google.com/file/d/1u1yQ5ZVKRHoVKupUULg2mcscZVgV7v9E/view"
        }
      ]
    }
  ];

  return (
    <ProtectedRoute>
      <Layout>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Technology & Architecture"
              subtitle="Technical Documentation"
              description="Explore AGV Protocol's technical infrastructure, system architecture, and security audits through comprehensive documentation."
              className="mb-16"
            />

            {/* Main Document */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">{mainDocument.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {mainDocument.description}
                </p>
                <div>
                  <PDFViewer 
                    className='!h-[50vh]'
                    fileUrl={mainDocument.url} 
                    title={mainDocument.title}
                  />
                </div>
              </Card>
            </motion.div>

            {/* Technical Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Technical Metrics</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                    <div className="text-sm text-muted-foreground">Transaction Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
                    <div className="text-sm text-muted-foreground">Encryption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Document Sections */}
            {documentSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.documents.map((doc, docIndex) => (
                    <motion.div
                      key={doc.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + sectionIndex * 0.1 + docIndex * 0.05 }}
                    >
                      <DocumentCard
                        title={doc.title}
                        description={doc.description}
                        url={doc.url}
                        type={doc.url.includes('github') || doc.url.includes('docs.google') ? "LINK" : "PDF"}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Technical Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8"
            >
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Technology Stack</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Blockchain</div>
                    <div className="text-sm text-primary/80">Smart Contracts & DeFi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">IoT</div>
                    <div className="text-sm text-primary/80">Real-time Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">AI/ML</div>
                    <div className="text-sm text-primary/80">Predictive Analytics</div>
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
