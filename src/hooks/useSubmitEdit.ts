import { useEffect } from 'react';
import { patchUserTemplate } from '../features/userTemplateSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { AddEditSlidePayload } from '../types';

const preparePatchUserTemplate = (data: {
  templateId: number;
  slidesToSubmit: AddEditSlidePayload[];
}) => {
  return {
    templateId: data.templateId,
    updatedSlides: data.slidesToSubmit.map((slide) => {
      return {
        id: slide.slideId,
        fields: slide.slideState.map(({ content, id }) => {
          return {
            id,
            content,
          };
        }),
      };
    }),
  };
};

const useSubmitEdit = () => {
  const { submitStatus, slidesToSubmit, currentEditingTemplate } =
    useAppSelector((state) => state.userTemplateReducer);

  const dispatch = useAppDispatch();

  const handleSubmitEdit = () => {
    const input = preparePatchUserTemplate({
      templateId: currentEditingTemplate?.id as number,
      slidesToSubmit,
    });
    dispatch(patchUserTemplate(input));
  };

  useEffect(() => {
    if (submitStatus.ready) {
      handleSubmitEdit();
    }
  }, [submitStatus]);
  return {
    submitStatus,
  };
};

export default useSubmitEdit;
