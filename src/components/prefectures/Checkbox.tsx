"use client";
import React, { useState, ChangeEvent } from "react";

type CheckboxProps = {
  label: string;
  onCheck: (isChecked: boolean) => void;
};

const Checkbox = ({ label, onCheck }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
    onCheck(e.target.checked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      {label}
    </label>
  );
};

export default Checkbox;
