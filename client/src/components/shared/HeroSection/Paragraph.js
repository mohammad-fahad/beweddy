const Paragraph = ({ children, className }) => (
  <p
    className={`max-w-md text-base md:text-xl !leading-[192.5%] capitalize font-normal md:font-medium mb-6 ${
      className ? className : ''
    }`}
  >
    {children}
  </p>
);

export default Paragraph;
