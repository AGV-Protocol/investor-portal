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

export default function ESGPage() {
  // Main document
  const mainDocument = {
    title: "ESG & Sustainability Impact Report",
    description: "Comprehensive assessment of AGV Protocol's environmental impact, sustainability initiatives, and real-world asset verification.",
    url: "https://drive.google.com/file/d/1ZXuMQ_J1qk2kO0ikhb7v7A9G5JCyJ-SR/view"
  };

  // Document sections
  const documentSections: DocumentSection[] = [
    {
      title: "Administrative and Financial Documents",
      description: "Essential legal and financial documentation for project establishment and compliance.",
      documents: [
        {
          title: "Registration Confirmation of Enterprise Investment Project in Shaanxi Province",
          description: "Official registration confirmation for the enterprise investment project in Shaanxi Province.",
          url: "https://drive.google.com/file/d/1UpKQf0Is2pK4mMpFRe7n4E5R2Gosuzvs/view?usp=drive_link"
        },
        {
          title: "Land Lease Contract",
          description: "Legal documentation for land lease agreements and property rights.",
          url: "https://drive.google.com/file/d/1UXijBBnkcNvfgutvGLFW5enBojdg_Uc1/view"
        },
        {
          title: "Government Agricultural Photovoltaic Joint Venture Agreement",
          description: "Official joint venture agreement between government and agricultural photovoltaic project partners.",
          url: "https://drive.google.com/file/d/1wU09tigbNCNZqlFrvVIWYFhaMly8GXDh/view"
        },
        {
          title: "Financial Due Diligence Report",
          description: "Comprehensive financial analysis and due diligence assessment of the project.",
          url: "https://drive.google.com/file/d/1HxNe-6IuSeOTEafhwygbuuJtcLS-fR8X/view"
        }
      ]
    },
    {
      title: "Yichuan County 6.42 MW Orchard + Solar Hybrid Project (Approvals & Reviews)",
      description: "Complete set of government approvals and regulatory reviews for the Yichuan County solar hybrid project.",
      documents: [
        {
          title: "Yunyan Town Land Transfer Certificate",
          description: "Official land transfer certificate from Yunyan Town authorities.",
          url: "https://drive.google.com/file/d/1ntEUKVU2DyQJvf7S6EiQVwBs3Zik8cqq/view"
        },
        {
          title: "Economic Development Bureau Approval",
          description: "Approval documentation from the Economic Development Bureau.",
          url: "https://drive.google.com/file/d/1u8h-9m52UNpLTr05EIS1ueNeLwZ5zpzn/view"
        },
        {
          title: "Natural Resources Bureau Approval",
          description: "Official approval from the Natural Resources Bureau for land use and environmental compliance.",
          url: "https://drive.google.com/file/d/1j5DIpobUMu9830h_oa7YgUi4QN0-dida/view"
        },
        {
          title: "Yichuan County Coal Reduction Office Land Approval",
          description: "Land approval documentation from the Yichuan County Coal Reduction Office.",
          url: "https://drive.google.com/file/d/1V1UUn5Qm8YFC8HDkEGN-5IyP439luGts/view"
        },
        {
          title: "Yichuan County Economic Development Bureau Opinion",
          description: "Official opinion and recommendation from the Yichuan County Economic Development Bureau.",
          url: "https://drive.google.com/file/d/1Jat6StbcuNZg9U2My2ShF0w8VQcaoxOV/view"
        },
        {
          title: "Yichuan County Development and Reform Bureau Approval",
          description: "Approval documentation from the Yichuan County Development and Reform Bureau.",
          url: "https://drive.google.com/file/d/19pGP79fUdrdLvoMhbDU5kb4VO2Mpa80J/view"
        },
        {
          title: "Yichuan County Forestry Bureau Approval",
          description: "Forestry and environmental approval from the Yichuan County Forestry Bureau.",
          url: "https://drive.google.com/file/d/1T9KIotVbS-IK3XGTa_PD4qMtraQyd5P4/view"
        },
        {
          title: "Yichuan County Environmental Protection Bureau Opinion",
          description: "Environmental impact assessment and opinion from the Environmental Protection Bureau.",
          url: "https://drive.google.com/file/d/1jwk-fY_bNvxdIn_jW7AjIolnCWqTuVfb/view"
        }
      ]
    },
    {
      title: "Zhongnan Group Cooperation Agreements",
      description: "Strategic partnership agreements and cooperation documentation with Zhongnan Group.",
      documents: [
        {
          title: "Zhongnan Group Energy Cooperation Agreement",
          description: "Strategic energy cooperation agreement between AGV Protocol and Zhongnan Group.",
          url: "https://drive.google.com/file/d/14oATLDNL95wintBSZAlwvelOe0i4C4lf/view"
        },
        {
          title: "Zhongnan Group Yichuan Cooperation Agreement",
          description: "Specific cooperation agreement for the Yichuan County project with Zhongnan Group.",
          url: "https://drive.google.com/file/d/1lDZ159lXVQuZSPIyfzXF2sYTGdDZhRXB/view"
        },
        {
          title: "Supplementary Agreement",
          description: "Additional terms and conditions supplementing the main cooperation agreements.",
          url: "https://drive.google.com/file/d/1MNuv_XXGVu17eyCYVRMSmhkhZBP7LEyY/view"
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
              title="ESG & Real-World Asset Proof"
              subtitle="Sustainability & Impact"
              description="Explore AGV Protocol's environmental impact, sustainability initiatives, and real-world asset verification through comprehensive documentation."
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
                    className='!h-[70vh]'
                    fileUrl={mainDocument.url} 
                    title={mainDocument.title}
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

            {/* Real-World Asset Verification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
              transition={{ duration: 0.6, delay: 1.0 }}
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
