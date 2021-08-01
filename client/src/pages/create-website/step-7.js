import { Welcome } from '@components/question';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const WelcomePage = () => {
  const { push } = useRouter();
  useEffect(() => {
    const redirect = setTimeout(() => push('/'), 2500);
    return () => clearTimeout(redirect);
  }, []);
  return <Welcome />;
};

export default WelcomePage;
