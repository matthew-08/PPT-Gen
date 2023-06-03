import { UseDisclosureReturn } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type FieldOptions = 'question' | 'answer' | 'additional';

export type SlideState = {
  question: string;
  answer?: string;
  additional?: string;
};

export type SlideRowState = {
  [K in FieldOptions as K extends 'question' ? never : K]?: string;
} & {
  question: string;
};

export type SlideFields = FieldOptions[];

export type UserState = {
  userId: number;
};

export type Template = {
  templateId: number;
  slideAmount: number;
  slideFields: FieldOptions[];
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

export type SlotModalProps = {
  disclosureState: {
    [K in keyof UseDisclosureReturn as K extends 'isOpen' | 'onOpen' | 'onClose'
      ? K
      : never]: UseDisclosureReturn[K];
  };
  modalHeader: string;
  children: ReactNode;
};
