import { Welcome } from '@components/question';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// pushing new commit
const WelcomePage = () => {
  const { push } = useRouter();
  useEffect(() => {
    const redirect = setTimeout(() => push('/', null, { shallow: true }), 2500);
    return () => clearTimeout(redirect);
  }, []);
  return <Welcome />;
};

export default WelcomePage;
