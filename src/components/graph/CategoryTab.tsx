import { useState } from "react";
import styles from "./CategoryTab.module.css";

interface CategoryTabsProps {
  categories: string[];
  onChange: (value: string) => void;
}

const CategoryTabs = ({ categories, onChange }: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

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
