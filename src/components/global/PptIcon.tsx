import React from 'react';
import { Circle, Image } from '@chakra-ui/react';
import { APP_IMAGES } from '../../utils/images';

function PptIcon() {
  return (
    <Circle size={20} padding="1rem">
      <Image
        src={APP_IMAGES.pptIcon}
        width="100%"
        height="100%"
        filter="invert(100%) sepia(0%) saturate(7496%) hue-rotate(182deg) brightness(100%) contrast(100%);"
      />
    </Circle>
  );
}

export default PptIcon;
