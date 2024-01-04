"use client";
import React, { useCallback, useEffect, useState } from "react";
import { fetchPrefectures } from "@/api/fetchPrefectures";
import { Prefecture } from "@/types/PrefectureTypes";
import Checkbox from "@/components/prefectures/Checkbox";
import { fetchPopulation } from "@/api/fetchPopulation";
import Graph from "@/components/graph/Graph";
import { GraphData } from "@/types/GraphTypes";

const PrefectureList = () => {
  const [prefs, setPrefs] = useState<Prefecture[]>([]);
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);
  const [allData, setAllData] = useState<GraphData["dataList"]>([]);

  const handleCheckboxChange = (prefCode: number, isChecked: boolean): void => {
    setSelectedPrefs((prevSelectedPrefs) => {
      if (isChecked) {
        return [...prevSelectedPrefs, prefCode];
      } else {
        return prevSelectedPrefs.filter((code) => code !== prefCode);
      }
    });
  };

  const handleGraphUpdate = useCallback(async () => {
    try {
      const allDataPromises = selectedPrefs.map(async (prefCode) => {
        const response = await fetchPopulation(String(prefCode));
        const pref = prefs.find((pref) => pref.prefCode === prefCode);
        return {
          prefName: pref ? pref.prefName : "non-existent",
          data: response.result.data[0].data,
        };
      });

      const newData = await Promise.all(allDataPromises);
      setAllData(newData);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, [selectedPrefs, prefs]);

  useEffect(() => {
    handleGraphUpdate();
  }, [handleGraphUpdate]);

  useEffect(() => {
    const getPrefectures = async () => {
      try {
        const response = await fetchPrefectures();
        setPrefs(response.result);
      } catch (error) {
        console.error(error);
      }
    };

    getPrefectures();
  }, []);

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
      <Graph dataList={allData} />
    </div>
  );
};

export default PrefectureList;
