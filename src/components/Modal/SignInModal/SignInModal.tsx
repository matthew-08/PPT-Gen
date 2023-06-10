import SlotModal from '../../global/SlotModal';
import SignInForm from '../../Forms/SignIn/SignInForm';
import { DisclosureState } from '../../../types';

type Props = {
  disclosureState: DisclosureState;
};

function SignInModal({ disclosureState }: Props) {
  const { isOpen, onClose, onOpen } = disclosureState;
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
