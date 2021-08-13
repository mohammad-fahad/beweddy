import { Welcome } from '@components/question';
import { attemptActivation } from '@features/user/userActions';
import { withAuthRedirect } from '@hoc/withAuthRedirect';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AccountActivationPage = () => {
  const dispatch = useDispatch();
  const { success } = useSelector(state => state.user);
  const { query, push } = useRouter();
  const token = query.token;

  useEffect(() => {
    if (success) {
      const redirect = setTimeout(
        () => push('/', null, { shallow: true }),
        2500
      );
      return () => clearTimeout(redirect);
    }
    if (token) {
      dispatch(attemptActivation(token));
    }
  }, [token, success]);

  return <Welcome />;
};

export default withAuthRedirect(AccountActivationPage);
