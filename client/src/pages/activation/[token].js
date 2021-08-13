import { Welcome } from '@components/question';
import { attemptActivation } from '@features/user/userActions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AccountActivationPage = () => {
  const dispatch = useDispatch();
  const { success } = useSelector(state => state.user);
  const { query, push } = useRouter();
  const token = query.token;

  useEffect(() => {
    if (token) {
      dispatch(attemptActivation(token));
    }
    if (success) {
      const redirect = setTimeout(push('/'), 2500);
      return () => clearTimeout(redirect);
    }
  }, [token]);

  return <Welcome />;
};

export default AccountActivationPage;
