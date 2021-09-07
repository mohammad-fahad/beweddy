const DashboardContainer = ({ children }) => {
  return (
    <div className='shadow-box space-y-10'>
      <div className='max-w-[1300px] w-full'>
        <div className='p-6 sm:p-12 xxl:pr-0'>{children}</div>
      </div>
    </div>
  );
};

export default DashboardContainer;
