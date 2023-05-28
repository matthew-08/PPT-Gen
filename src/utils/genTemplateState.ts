const genTemplateState = (templateLength: number, templateFields: string[]) => {
  const fieldObject = templateFields.reduce(
    (acc: { [key: string]: string }, fieldName) => {
      acc[fieldName] = '';
      return acc;
    },
    {}
  );
  return Array(templateLength).fill(fieldObject);
};

export default genTemplateState;
