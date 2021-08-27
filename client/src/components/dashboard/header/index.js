import { useSelector } from 'react-redux';

const DashboardHeader = ({
  title,
  children,
  hideCoupleName,
  hideMarginTop,
}) => {
  const { user } = useSelector(state => state.user);
  return (
    <div className='mb-12'>
      {!hideCoupleName && (
        <h3 className='text-2xl'>👋 Hey {user?.coupleName}!</h3>
      )}
      <div
        className={`flex items-center justify-between w-full ${
          hideMarginTop ? 'mt-2' : 'mt-3'
        }`}
      >
        <h2 className='capitalize font-inter text-3xl font-medium'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default DashboardHeader;
