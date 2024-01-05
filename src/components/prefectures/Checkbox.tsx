import { ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

const Checkbox = ({ label, isChecked, onCheck }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onCheck(e.target.checked)
        }
      />
      {label}
    </label>
  );
};

export default Checkbox;
