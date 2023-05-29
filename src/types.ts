export type FieldOptions = 'question' | 'answer' | 'additional';

export type Template = {
  templateId: number;
  templateFields: readonly FieldOptions[];
  inputState: {
    question: string;
    answer?: string;
    additional?: string;
  }[];
};

export type InputState = Template['inputState'][number];
