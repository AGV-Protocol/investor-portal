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

export default function FinancialsPage() {
  // Main document
  const mainDocument = {
    title: "Financial Audit and Valuation Index",
    description: "Comprehensive financial audit and valuation analysis for AGV Protocol, including detailed financial models, projections, and investment metrics.",
    url: "https://drive.google.com/file/d/1zSuRXGfmgzzgb_yt6pM_rWHab6JX1fmB/view"
  };

  // Document sections
  const documentSections: DocumentSection[] = [
    {
      title: "Financial Documentation & Reports",
      description: "Essential financial documents including token handbooks, integrated reports, cap tables, and whitepaper excerpts.",
      documents: [
        {
          title: "AGV Protocol Token Handbook v2025",
          description: "Comprehensive guide to AGV Protocol tokens, including utility, governance, and economic models.",
          url: "https://drive.google.com/file/d/1UDTw12_to8yaOdIw6L2JS7qTJPhgWzSC/view?usp=drive_link"
        },
        {
          title: "AGV Protocol – Integrated Financial & Valuation Report v2025.10",
          description: "Detailed integrated financial analysis and valuation report covering all aspects of the protocol's financial performance.",
          url: "https://drive.google.com/file/d/116klZMugB6RTx48Ne0nsM-haU_I9T3Ei/view"
        },
        {
          title: "Cap Table BVI Shareholder Resolution V2025.10",
          description: "Official cap table documentation and shareholder resolution from BVI jurisdiction.",
          url: "https://drive.google.com/file/d/1RVcIHLbRXmbj7DWaPufXld-G2k7ElyqE/view?usp=drive_link"
        },
        {
          title: "Dual Token rGGP + GVT (Whitepaper Excerpts) v2025.10",
          description: "Technical whitepaper excerpts detailing the dual token system with rGGP and GVT tokens.",
          url: "https://drive.google.com/file/d/1wVAcZu7wwtNsK8sx4TuJYqKpRbDsYKeH/view"
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
              title="Financial Models & Projections"
              subtitle="Financial Documentation"
              description="Access detailed financial models, valuation analyses, and revenue projections for AGV Protocol through comprehensive documentation."
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

            {/* Key Financial Metrics */}
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
                        type="PDF"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Revenue Streams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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

            {/* Investment Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Investment Highlights</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Market Opportunity</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• $2.5T total addressable market</li>
                      <li>• Growing demand for sustainable investments</li>
                      <li>• Regulatory support for green finance</li>
                      <li>• First-mover advantage in RWA tokenization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Financial Projections</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 25-40% expected ROI</li>
                      <li>• $50M Series A funding target</li>
                      <li>• 18-24 months to profitability</li>
                      <li>• Multiple revenue streams</li>
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
