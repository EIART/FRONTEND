export enum EraType {
  STONE_AGE = 'STONE_AGE',
  JQUERY_ERA = 'JQUERY_ERA',
  FRAMEWORK_WARS = 'FRAMEWORK_WARS',
  COMPLEXITY_HELL = 'COMPLEXITY_HELL',
  THE_END = 'THE_END'
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: EraType;
  sarcasticComment: string;
  icon: string;
}

export interface ResignationState {
  loading: boolean;
  content: string;
  error: string | null;
}