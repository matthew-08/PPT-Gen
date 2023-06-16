import React from 'react';

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function EditTemplateModal({ isOpen, onClose, onOpen }: Props) {
  return <div>EditTemplateModal</div>;
}

export default EditTemplateModal;
