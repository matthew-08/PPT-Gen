import { useDispatch } from 'react-redux';
import { fetchAllUserTemplates } from '../features/userTemplateSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const useUserTemplateController = () => {
  const dispatch = useAppDispatch();
  const { status, templates } = useAppSelector(
    (state) => state.userTemplateReducer
  );

  const handleGetAllUserTemplates = async () => {
    dispatch(fetchAllUserTemplates(''));
  };

  return {
    status,
    templates,
    handlers: {
      handleGetAllUserTemplates,
    },
  };
};

export default useUserTemplateController;
