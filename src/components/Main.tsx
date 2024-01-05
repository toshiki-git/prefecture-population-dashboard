"use client";
import { useState } from "react";
import PrefectureList from "@/components/prefectures/PrefectureList";
import useGraphData from "@/hooks/useGraphData";
import usePrefectures from "@/hooks/usePrefectures";
import GraphContainer from "./graph/GraphContainer";

const Main = () => {
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("総人口");
  const { prefs } = usePrefectures();
  const { graphData } = useGraphData(selectedPrefs, prefs, selectedCategory);
  const categories: string[] = [
    "総人口",
    "年少人口",
    "生産年齢人口",
    "老年人口",
  ];

  return (
    <div>
      <PrefectureList
        setSelectedPrefs={setSelectedPrefs}
        selectedPrefs={selectedPrefs}
        prefs={prefs}
      />
      <GraphContainer
        graphData={graphData}
        categories={categories}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  );
};

export default Main;
