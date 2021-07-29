const Heading = ({ label, color, className, style, lineStyle }) => {
  return (
    <>
      <h2
        className={`text-4xl lg:text-5xl max-w-3xl mx-auto text-center pb-6 capitalize ${
          className ? className : ''
        }`}
        style={{ lineHeight: 1.3, ...style }}
      >
        {label}
      </h2>
      <div
        className={`w-48 mx-auto h-[2px] md:h-[3px] mb-16 ${
          color ? color : 'bg-primary'
        }`}
        style={lineStyle}
      />
    </>
  );
};

export default Heading;
