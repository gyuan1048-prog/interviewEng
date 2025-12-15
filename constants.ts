import { KeywordData, ThemeData, NarrativeCardData } from './types';

// Color Palette
export const COLORS = {
  BRAZIL_GREEN: '#009739',
  BRAZIL_YELLOW: '#F8C300',
  CHINA_RED: '#D90000',
  DARK_GRAY: '#222222',
  LIGHT_GRAY: '#F3F4F6',
  WHITE: '#FFFFFF',
  TEXT_MUTED: '#6B7280',
};

// Section 2 & 3 Data: Keywords
export const KEYWORDS: KeywordData[] = [
  { word: "Cultural", value: 95, description: "The overarching theme of the exchange.", color: COLORS.BRAZIL_GREEN },
  { word: "Brazilian", value: 88, description: "National identity displayed proudly.", color: COLORS.BRAZIL_YELLOW },
  { word: "Campus", value: 75, description: "The setting of the interaction.", color: COLORS.DARK_GRAY },
  { word: "China", value: 70, description: "The host context and audience.", color: COLORS.CHINA_RED },
  { word: "Authentic", value: 65, description: "The core value proposition.", color: COLORS.BRAZIL_GREEN },
  { word: "International", value: 60, description: "The diverse nature of the event.", color: COLORS.DARK_GRAY },
  { word: "Festival", value: 55, description: "The specific event mechanism.", color: COLORS.BRAZIL_YELLOW },
  { word: "Student", value: 50, description: "The actors involved in the story.", color: COLORS.DARK_GRAY },
  { word: "Booth", value: 45, description: "The physical space of exchange.", color: COLORS.DARK_GRAY },
  { word: "Exchange", value: 40, description: "The action taking place.", color: COLORS.CHINA_RED },
];

// Section 4 Data: Themes
export const THEMES: ThemeData[] = [
  { name: "Identity", value: 52.6, description: "Representing Brazil in a foreign land", color: COLORS.BRAZIL_GREEN },
  { name: "Exchange", value: 31.6, description: "Cross-cultural communication barriers & bridges", color: COLORS.BRAZIL_YELLOW },
  { name: "Action", value: 13.2, description: "Setting up the booth, cooking, dancing", color: COLORS.DARK_GRAY },
  { name: "Emotion", value: 2.6, description: "Warmth, friendship, and authentic connection", color: COLORS.CHINA_RED },
];

// Section 5 Data: Narrative Lines
export const NARRATIVES: NarrativeCardData[] = [
  {
    title: "Everyday Cultural Exchange",
    description: "It wasn't about grand politics, but small interactions: sharing food, explaining a dance, and overcoming language barriers on campus.",
    iconType: 'users'
  },
  {
    title: "Authentic Brazil",
    description: "Moving beyond stereotypes. The student emphasized showing the 'real' Brazil—diverse, complex, and vibrant—to their Chinese peers.",
    iconType: 'globe'
  },
  {
    title: "Warm Mutual Support",
    description: "The interview reveals a deep sense of community. Chinese students helping set up, and Brazilians sharing their joy. A cycle of warmth.",
    iconType: 'heart'
  }
];