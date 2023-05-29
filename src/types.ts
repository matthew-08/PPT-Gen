export type FieldOptions = 'question' | 'answer' | 'additional';

export type SlideState = {
  question: string;
  answer?: string;
  additional?: string;
};

export type UserState = {
  userId: number;
};

export type Template = {
  templateId: number;
  slideAmount: number;
  slides: SlideState[];
  loading: boolean;
  name: string;
  templateImg: string;
};

export type TemplateState = Template[];

export type TemplateServerResponse = {
  id: number;
  img: string;
  name: string;
  slideAmount: number;
  templateFields: { type: FieldOptions }[];
}[];
