import { useSelector } from 'react-redux';

const DashboardHeader = ({
  title,
  children,
  hideCoupleName,
  customPadding,
}) => {
  const { user } = useSelector(state => state.user);
  return (
    <div
      className={`max-w-[1300px] w-full min-h-[151.2px] flex`}
    >
      {/* {!hideCoupleName && (
        <h3 className='text-2xl'>👋 Hey {user?.coupleName}!</h3>
      )} */}
      <div className={`flex items-center justify-between w-full`}>
        <h2 className='capitalize text-4xl font-medium'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default DashboardHeader;
