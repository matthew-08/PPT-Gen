import { useAppSelector } from '../store/hooks';

const useTemplateCard = () => {
  const templates = useAppSelector((state) => state.templateReducer.templates);
  const templateCards = templates.map(
    ({ loading, name, templateId, templateImg }) => {
      return {
        name,
        loading,
        templateId,
        templateImg,
      };
    }
  );
  return { templateCards };
};

export default useTemplateCard;
