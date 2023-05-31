import { FieldOptions, TemplateServerResponse, TemplateState } from '../types';
import genTemplateState from './genTemplateState';

export const formatTemplateGet = (
  res: TemplateServerResponse
): TemplateState => {
  return res.map(
    ({
      slideAmount,
      id: templateId,
      name,
      img: templateImg,
      templateFields,
    }) => {
      const fields = templateFields.map((temp) => temp.type);
      return {
        templateImg,
        slideAmount,
        loading: false,
        slideFields: [...fields],
        templateId,
        name,
      };
    }
  );
};
