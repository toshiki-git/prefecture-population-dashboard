"use client";
import { useState } from "react";
import useGraphData from "@/hooks/useGraphData";
import usePrefectures from "@/hooks/usePrefectures";
import PrefectureList from "@/components/prefectures/PrefectureList";
import GraphContainer from "@/components/graph/GraphContainer";
import Title from "@/components/common/Title";

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
      <Title title="都道府県別人口推移" />
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
