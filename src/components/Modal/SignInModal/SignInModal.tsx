/* eslint-disable consistent-return */
import { useEffect } from 'react';
import SlotModal from '../../global/SlotModal';
import SignInForm from '../../Forms/SignIn/SignInForm';
import { DisclosureState } from '../../../types';
import useAuth from '../../../hooks/useAuth';

type Props = {
  disclosureState: DisclosureState;
};

function SignInModal({ disclosureState }: Props) {
  const { isOpen, onClose, onOpen } = disclosureState;
  const {
    userInfo: { authStatus },
  } = useAuth();

  useEffect(() => {
    if (authStatus.loggedIn) {
      return onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStatus]);
  return (
    <SlotModal
      disclosureState={{ isOpen, onClose, onOpen }}
      modalHeader="Sign In"
    >
      <SignInForm />
    </SlotModal>
  );
}

export default SignInModal;
