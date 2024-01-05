import { ChangeEvent } from "react";

interface CategorySelectorProps {
  categories: string[];
  onChange: (value: string) => void;
  ariaLabel?: string;
}

const CategorySelector = ({
  categories,
  onChange,
  ariaLabel = "カテゴリーを選択",
}: CategorySelectorProps) => {
  return (
    <select
      aria-label={ariaLabel}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
