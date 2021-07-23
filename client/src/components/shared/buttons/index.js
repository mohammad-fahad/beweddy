import Link from 'next/link';

export const LinkButton = ({ outline, label, className, href, onClick }) => {
  return (
    <Link {...{ href }}>
      <a
        className={`py-3 text-center block w-full max-w-xs mx-auto px-20 border-2 border-primary rounded-3xl whitespace-nowrap transition-colors duration-300 ${
          outline
            ? 'bg-white text-primary hover:bg-primary hover:text-white'
            : 'bg-primary text-white hover:bg-white hover:text-primary'
        } ${className ? className : ''}`}
        {...{ onClick }}
      >
        {label}
      </a>
    </Link>
  );
};

export const Button = ({ outline, type, label, className, onClick }) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`py-3 text-center block w-full max-w-xs mx-auto px-20 border-2 border-primary rounded-3xl whitespace-nowrap transition-colors duration-300 ${
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
