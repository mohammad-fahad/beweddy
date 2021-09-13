import { WeddingDayCountDown } from '@components/index';
import { useSelector } from 'react-redux';

const DashboardHeader = ({ title, children }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className={`max-w-[1300px] w-full min-h-[155.2px] flex md:pb-0 pt-6`}>
      {/* {!hideCoupleName && (
        <h3 className='text-2xl'>👋 Hey {user?.coupleName}!</h3>
      )} */}
      <div
        className={`flex px-3 items-center flex-col sm:flex-row justify-center sm:justify-between flex-wrap w-full`}
      >
        <h2 className="mt-5 text-3xl font-medium capitalize md:text-4xl sm:mt-0">
          {title}
        </h2>

        {children ? (
          children
        ) : (
          <div className="py-[20px] space-y-3">
            <h4 className="text-[12px] text-center sm:text-right font-semibold">
              Your Wedding Day Countdown
            </h4>
            <WeddingDayCountDown sm />
            <h3 className="text-base font-normal text-center sm:text-right">
              Let’s Eat, Drink & BeWeddy!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
