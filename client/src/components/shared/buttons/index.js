import Link from 'next/link';

export const LinkButton = ({ outline, label, className, href, onClick }) => {
  return (
    <Link {...{ href }}>
      <a
        className={`py-2 md:py-3 inline-block text-sm md:text-base text-center mx-auto px-10 md:px-28 border-[3px] border-primary rounded-3xl whitespace-nowrap transition-colors duration-300 ${
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
      className={`py-2 md:py-3 text-sm md:text-base text-center block mx-auto px-8 md:px-15 border-2 border-primary rounded-[100px] whitespace-nowrap transition-colors duration-300 ${
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
