import Link from 'next/link';
import Image from 'next/image';
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
      };
      attempt();
      const timer = setTimeout(() => {
        push('/');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [query.token]);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='space-y-5'>
        <div className='flex items-center justify-center'>
          <Link href='/'>
            <a>
              <Image
                src='/images/logo.png'
                alt='Payment'
                height='61'
                width='158'
                objectFit='cover'
                loading='lazy'
              />
            </a>
          </Link>
        </div>
        <p className='text-base text-center w-full max-w-lg leading-[33px] font-medium'>
          Your redeemation link is on it’s way, You will receive an email with
          your gift card.
        </p>
      </div>
    </div>
  );
};

export default RedeemPage;
