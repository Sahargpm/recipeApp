import React, { forwardRef } from "react";
import clsx from "clsx";
import * as style from "@/app/common-components/input/input-style.css";
import { BaseProps } from "@/app/utils/shared-types/shared-types";
import TextView from "../text-view/text-view";
import { ThemeValues } from "@/app/utils/values";

interface InputProps extends  Omit<BaseProps, 'loading'> {
  name?: string;
  ref?: React.Ref<HTMLInputElement>; 
  label?: string;
  lableStyle?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: string;
  touched?: boolean;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      type = "text",
      error,
      label,
      placeholder,
      wrapperClass,
      lableStyle,
      onChange,
      onFocus,
      theme,
      onBlur,
    }: InputProps,
    ref 
  ) => {

     if(error.length>0)
      {
        placeholder=error;

      }
      
    return (
      <>
        {label && (
          <label className={clsx(lableStyle)}>
            {label}
          </label>
        )}
        <input
          ref={ref} 
          type={type}
          name={name}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className={clsx(wrapperClass, style.InputStyle.rounderCorners)} 
          onChange={onChange}
        />
        
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
