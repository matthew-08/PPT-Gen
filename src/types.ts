import { UseDisclosureReturn } from '@chakra-ui/react';
import { ReactNode } from 'react';

// SLIDE FIELDS
export type FieldOptions = 'question' | 'answer' | 'additional';

export type EditFieldOptions = {
  fieldType: {
    type: FieldOptions;
    id: number;
  };
  fieldId: number;
};

export type SlideFields = FieldOptions[];

// SLIDES
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

// TEMPLATES
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

// SLOT MODAL

export type SlotModalProps = {
  disclosureState: {
    [K in keyof UseDisclosureReturn as K extends 'isOpen' | 'onOpen' | 'onClose'
      ? K
      : never]: UseDisclosureReturn[K];
  };
  modalHeader: string;
  children: ReactNode;
};

// SERVER ERROR

export type ServerError = {
  errorType: string;
  instance: string;
  message: string;
};

// CHAKRA DISCLOSURE
export type DisclosureState = {
  [K in keyof UseDisclosureReturn as K extends 'isOpen' | 'onOpen' | 'onClose'
    ? K
    : never]: UseDisclosureReturn[K];
};

// USER SLIDE EDITS
export type UserTemplate = {
  templateInfo: {
    img: string;
    id: number;
    name: string;
    slideAmount: number;
  };
  name: string | null;
  createdOn: string | null;
  timesGenerated: number | null;
  id: number;
};
export type UserField = {
  content: string;
  fieldType: {
    id: number;
    type: FieldOptions;
  };
  id: number;
  slideId: number;
};

export type UserSlide = {
  id: number;
  slideNumber: number;
  templateId: number;
  fields: UserField[];
};
export type PatchUserTemplateInput = {
  templateId: number;
  updatedSlides: {
    id: number;
    fields: {
      id: number;
      content: string;
    }[];
  }[];
};

export interface AddEditSlidePayload {
  slideIndex: number;
  slideState: UserField[];
  slideId: number;
  hasBeenEdited: boolean;
}

// AUTH
export type UserState = {
  userId: number;
};

export type CreateSessionInput = {
  email: string;
  password: string;
};

export type CreateUserPayload = { accessToken: string; id: number };
