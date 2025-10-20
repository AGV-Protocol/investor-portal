'use client';

import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import PDFViewer from '@/components/PDFViewer';
import DocumentCard from '@/components/DocumentCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';

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
  const { t } = useTranslations();
  // Main document
  const mainDocument = {
    title: t('financials.mainDocument.title'),
    description: t('financials.mainDocument.description'),
    url: "https://drive.google.com/file/d/1zSuRXGfmgzzgb_yt6pM_rWHab6JX1fmB/view"
  };

  // Document sections
  const documentSections: DocumentSection[] = [
    {
      title: t('financials.documents.title'),
      description: t('financials.documents.description'),
      documents: [
        {
          title: t('financials.documents.tokenHandbook'),
          description: t('financials.documents.tokenHandbookDesc'),
          url: "https://drive.google.com/file/d/1UDTw12_to8yaOdIw6L2JS7qTJPhgWzSC/view?usp=drive_link"
        },
        {
          title: t('financials.documents.integratedReport'),
          description: t('financials.documents.integratedReportDesc'),
          url: "https://drive.google.com/file/d/116klZMugB6RTx48Ne0nsM-haU_I9T3Ei/view"
        },
        {
          title: t('financials.documents.capTable'),
          description: t('financials.documents.capTableDesc'),
          url: "https://drive.google.com/file/d/1RVcIHLbRXmbj7DWaPufXld-G2k7ElyqE/view?usp=drive_link"
        },
        {
          title: t('financials.documents.whitepaper'),
          description: t('financials.documents.whitepaperDesc'),
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
              title={t('financials.title')}
              subtitle={t('financials.subtitle')}
              description={t('financials.description')}
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

            {/* Key Financial Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6">{t('financials.metrics.title')}</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$2.5T</div>
                    <div className="text-sm text-muted-foreground">{t('financials.metrics.tam')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25-40%</div>
                    <div className="text-sm text-muted-foreground">{t('financials.metrics.roi')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$50M</div>
                    <div className="text-sm text-muted-foreground">{t('financials.metrics.seriesA')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">18-24</div>
                    <div className="text-sm text-muted-foreground">{t('financials.metrics.profitability')}</div>
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
                <h2 className="text-2xl font-semibold mb-6">{t('financials.revenue.title')}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('financials.revenue.transactionFees')}</h3>
                    <p className="text-muted-foreground text-sm">{t('financials.revenue.transactionFeesDesc')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('financials.revenue.subscription')}</h3>
                    <p className="text-muted-foreground text-sm">{t('financials.revenue.subscriptionDesc')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('financials.revenue.dataLicensing')}</h3>
                    <p className="text-muted-foreground text-sm">{t('financials.revenue.dataLicensingDesc')}</p>
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
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t('financials.highlights.title')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t('financials.highlights.market.title')}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>{t('financials.highlights.market.tam')}</li>
                      <li>{t('financials.highlights.market.demand')}</li>
                      <li>{t('financials.highlights.market.regulatory')}</li>
                      <li>{t('financials.highlights.market.advantage')}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t('financials.highlights.projections.title')}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>{t('financials.highlights.projections.roi')}</li>
                      <li>{t('financials.highlights.projections.seriesA')}</li>
                      <li>{t('financials.highlights.projections.profitability')}</li>
                      <li>{t('financials.highlights.projections.revenue')}</li>
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
