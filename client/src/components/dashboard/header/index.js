import { WeddingDayCountDown } from '@components/index';
import { useSelector } from 'react-redux';

const DashboardHeader = ({ title, children }) => {
  const { user } = useSelector(state => state.user);
  return (
    <div
      className={`max-w-[1300px] w-full min-h-[155.2px] flex pr-12 xxl:pr-0`}
    >
      {/* {!hideCoupleName && (
        <h3 className='text-2xl'>👋 Hey {user?.coupleName}!</h3>
      )} */}
      <div className={`flex items-center justify-between w-full`}>
        <h2 className='capitalize text-4xl font-medium'>{title}</h2>

        {children ? (
          children
        ) : (
          <div className='py-[20px] space-y-3'>
            <h4 className='text-[12px] text-right font-semibold'>
              Your Wedding Day Countdown
            </h4>
            <WeddingDayCountDown sm />
            <h3 className='text-base text-right font-normal'>
              Let’s Eat, Drink & BeWeddy!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
