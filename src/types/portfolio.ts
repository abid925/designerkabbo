export type JerseyCategory =
  | 'All'
  | 'Football'
  | 'Esports'
  | 'Cycling & Court'
  | 'Retro & Club';

export interface JerseyColorSwatch {
  name: string;
  hex: string;
}

export interface JerseyProject {
  id: string;
  title: string;
  client: string;
  category: Exclude<JerseyCategory, 'All'>;
  collection: 'featured' | 'archive';
  year: string;
  image: string;
  tools: string[];
  deliverables: string[];
  summary: string;
  designNotes: string;
  printSpecs: {
    fabric: string;
    resolution: string;
    colorProfile: string;
    collarCut: string;
  };
  swatches: JerseyColorSwatch[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tools: string;
  tiltClass: string;
}

export interface ExperienceRecord {
  company: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  outcome: string;
}

export interface SocialLinksConfig {
  whatsappNumber: string;
  behanceUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface SubmittedInquiry {
  id: string;
  teamName: string;
  sportCategory: string;
  quantityTier: string;
  contactInfo: string;
  notes: string;
  createdAt: string;
}
