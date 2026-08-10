export interface HackathonLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeatureCard {
  eyebrow?: string;
  title: string;
  description: string;
  badge?: string;
  link?: HackathonLink;
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  status?: string;
}

export interface PastEvent {
  title: string;
  description: string;
  image: string;
  href: string;
}
