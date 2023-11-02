import React from "react";

type Choice = {
  choice: string;
  value: string;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  choices: Choice[];
}

export const Select = ({ title, choices, value, onChange }: SelectProps) => {
  return (
    <div className="relative w-full text-sm font-medium text-black">
      <h1 className="absolute -top-3.5 ml-1 bg-white px-1 text-black">
        {title}
      </h1>
      <select
        value={value}
        onChange={onChange}
        className="flex w-full items-center justify-center rounded-md text-lg font-medium outline-none ring-2 ring-black ring-offset-2"
      >
        {choices.map(({ choice, value }, i) => (
          <option className="block w-full" key={i} value={value}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};
