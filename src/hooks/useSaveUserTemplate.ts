import { useDispatch } from 'react-redux';
import useAuth from './useAuth';

const useSaveUserTemplate = () => {
  const { userInfo } = useAuth();
  const dispatch = useDispatch();
  const handleSaveUserTemplate = () => {};
};
