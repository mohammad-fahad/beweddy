import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WeddingDayCountDown = ({ sm, couple, preview }) => {
  const { user: userCouple } = useSelector((state) => state.user);
  const user = couple || userCouple;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const {
  //   weddingDay: { questions?.weddingDay?.weddingDate },
  // } = user && user?.questions;
  const questions = user?.questions;

  useEffect(() => {
    if (questions?.weddingDay?.weddingDate) {
      const countDownDate = new Date(
        questions?.weddingDay?.weddingDate
      ).getTime();

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
    <div className={`flex items-center justify-center flex-wrap gap-3`}>
      <div
        className={`flex flex-col items-center justify-center border-2 border-secondary-alternative rounded-lg ${
          sm ? "min-w-[60px] py-[7px]" : "min-w-[103px] py-5"
        } ${preview ? "countDownBorder" : ""}`}
      >
        <h4
          className={`${sm ? "text-[12px]" : "text-2xl"}  ${
            preview ? "countDownBorder" : ""
          } font-bold`}
        >
          {days < 10 ? `0${days}` : days}
        </h4>

        <h4 className={`${sm ? "text-[12px]" : "text-2xl"} font-bold`}>
          {hours < 10 ? `0${hours}` : hours}
        </h4>
        <p className={`${sm ? "text-[9px]" : "text-base"}  font-normal`}>
          Hours
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-center border-2 border-secondary-alternative rounded-lg ${
          sm ? "min-w-[60px] py-[7px]" : "min-w-[103px] py-5"
        } ${preview ? "countDownBorder" : ""}`}
      >
        <h4 className={`${sm ? "text-[12px]" : "text-2xl"} font-bold`}>
          {minutes < 10 ? `0${minutes}` : minutes}
        </h4>
        <p className={`${sm ? "text-[9px]" : "text-base"}  font-normal`}>
          Minutes
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-center border-2 border-secondary-alternative rounded-lg ${
          sm ? "min-w-[60px] py-[7px]" : "min-w-[103px] py-5"
        } ${preview ? "countDownBorder" : ""}`}
      >
        <h4 className={`${sm ? "text-[12px]" : "text-2xl"} font-bold`}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </h4>
        <p className={`${sm ? "text-[9px]" : "text-base"}  font-normal`}>
          Seconds
        </p>
      </div>
    </div>
  );
};

export default WeddingDayCountDown;
