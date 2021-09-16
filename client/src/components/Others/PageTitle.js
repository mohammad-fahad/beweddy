import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <div className="bg-gradient-to-br from-[#FCE3EB] to-white relative overflow-hidden border-t-[5px] border-primary border-b-[5px]">
      <div className="container">
        <h4 className="py-4 mx-auto text-2xl text-center commonTitle">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default PageTitle;
