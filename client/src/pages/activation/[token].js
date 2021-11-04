import { Welcome } from '@components/question';
import { attemptActivation } from '@features/user/userActions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AccountActivationPage = () => {
  const dispatch = useDispatch();
  const { success } = useSelector(state => state.user);
  const { query, push } = useRouter();
  const { token, session_id } = query;

  useEffect(() => {
    // return;
    if (success) {
      const redirect = setTimeout(() => push('/dashboard'), 3000);
      return () => clearTimeout(redirect);
    }
  }, [success]);

  useEffect(() => {
    if (token) {
      // return;
      dispatch(attemptActivation({ token, session_id }));
    }
  }, [token]);

  return <Welcome />;
};

export default AccountActivationPage;
