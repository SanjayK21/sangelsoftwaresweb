export interface ServiceItem {
  id: string;
  verticalId: string;
  verticalName: string;
  title: string;
  tagline: string;
  description: string;
  keyDeliverables: string[];
  technologies: string[];
  businessOutcomes: string[];
  targetSectors: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  keySolutions: string[];
  regulatoryCompliance: string[];
  caseSnippet: {
    clientType: string;
    challenge: string;
    solution: string;
    impact: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  keyTakeaways: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface EngagementOption {
  id: string;
  name: string;
  bestFor: string;
  features: string[];
  billingModel: string;
  slaCommitment: string;
}
