const PageTitle = ({ title }) => {
  return (
    <div className='border-4 border-l-0 border-r-0 border-primary py-5 bg-[#F2F2F2]'>
      <div className='container'>
        <h4 className='text-base text-primary font-medium'>{title}</h4>
      </div>
    </div>
  );
};

export default PageTitle;
