import { useAppSelector } from '../store/hooks';

const useTCardInfo = () => {
  const templates = useAppSelector((state) => state.templateReducer.templates);
  const tCardInfo = templates.map(
    ({ loading, name, templateId, templateImg }) => {
      return {
        name,
        loading,
        templateId,
        templateImg,
      };
    }
  );
  return { tCardInfo };
};

export default useTCardInfo;
