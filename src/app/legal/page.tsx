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

export default function LegalPage() {
  // Main document
  const mainDocument = {
    title: "Legal Packet Index",
    description: "Comprehensive legal documentation index for institutional due diligence and compliance review, covering all legal structures and regulatory requirements.",
    url: "https://drive.google.com/file/d/1YBs9KNhi0pht2mQkglykG4_8iNQmnhRd/view"
  };

  // Document sections
  const documentSections: DocumentSection[] = [
    {
      title: "Articles of Association",
      description: "Official articles of association and corporate governance documents for BVI entities.",
      documents: [
        {
          title: "BVI JLL Asset Ltd Articles of Association v2025.10",
          description: "Official articles of association for BVI JLL Asset Ltd, establishing corporate governance framework and operational guidelines.",
          url: "https://drive.google.com/file/d/1VO6wmr2tRIu6oe5GyCDxSiJ1LJXUiKjW/view"
        }
      ]
    },
    {
      title: "China Onshore Asset Entities",
      description: "Legal documentation for China onshore asset entities including authorization agreements, board resolutions, and compliance statements.",
      documents: [
        {
          title: "Authorization Agreement CHN CO_BVI 2025 v2025.10",
          description: "Authorization agreement between China onshore entities and BVI holding company for asset management and operations.",
          url: "https://drive.google.com/file/d/1AR0hlm23iudg9vhu76Tt_RN068N-CQp8/view"
        },
        {
          title: "Board Resolution CHN CO_BVI 2025 v2025.10",
          description: "Official board resolution from China onshore entities authorizing BVI operations and asset management activities.",
          url: "https://drive.google.com/file/d/1wJgiNtARV2disKQOblUb2eT6zjNp9_LE/view"
        },
        {
          title: "Compliance Statement CHN CO_BVI 2025 v2025.10",
          description: "Comprehensive compliance statement from China onshore entities regarding regulatory adherence and operational standards.",
          url: "https://drive.google.com/file/d/1Ac94emrXNET5E_N_kznhbnvcraXfXr9f/view"
        },
        {
          title: "Irrevocable Authorization Statement CHN CO_BVI 2025 v2025.10",
          description: "Irrevocable authorization statement granting BVI entities full authority over China onshore asset operations.",
          url: "https://drive.google.com/file/d/1zRKNFVwFdKfEPJlltW1LWnBskmB4sn5I/view"
        },
        {
          title: "No Litigation/Arbitration Certificate CHN CO_BVI 2025 v2025.10",
          description: "Official certificate confirming no pending litigation or arbitration proceedings for China onshore entities.",
          url: "https://drive.google.com/file/d/1tgKsYSQhYpjRL0jyiSrUtYse4mWSauFg/view"
        },
        {
          title: "Tax Registration Certificate & Tax Clearance Certificate CHN CO_BVI 2025 v2025.10",
          description: "Official tax registration and clearance certificates from Chinese tax authorities for onshore entities.",
          url: "https://drive.google.com/file/d/1vcG1nkJhsdtsb1BnBtz3m0PyprtOuxtN/view"
        }
      ]
    },
    {
      title: "Offshore Holding SPV - British Virgin Islands",
      description: "Complete legal documentation for BVI offshore holding special purpose vehicle including board resolutions, authorization chains, and compliance statements.",
      documents: [
        {
          title: "Board Resolution (Re-Authorization) BVI_ijet 2025 v2025.10",
          description: "Board resolution for re-authorization of BVI ijet operations and asset management activities.",
          url: "https://drive.google.com/file/d/16s2tb3ZCrfw3-BUDr7fcZeByyegFTMwZ/view"
        },
        {
          title: "Chain of Authorization BVI_ijet 2025 v2025.10",
          description: "Complete chain of authorization documentation establishing legal authority flow from BVI entities.",
          url: "https://drive.google.com/file/d/1bcVcuPVfooW1OPRm-Q4IVLvD0QyhnM9h/view?usp=drive_link"
        },
        {
          title: "Compliance Statement BVI_ijet ltd 2025 v2025.10",
          description: "Comprehensive compliance statement from BVI ijet ltd regarding regulatory adherence and operational standards.",
          url: "https://drive.google.com/file/d/1KmTQ5qbF3B22IAqzRnYj_-6ZPv00RgBM/view"
        },
        {
          title: "Irrevocable Authorization Statement BVI_ijet ltd 2025 v2025.10",
          description: "Irrevocable authorization statement from BVI ijet ltd establishing permanent operational authority.",
          url: "https://drive.google.com/file/d/1h8bFYZc6bA2ExmeTPXwXdflfEFV-VdsA/view"
        },
        {
          title: "KYC & AML Documentation BVI_ijet Ltd 2025 v2025.10",
          description: "Complete Know Your Customer and Anti-Money Laundering documentation for BVI ijet Ltd.",
          url: "https://drive.google.com/file/d/1ODXb4uxKYtoJUjJrqXFIDGtakfc-5EL_/view"
        },
        {
          title: "No Litigation/Arbitration Certificate BVI_ijet ltd 2025 v2025.10",
          description: "Official certificate confirming no pending litigation or arbitration proceedings for BVI ijet ltd.",
          url: "https://drive.google.com/file/d/1LDHkr2xd-PyS9-yrljylKLufaeOrSrLL/view"
        },
        {
          title: "Re-Authorization Agreement BVI Ijet ltd 2025 v2025.10",
          description: "Re-authorization agreement establishing renewed operational authority for BVI Ijet ltd.",
          url: "https://drive.google.com/file/d/1mqklbyqi7DVmWR5yfsGNnPGluzQcFEbX/view"
        },
        {
          title: "Revenue and Distribution Agreement BVI_ijet ltd 2025 v2025.10",
          description: "Revenue and distribution agreement outlining profit sharing and distribution mechanisms for BVI ijet ltd.",
          url: "https://drive.google.com/file/d/1CdrQf3KMX7dWnOiIdcR5BuBWcv5VzJ_N/view"
        }
      ]
    },
    {
      title: "Issuer & DAO Governance SPV - New Zealand",
      description: "Legal documentation for New Zealand-based issuer and DAO governance special purpose vehicle including incorporation certificates and authorization agreements.",
      documents: [
        {
          title: "Certificate of Incorporation (3669875 11November2022) v2025.10",
          description: "Official certificate of incorporation for New Zealand entity (3669875) dated November 11, 2022.",
          url: "https://drive.google.com/file/d/1YjTLsm13Z-4I4pg9SdxQyBsN0TNQY_iH/view?usp=drive_link"
        },
        {
          title: "Chain of Authorization BVI_ijet 2025 v2025.10",
          description: "Chain of authorization documentation establishing legal authority flow from BVI to New Zealand entities.",
          url: "https://drive.google.com/file/d/1NzKP2HuxwkyaLm05rfZqP44QTX_qcAHq/view"
        },
        {
          title: "Company Extract (3669875 11November2022) v2025.10",
          description: "Official company extract from New Zealand Companies Office for entity 3669875 dated November 11, 2022.",
          url: "https://drive.google.com/file/d/1QZhelus1-4TrhgnANevsBjEJQYPXFCXs/view"
        },
        {
          title: "Constitution of New Zealand iJet Limited",
          description: "Official constitution document for New Zealand iJet Limited establishing corporate governance framework and operational guidelines.",
          url: "https://drive.google.com/file/d/1Zz8BOD14rNn5YzGVkFBLibDFMRhW6a_c/view"
        },
        {
          title: "Re-Authorization Agreement BVI Ijet ltd 2025 v2025.10",
          description: "Re-authorization agreement between BVI and New Zealand entities establishing operational authority.",
          url: "https://drive.google.com/file/d/1_QpJFdrRySDYSm1b8DB3LPwY57xbV3gt/view"
        }
      ]
    },
    {
      title: "Legal Structure & Verification Documents",
      description: "Legal structure summary and verification documents including certified translations and legal summaries.",
      documents: [
        {
          title: "AGV Protocol – Legal Structure Summary",
          description: "Comprehensive legal structure summary outlining the complete corporate and legal framework of AGV Protocol.",
          url: "https://drive.google.com/file/d/1hGtoKW-iZ2cIGSFZAYIFoMbDRLijo7Bb/view"
        },
        {
          title: "NAATI Certified Translator Chinese into English Certificate",
          description: "Official NAATI certification for Chinese to English translation services (Certificate 3327_620583_6).",
          url: "https://drive.google.com/file/d/1SU-FsT6WAk2IHNtDIHlbwn9N26BiN8VU/view"
        },
        {
          title: "NZSTII Certified Translator Chinese into English Certificate of Membership",
          description: "Official NZSTII membership certificate for certified Chinese to English translation services.",
          url: "https://drive.google.com/file/d/117pK6bwoasfOAC_Lc25H0-kLTn-VrpFx/view"
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
            title="Legal & Registration Documents"
            subtitle="Legal Documentation"
              description="Review AGV Protocol's comprehensive legal structure, compliance status, and regulatory framework through detailed documentation."
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
                        <span className="text-sm">BVI Corporate Registration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm">New Zealand Incorporation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">KYC/AML Compliance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm">China Onshore Registration</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal Structure</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                      <div>• BVI Holding Company (JLL Asset Ltd)</div>
                      <div>• New Zealand SPV (3669875)</div>
                      <div>• China Onshore Entities</div>
                      <div>• Multi-jurisdictional Compliance</div>
                  </div>
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

          {/* Legal Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Legal Framework</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Corporate Governance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                      <li>• Multi-jurisdictional structure</li>
                      <li>• BVI holding company framework</li>
                      <li>• New Zealand DAO governance</li>
                      <li>• China onshore compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Risk Management</h3>
                  <ul className="space-y-2 text-muted-foreground">
                      <li>• Comprehensive legal documentation</li>
                      <li>• Certified translation services</li>
                      <li>• Regulatory compliance monitoring</li>
                      <li>• Multi-jurisdictional legal opinions</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

            {/* Legal Structure Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8"
            >
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Legal Structure Overview</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">BVI</div>
                    <div className="text-sm text-primary/80">Holding Company</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">NZ</div>
                    <div className="text-sm text-primary/80">DAO Governance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">CN</div>
                    <div className="text-sm text-primary/80">Onshore Assets</div>
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
