export type FieldOptions = 'question' | 'answer' | 'additional';

export type Template = {
  slideIndex: number;
  templateFields: readonly FieldOptions[];
  slideState: {
    question: string;
    answer?: string;
    additional?: string;
  }[];
};

export type SlideState = Template['slideState'][number];
