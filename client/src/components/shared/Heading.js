const Heading = ({
  h3,
  children,
  label,
  color,
  className,
  style,
  lineStyle,
  borderClass,
  uploadTitle,
}) => {
  if (h3) {
    return (
      <h4
        className={`md:text-xl lg:text-2xl capitalize font-semibold ${
          className ? className : ""
        }`}
      >
        {children}
      </h4>
    );
  }

  return (
    <>
      <h2
        className={`text-2xl md:text-4xl lg:text-5xl mx-auto text-center pb-8 capitalize ${
          className ? className : ""
        }`}
        style={{ lineHeight: 1.3, ...style }}
      >
        {label}
      </h2>
      {uploadTitle && (
        <p className="text-[18px] leading-[22px] font-medium capitalize text-[#8a8a8a] mb-3 mx-auto w-ful flex justify-center">
          Crop Pictures for cover photos
        </p>
      )}
      <div
        className={`w-48 mx-auto h-[2px] md:h-[4px] mb-16 ${
          color ? color : "bg-primary"
        } ${borderClass ? borderClass : ""}`}
        style={lineStyle}
      />
    </>
  );
};

export default Heading;
