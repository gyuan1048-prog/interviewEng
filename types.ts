export interface KeywordData {
  word: string;
  value: number;
  description: string;
  color?: string;
}

export interface ThemeData {
  name: string;
  value: number;
  description: string;
  color: string;
}

export interface NarrativeCardData {
  title: string;
  description: string;
  iconType: 'users' | 'globe' | 'heart';
}