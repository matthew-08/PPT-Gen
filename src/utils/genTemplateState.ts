import { FieldOptions, SlideState, Template, TemplateState } from '../types';

const genTemplateState = (
  templateLength: number,
  templateFields: FieldOptions[]
) => {
  const fieldObject = templateFields.reduce(
    (acc: { [key: string]: string }, fieldName) => {
      acc[fieldName] = '';
      return acc;
    },
    {}
  );
  return Array(templateLength).fill(fieldObject) as SlideState[];
};

export default genTemplateState;
