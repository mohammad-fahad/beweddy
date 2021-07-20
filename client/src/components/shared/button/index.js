export const Button = ({ outline, label, onClick, className }) => {
  return (
    <button
      className={`py-3 px-20 border-2 border-primary rounded-3xl transition-colors duration-300 ${
        outline
          ? 'bg-white text-primary hover:bg-primary hover:text-white'
          : 'bg-primary text-white hover:bg-white hover:text-primary'
      } ${className ? className : ''}`}
      {...{ onClick }}
    >
      {label}
    </button>
  );
};
