import { useSelector } from 'react-redux';

const DashboardHeader = () => {
  const { user } = useSelector(state => state.user);
  return (
    <div className='mb-14'>
      <h3 className='text-2xl'>👋 Hey {user?.coupleName}!</h3>
      <div className="flex items-center justify-between mt-3">
        <h2 className="font-inter text-3xl font-medium">Welcome to your Beweddy Dashboard</h2>
      </div>
    </div>
  );
};

export default DashboardHeader;
