import { useEffect } from 'react';
import Router from 'next/router';
import { RedirectLoader } from '@components/index';
import { useSelector } from 'react-redux';

export const withAuthRedirect = Component => {
  const RequireAuthentication = props => {
    const { user } = useSelector(state => state.user);

    useEffect(() => {
      if (user) {
        Router.push('/dashboard');
      }
    }, [user]);
    return !user ? <Component {...props} /> : <RedirectLoader to='Dashboard' />;
  };
  return RequireAuthentication;
};
