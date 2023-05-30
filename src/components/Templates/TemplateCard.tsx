import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { Oval } from 'react-loader-spinner';
import { Template } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { onSelectTemplate } from '../../features/templateSlice';

type TCardInfo = Omit<Template, 'slides' | 'slideAmount'>;

type Props = {
  tCardInfo: TCardInfo;
  loading: boolean;
};

function TemplateCard({ tCardInfo: template, loading }: Props) {
  const dispatch = useAppDispatch();
  const isSelectedTemplate = useAppSelector(
    (state) =>
      state.templateReducer.selectedTemplate.templateId === template.templateId
  );
  const handleClick = () => {
    return dispatch(onSelectTemplate(template.templateId));
  };
  return (
    <Flex
      justify="center"
      align="center"
      border="2px"
      borderColor="gray.400"
      borderRadius="10px"
      py="0.5rem"
      maxW="300px"
      px="0.5rem"
      backgroundColor={isSelectedTemplate ? 'purple.500' : ''}
      onClick={handleClick}
      minH="175px"
      cursor="pointer"
      className="template-card"
      _hover={{
        transform: 'scale(1.04)',
        boxShadow: '10px 9px 0px -4px rgba(183,148,244,0.98)',
        WebkitBoxShadow: '10px 9px 0px -4px rgba(183,148,244,0.98)',
      }}
    >
      {loading ? (
        <Oval color="#805AD5" width="100px" secondaryColor="#805AD5" />
      ) : (
        <Image
          src={template.templateImg}
          objectFit="cover"
          width="300px"
          borderRadius="5px"
        />
      )}
    </Flex>
  );
}

export default TemplateCard;
