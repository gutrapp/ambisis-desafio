import React from "react";
import { cn } from "../../../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export const Input = ({
  title,
  type = "text",
  onChange,
  value,
  className,
}: InputProps) => {
  return (
    <div className={cn("relative text-sm text-black", className)}>
      <h1 className="absolute -top-3.5 ml-1 bg-white px-1 text-black">
        {title}
      </h1>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="flex w-full items-center justify-center rounded-md text-lg font-medium outline-none ring-2 ring-black ring-offset-2"
      />
    </div>
  );
};
