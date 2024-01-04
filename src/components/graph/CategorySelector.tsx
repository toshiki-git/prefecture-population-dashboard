"use client";
import React from "react";

interface Props {
  onChange: (value: string) => void;
}

const CategorySelector = ({ onChange }: Props) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="総人口">総人口</option>
      <option value="年少人口">年少人口</option>
      <option value="生産年齢人口">生産年齢人口</option>
      <option value="老年人口">老年人口</option>
    </select>
  );
};

export default CategorySelector;
