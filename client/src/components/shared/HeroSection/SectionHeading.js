const SectionHeading = ({ children, className, style }) => {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-6xl pb-7 capitalize ${
        className ? className : ''
      }`}
      style={{ lineHeight: 1.3, ...style }}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
