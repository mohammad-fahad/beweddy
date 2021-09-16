import React from 'react';

const PageHeading = ({ lineOne, lineTwo }) => {
  return (
    <div className="container py-3 mx-auto text-center">
      {lineOne && <p className="!text-[18px]">{lineOne}</p>}
      {lineTwo && <p>{lineTwo}</p>}

      <a
        className="inline-block commonTitle font-alice mx-auto text-[20px] md:text-[26px] lg:text-[36px] font-medium pb-3 border-b-4 border-[#FFB1B6]"
        target="_blank"
        href="http://www.beweddy.com/"
      >
        www.beweddy.com
      </a>
    </div>
  );
};

export default PageHeading;
