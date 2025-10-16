export interface Document {
  title: string;
  description: string;
  fileUrl: string;
  driveFileId?: string; // Google Drive file ID for service account access
  category: "tech" | "financials" | "legal" | "esg" | "brandkit";
}

export async function getDocumentsByCategory(category: string): Promise<Document[]> {
  // Dummy static data for now - simulates Firestore responses
  const dummyData: Record<string, Document[]> = {
    tech: [
      {
        title: "AGV Protocol Whitepaper",
        description: "Detailed technical overview and system design of the AGV Protocol infrastructure.",
        fileUrl: "https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view",
        driveFileId: "1ABC123DEF456GHI789JKL",
        category: "tech",
      },
      {
        title: "System Architecture Diagram",
        description: "Comprehensive illustration of AGV's on-chain and IoT layers integration.",
        fileUrl: "https://drive.google.com/file/d/1XYZ789ABC123DEF456GHI/view",
        driveFileId: "1XYZ789ABC123DEF456GHI",
        category: "tech",
      },
      {
        title: "Smart Contract Audit Report",
        description: "Third-party security audit results and recommendations.",
        fileUrl: "https://drive.google.com/file/d/1MNO456PQR789STU012VWX/view",
        driveFileId: "1MNO456PQR789STU012VWX",
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
        fileUrl: "https://drive.google.com/file/d/1FIN123Q1M2024ABC456DEF/view",
        driveFileId: "1FIN123Q1M2024ABC456DEF",
        category: "financials",
      },
      {
        title: "Valuation Analysis",
        description: "Comprehensive valuation methodology and market analysis.",
        fileUrl: "https://drive.google.com/file/d/1VAL789UATION456ANALYSIS/view",
        driveFileId: "1VAL789UATION456ANALYSIS",
        category: "financials",
      },
      {
        title: "Revenue Forecast 2024-2026",
        description: "Three-year revenue projections and growth assumptions.",
        fileUrl: "https://drive.google.com/file/d/1REV123FORECAST4562024/view",
        driveFileId: "1REV123FORECAST4562024",
        category: "financials",
      },
      {
        title: "Token Economics Model",
        description: "Token distribution, utility, and economic incentives design.",
        fileUrl: "https://drive.google.com/file/d/1TOK789ENOMICS123MODEL/view",
        driveFileId: "1TOK789ENOMICS123MODEL",
        category: "financials",
      },
    ],
    legal: [
      {
        title: "Certificate of Incorporation",
        description: "Official incorporation documents and business registration.",
        fileUrl: "https://drive.google.com/file/d/1INC123ORP456CERT789/view",
        driveFileId: "1INC123ORP456CERT789",
        category: "legal",
      },
      {
        title: "IP Transfer Agreement",
        description: "Intellectual property rights transfer and assignment documents.",
        fileUrl: "https://drive.google.com/file/d/1IPT123RANS456FER789/view",
        driveFileId: "1IPT123RANS456FER789",
        category: "legal",
      },
      {
        title: "Token Sale Agreement",
        description: "Terms and conditions for token purchase and distribution.",
        fileUrl: "https://drive.google.com/file/d/1TOK123SALE456AGREEMENT/view",
        driveFileId: "1TOK123SALE456AGREEMENT",
        category: "legal",
      },
      {
        title: "Regulatory Compliance Report",
        description: "Legal compliance status and regulatory framework analysis.",
        fileUrl: "https://drive.google.com/file/d/1REG123COMP456LIANCE789/view",
        driveFileId: "1REG123COMP456LIANCE789",
        category: "legal",
      },
    ],
    esg: [
      {
        title: "Sustainability Impact Report",
        description: "Environmental impact assessment and sustainability metrics.",
        fileUrl: "https://drive.google.com/file/d/1SUS123TAIN456IMPACT789/view",
        driveFileId: "1SUS123TAIN456IMPACT789",
        category: "esg",
      },
      {
        title: "IoT Carbon Footprint Data",
        description: "Real-time carbon emission tracking from IoT devices.",
        fileUrl: "https://drive.google.com/file/d/1IOT123CARBON456FOOTPRINT/view",
        driveFileId: "1IOT123CARBON456FOOTPRINT",
        category: "esg",
      },
      {
        title: "ESG Compliance Framework",
        description: "Environmental, Social, and Governance compliance standards.",
        fileUrl: "https://drive.google.com/file/d/1ESG123COMP456FRAMEWORK/view",
        driveFileId: "1ESG123COMP456FRAMEWORK",
        category: "esg",
      },
      {
        title: "Real-World Asset Verification",
        description: "Proof of real-world asset backing and verification processes.",
        fileUrl: "https://drive.google.com/file/d/1RWA123VERIF456ICATION/view",
        driveFileId: "1RWA123VERIF456ICATION",
        category: "esg",
      },
    ],
    brandkit: [
      {
        title: "AGV Logo Pack",
        description: "Complete logo variations in multiple formats and sizes.",
        fileUrl: "https://drive.google.com/file/d/1LOG123PACK456AGV789/view",
        driveFileId: "1LOG123PACK456AGV789",
        category: "brandkit",
      },
      {
        title: "Brand Guidelines",
        description: "Comprehensive brand identity guidelines and usage rules.",
        fileUrl: "https://drive.google.com/file/d/1BRAND123GUIDE456LINES/view",
        driveFileId: "1BRAND123GUIDE456LINES",
        category: "brandkit",
      },
      {
        title: "Press Kit Materials",
        description: "Media assets, press releases, and promotional materials.",
        fileUrl: "https://drive.google.com/file/d/1PRESS123KIT456MATERIALS/view",
        driveFileId: "1PRESS123KIT456MATERIALS",
        category: "brandkit",
      },
      {
        title: "Marketing Templates",
        description: "Design templates for presentations and marketing materials.",
        fileUrl: "https://drive.google.com/file/d/1MARKET123TEMPL456ATES/view",
        driveFileId: "1MARKET123TEMPL456ATES",
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
