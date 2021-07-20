const Heading = ({ label, color }) => {
  return (
    <>
      <h2 className='text-5xl max-w-3xl  mx-auto leading-normal odd text-center pb-10'>
        {label}
      </h2>
      <div
        className={`w-48 mx-auto h-1 mb-16 ${color ? color : 'bg-primary'}`}
      />
    </>
  );
};

export default Heading;
