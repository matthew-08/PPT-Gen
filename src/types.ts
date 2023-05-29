export type FieldOptions = 'question' | 'answer' | 'additional';

export type Template = {
  templateId: number;
  templateFields: readonly FieldOptions[];
  slideState: {
    question: string;
    answer?: string;
    additional?: string;
  }[];
};

export type SlideState = Template['slideState'][number];
