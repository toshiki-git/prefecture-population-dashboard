import { useState } from "react";
import styles from "./CategoryTab.module.css";

interface CategoryTabsProps {
  categories: string[];
  initialCategories: string;
  onChange: (value: string) => void;
}

const CategoryTabs = ({
  categories,
  initialCategories,
  onChange,
}: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] =
    useState<string>(initialCategories);

  const handleTabClick = (category: string) => {
    setActiveCategory(category);
    onChange(category);
  };

  return (
    <div className={styles.tabContainer}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleTabClick(category)}
          className={`${styles.tabButton} ${
            category === activeCategory ? styles.tabButtonActive : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
