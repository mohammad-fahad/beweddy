import Link from "next/link";

const CreateAccount = () => {
  return (
    <div className="flex items-center justify-center py-10 text-white bg-primary">
      <Link href="/register">
        <a className="flex items-center space-x-5 font-semibold sm:text-lg md:text-2xl font-inter hover:underline">
          <span className="text-2xl font-semibold subTitle">
            Create Your Free Account
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default CreateAccount;
