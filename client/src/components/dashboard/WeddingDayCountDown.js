import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const WeddingDayCountDown = ({ sm }) => {
  const { user } = useSelector(state => state.user);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const {
    weddingDay: { weddingDate },
  } = user.questions;

  useEffect(() => {
    if (weddingDate) {
      const countDownDate = new Date(weddingDate).getTime();

      // Time calculations for days, hours, minutes and seconds
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if (distance <= 0) return;
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className={`flex items-center space-x-5 ${sm ? 'mt-3' : 'mt-8'}`}>
      <div
        className={`flex flex-col items-center justify-center border-2 border-secondary-alternative rounded-lg ${
          sm ? 'w-20 py-3' : 'w-28 py-5'
        }`}
      >
        <h4 className={`${sm ? 'text-[15px]' : 'text-2xl'} font-semibold`}>
          {days < 10 ? `0${days}` : days}
        </h4>
        <p className={`${sm ? 'text-sm' : 'text-base'} font-normal`}>Days</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center border-2 border-secondary-alternative rounded-lg ${
          sm ? 'w-20 py-3' : 'w-28 py-5'
        }`}
      >
        <h4 className={`${sm ? 'text-[15px]' : 'text-2xl'} font-semibold`}>
          {hours < 10 ? `0${hours}` : hours}
        </h4>
        <p className={`${sm ? 'text-sm' : 'text-base'} font-normal`}>Hours</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center border-2 border-secondary-alternative rounded-lg ${
          sm ? 'w-20 py-3' : 'w-28 py-5'
        }`}
      >
        <h4 className={`${sm ? 'text-[15px]' : 'text-2xl'} font-semibold`}>
          {minutes < 10 ? `0${minutes}` : minutes}
        </h4>
        <p className={`${sm ? 'text-sm' : 'text-base'} font-normal`}>Minutes</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center border-2 border-secondary-alternative rounded-lg ${
          sm ? 'w-20 py-3' : 'w-28 py-5'
        }`}
      >
        <h4 className={`${sm ? 'text-[15px]' : 'text-2xl'} font-semibold`}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </h4>
        <p className={`${sm ? 'text-sm' : 'text-base'} font-normal`}>Seconds</p>
      </div>
    </div>
  );
};

export default WeddingDayCountDown;
