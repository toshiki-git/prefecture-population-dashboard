import { ChangeEvent } from "react";
import style from "./Checkbox.module.css";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

const Checkbox = ({ label, isChecked, onCheck }: CheckboxProps) => {
  return (
    <label>
      <input
        className={style.checkboxInput}
        type="checkbox"
        checked={isChecked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onCheck(e.target.checked)
        }
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
