import React from 'react';
import { useSelector } from 'react-redux';

const Logo = () => {
  const { user } = useSelector(state => state.user);
  if (user?.venue) {
    return (
      <div>
        <img className='h-28' src={user?.venue?.logo?.secure_url} alt='logo' />
      </div>
    );
  }

  return (
    <div>
      {user?.role === "couple" ? <a className={`inline-block space-y-2`}>
                <img
                  src="/images/logo.png"
                  alt=""
                  className="h-14 md:h-[4.5rem] customImage"
                />
                <h3 className="text-base font-medium md:text-lg customLabel">
                  All-In-One Wedding Platform.
                </h3>
              </a>  : <a className={`inline-block space-y-2`}>
                <img
                  src={user?.venue?.logo?.secure_url}
                  alt=""
                  className="h-14 md:h-[4.5rem] customImage"
                />
                <h3 className="text-base font-medium md:text-lg customLabel">
                  All-In-One Wedding Platform.
                </h3>
              </a>  

  }

      
    </div>
  );
};

export default Logo;
