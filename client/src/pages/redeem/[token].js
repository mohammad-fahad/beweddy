import { attemptToGiftCardRedeem } from '@services/Tango';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedeemPage = () => {
  const { query, push } = useRouter();
  useEffect(() => {
    if (query.token) {
      const attempt = async () => {
        await attemptToGiftCardRedeem({
          token: query.token,
        });

        push('/');
      };
      attempt();
    }
  }, [query.token]);

  return null;
};

export default RedeemPage;
