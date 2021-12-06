import React from "react";

const InputField = React.forwardRef(
  (
    {
      placeholder,
      type,
      value,
      name,
      change,
      disabled,
      className,
      label,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="">
        {label && (
          <p className="my-3 font-[14px] font-bold text-[#000000]  ">
            {label}
          </p>
        )}
        <input
          disabled={disabled || false}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={change}
          className={`border-[#E7E7E7] border w-full py-2 px-2 rounded ${className}`}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default InputField;
