import { useSelector } from 'react-redux';

const DashboardHeader = ({ title, children }) => {
  const { user } = useSelector(state => state.user);
  return (
    <div className='mb-14'>
      <h3 className='text-2xl'>👋 Hey {user?.coupleName}!</h3>
      <div className='flex items-center justify-between mt-3 w-full'>
        <h2 className='font-inter text-3xl font-medium'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default DashboardHeader;
