import { prependHttp } from '@utils/index.js';
import React from 'react';
import { useSelector } from 'react-redux';

const Logo = () => {
  const { user } = useSelector(state => state.user);
  if (user?.venue) {
    return (
      <a href={prependHttp(user?.venue?.websiteLink)} target='_blank'>
        <img className='h-28' src={user?.venue?.logo?.secure_url} alt='logo' />
      </a>
    );
  }

  return (
    <div>
      {user?.role === 'couple' ? (
        <a className={`inline-block space-y-2`}>
          <img
            src='/images/logo.png'
            alt=''
            className='h-14 md:h-[4.5rem] customImage'
          />
          <h3 className='text-base text-center font-medium md:text-lg customLabel'>
            All-In-One Wedding Platform.
          </h3>
        </a>
      ) : (
        <a className={`inline-block space-y-2`}>
          <img
            src='/images/logo.png'
            alt=''
            className='h-14 md:h-[4.5rem] customImage'
          />
          <h3 className='text-base text-center font-medium md:text-lg customLabel'>
            All-In-One Wedding Platform.
          </h3>
        </a>
      )}
    </div>
  );
};

export default Logo;
