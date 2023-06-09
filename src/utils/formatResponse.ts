import { TemplateServerResponse, TemplateState } from '../types';

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
        validSubmit: false,
        loading: false,
        slideFields: [...fields],
        templateId,
        name,
      };
    }
  );
};
