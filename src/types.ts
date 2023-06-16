import { UseDisclosureReturn } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type FieldOptions = 'question' | 'answer' | 'additional';

export type SlideState = {
  question: string;
  answer?: string;
  additional?: string;
};

export type AddSlidePayload = {
  slideIndex: number;
  slideState: SlideState;
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
  validSubmit: boolean;
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

export type CreateSessionInput = {
  email: string;
  password: string;
};

export type ServerError = {
  errorType: string;
  instance: string;
  message: string;
};

export type CreateUserPayload = { accessToken: string; id: number };

export type DisclosureState = {
  [K in keyof UseDisclosureReturn as K extends 'isOpen' | 'onOpen' | 'onClose'
    ? K
    : never]: UseDisclosureReturn[K];
};

export type UserTemplate = {
  templateInfo: {
    img: string;
    id: number;
    name: string;
  };
  name: string | null;
  createdOn: string | null;
  timesGenerated: number | null;
  id: number;
};
