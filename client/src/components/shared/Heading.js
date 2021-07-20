const Heading = ({ label, color }) => {
  return (
    <>
      <h2
        className='text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center pb-10'
        style={{ lineHeight: 1.3 }}
      >
        {label}
      </h2>
      <div
        className={`w-48 mx-auto h-1 mb-16 ${color ? color : 'bg-primary'}`}
      />
    </>
  );
};

export default Heading;
