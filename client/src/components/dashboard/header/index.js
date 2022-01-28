// import { WeddingDayCountDown } from '@components/index';
// import { useSelector } from 'react-redux';

// const DashboardHeader = ({ title, children }) => {
//   const { user } = useSelector((state) => state.user);
//   return (
//     <div className={`max-w-[1300px] w-full min-h-[155.2px] flex md:pb-0`}>
//       {/* {!hideCoupleName && (
//         <h3 className='text-2xl'>👋 Hey {user?.coupleName}!</h3>
//       )} */}
//       <div
//         className={`flex px-3 items-center flex-col sm:flex-row justify-center sm:justify-between flex-wrap w-full`}
//       >
//         <h2 className="mt-5 text-3xl font-medium capitalize md:text-4xl sm:mt-0">
//           {title}
//         </h2>

//         {children ? (
//           children
//         ) : (
//           <div className="py-[20px] space-y-3">
//             <h4 className="text-[12px] text-center sm:text-right font-semibold">
//               Your Wedding Day Countdown
//             </h4>
//             <WeddingDayCountDown sm />
//             <h3 className="text-base font-normal text-center sm:text-right">
//               Let’s Eat, Drink & BeWeddy!
//             </h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashboardHeader;

import { WeddingDayCountDown } from "@components/index";
import { LinkButton } from "@components/shared";
import { useSelector } from "react-redux";

const DashboardHeader = ({ title, children, button }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div
      className={`max-w-[1300px] w-full lg:my-0 lg:min-h-[155.2px] flex py-5 md:py-0 px-1 sm:px-12 lg:pl-0 lg:pr-12 xxl:pr-0`}
    >
      <div
        className={`flex  sm:flex-row items-center justify-center md:justify-between flex-wrap w-full sm:gap-5 gap-2 `}
      >
        <div>
          <h2 className="mt-5 text-3xl font-medium capitalize xl:text-4xl sm:mt-0">
            {title}
          </h2>

          {button && (
            <LinkButton
              label="Back"
              href="/dashboard/website/edit"
              className="text-white !px-14 mt-2"
            />
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default DashboardHeader;
