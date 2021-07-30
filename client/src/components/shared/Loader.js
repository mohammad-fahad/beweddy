import Spinner from 'react-spinners/HashLoader';

const Loader = ({ section }) => {
  return section ? (
    <div className='w-full h-[50vh] flex flex-col items-center justify-center'>
      <Spinner color='#fff' loading size={150} />
      <h3 className='mt-5 text-gray-800'>Loading, Please Wait...</h3>
    </div>
  ) : (
    <div className='fixed inset-0 w-full h-full flex items-center justify-center bg-black/50 z-50'>
      <Spinner color='#fff' loading size={150} />
    </div>
  );
};

export default Loader;
