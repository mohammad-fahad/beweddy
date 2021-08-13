import { Welcome } from '@components/question';
import { attemptActivation } from '@features/user/userActions';
import { withAuthRedirect } from '@hoc/withAuthRedirect';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AccountActivationPage = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const token = query.token;

  useEffect(() => {
    if (token) {
      const activation = setTimeout(dispatch(attemptActivation(token)), 1500);
      return () => clearTimeout(activation);
    }
  }, [token]);

  return <Welcome />;
};

export default withAuthRedirect(AccountActivationPage);
