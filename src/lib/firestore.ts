export interface Document {
  title: string;
  description: string;
  fileUrl: string;
  category: "tech" | "financials" | "legal" | "esg" | "brandkit";
}

export async function getDocumentsByCategory(category: string): Promise<Document[]> {
  // Dummy static data for now - simulates Firestore responses
  const dummyData: Record<string, Document[]> = {
    tech: [
      {
        title: "AGV Protocol Whitepaper",
        description: "Detailed technical overview and system design of the AGV Protocol infrastructure.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "tech",
      },
      {
        title: "System Architecture Diagram",
        description: "Comprehensive illustration of AGV's on-chain and IoT layers integration.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "tech",
      },
      {
        title: "Smart Contract Audit Report",
        description: "Third-party security audit results and recommendations.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "tech",
      },
      {
        title: "GitHub Repository Access",
        description: "Public repository containing core protocol implementations.",
        fileUrl: "https://github.com/agv-protocol",
        category: "tech",
      },
    ],
    financials: [
      {
        title: "Financial Model Q1 2024",
        description: "Detailed projection and revenue breakdown for Q1 2024.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf-q1.pdf",
        category: "financials",
      },
      {
        title: "Valuation Analysis",
        description: "Comprehensive valuation methodology and market analysis.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "financials",
      },
      {
        title: "Revenue Forecast 2024-2026",
        description: "Three-year revenue projections and growth assumptions.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "financials",
      },
      {
        title: "Token Economics Model",
        description: "Token distribution, utility, and economic incentives design.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "financials",
      },
    ],
    legal: [
      {
        title: "Certificate of Incorporation",
        description: "Official incorporation documents and business registration.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "legal",
      },
      {
        title: "IP Transfer Agreement",
        description: "Intellectual property rights transfer and assignment documents.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "legal",
      },
      {
        title: "Token Sale Agreement",
        description: "Terms and conditions for token purchase and distribution.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf-agreement.pdf",
        category: "legal",
      },
      {
        title: "Regulatory Compliance Report",
        description: "Legal compliance status and regulatory framework analysis.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "legal",
      },
    ],
    esg: [
      {
        title: "Sustainability Impact Report",
        description: "Environmental impact assessment and sustainability metrics.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "esg",
      },
      {
        title: "IoT Carbon Footprint Data",
        description: "Real-time carbon emission tracking from IoT devices.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "esg",
      },
      {
        title: "ESG Compliance Framework",
        description: "Environmental, Social, and Governance compliance standards.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "esg",
      },
      {
        title: "Real-World Asset Verification",
        description: "Proof of real-world asset backing and verification processes.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "esg",
      },
    ],
    brandkit: [
      {
        title: "AGV Logo Pack",
        description: "Complete logo variations in multiple formats and sizes.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf.zip",
        category: "brandkit",
      },
      {
        title: "Brand Guidelines",
        description: "Comprehensive brand identity guidelines and usage rules.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
        category: "brandkit",
      },
      {
        title: "Press Kit Materials",
        description: "Media assets, press releases, and promotional materials.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf.zip",
        category: "brandkit",
      },
      {
        title: "Marketing Templates",
        description: "Design templates for presentations and marketing materials.",
        fileUrl: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf.zip",
        category: "brandkit",
      },
    ],
  };

  return dummyData[category] || [];
}

export async function getAllDocuments(): Promise<Document[]> {
  const categories = ["tech", "financials", "legal", "esg", "brandkit"];
  const allDocuments: Document[] = [];
  
  for (const category of categories) {
    const documents = await getDocumentsByCategory(category);
    allDocuments.push(...documents);
  }
  
  return allDocuments;
}
