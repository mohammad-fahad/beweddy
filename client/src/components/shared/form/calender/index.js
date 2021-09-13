import { forwardRef } from "react";
import InputIcon from "../InputIcon";
import InputText from "../InputText";

export const WeddingDatePicker = forwardRef(
  ({ value, onClick, errors, border = "border-primary" }, ref) => (
    <div>
      <button
        ref={ref}
        type="button"
        {...{ onClick }}
        className={`flex items-center min-w-[256px] font-inter bg-white text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 placeholder-primary border-[3px] rounded-[5px] ${border}`}
      >
        <InputIcon />
        <InputText {...{ value }} placeholder="Pick Your date" />
      </button>

      <p className="h-4 mt-2 text-sm font-light text-center text-red-400">
        {errors?.weddingDate?.message}
      </p>
    </div>
  )
);

export const FirstReceptionDatePicker = forwardRef(
  ({ value, onClick, errors, border = "border-primary" }, ref) => (
    <div>
      <button
        ref={ref}
        type="button"
        {...{ onClick }}
        className={`flex items-center min-w-[256px] font-inter bg-white text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 placeholder-primary border-[3px] rounded-[5px] ${border}`}
      >
        <InputIcon />
        <InputText {...{ value }} placeholder="Reception 1 date" />
      </button>

      <p className="h-4 mt-2 text-sm font-light text-center text-red-400">
        {errors?.firstReception?.message}
      </p>
    </div>
  )
);

export const SecondReceptionDatePicker = forwardRef(
  ({ value, onClick, errors, border = "border-primary" }, ref) => (
    <div>
      <button
        ref={ref}
        type="button"
        {...{ onClick }}
        className={`flex items-center min-w-[256px] font-inter bg-white text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 placeholder-primary border-[3px] rounded-[5px] ${border}`}
      >
        <InputIcon />
        <InputText {...{ value }} placeholder="Reception 2 date" />
      </button>

      <p className="h-4 mt-2 text-sm font-light text-center text-red-400">
        {errors?.secondReception?.message}
      </p>
    </div>
  )
);
