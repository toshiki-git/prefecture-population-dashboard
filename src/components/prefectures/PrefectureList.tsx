"use client";
import React, { useState } from "react";
import Checkbox from "@/components/prefectures/Checkbox";
import Graph from "@/components/graph/Graph";
import usePrefectures from "@/hooks/usePrefectures";
import useGraphData from "@/hooks/useGraphData";

const PrefectureList = () => {
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);
  const { prefs } = usePrefectures();
  const { graphData } = useGraphData(selectedPrefs, prefs);

  const handleCheckboxChange = (prefCode: number, isChecked: boolean): void => {
    setSelectedPrefs((prevSelectedPrefs) => {
      if (isChecked) {
        return [...prevSelectedPrefs, prefCode];
      } else {
        return prevSelectedPrefs.filter((code) => code !== prefCode);
      }
    });
  };

  return (
    <div>
      <div>
        {prefs.map((pref) => (
          <Checkbox
            key={pref.prefCode}
            label={pref.prefName}
            onCheck={(isChecked) =>
              handleCheckboxChange(pref.prefCode, isChecked)
            }
          />
        ))}
      </div>
      <Graph dataList={graphData} />
    </div>
  );
};

export default PrefectureList;
