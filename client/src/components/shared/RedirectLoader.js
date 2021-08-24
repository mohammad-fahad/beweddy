import Spinner from 'react-spinners/HashLoader';

const RedirectLoader = ({ to }) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <Spinner color='#f36' loading size={150} />
      <h3 className='mt-5 text-gray-800'>
        Redirecting to {to} page, Please Wait...
      </h3>
    </div>
  );
};

export default RedirectLoader;
