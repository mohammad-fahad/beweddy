const Heading = ({
  h3,
  children,
  label,
  color,
  className,
  style,
  lineStyle,
}) => {
  if (h3) {
    return (
      <h4
        className={`text-2xl capitalize font-semibold ${
          className ? className : ''
        }`}
      >
        {children}
      </h4>
    );
  }

  return (
    <>
      <h2
        className={`text-2xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center pb-8 capitalize ${
          className ? className : ''
        }`}
        style={{ lineHeight: 1.3, ...style }}
      >
        {label}
      </h2>
      <div
        className={`w-48 mx-auto h-[2px] md:h-[4px] mb-16 ${
          color ? color : 'bg-primary'
        }`}
        style={lineStyle}
      />
    </>
  );
};

export default Heading;
