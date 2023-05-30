import { Input } from '@chakra-ui/react';
import useSelectedTemplate from '../../../hooks/useSelectedTemplate';
import { FieldOptions } from '../../../types';

type Props = {
  field: FieldOptions;
  slideIndex: number;
};

function RowInput({ field, slideIndex }: Props) {
  const { selectedTemplate } = useSelectedTemplate();
  const inputValue = selectedTemplate.slides[slideIndex][field];
  return <Input value={inputValue} placeholder={field} />;
}

export default RowInput;
