"use client";
import React, { useEffect, useState } from "react";
import { fetchPrefectures } from "@/api/fetchPrefectures";
import { Prefecture } from "@/types/PrefectureTypes";
import Checkbox from "@/components/prefectures/Checkbox";

const PrefectureList = () => {
  const [prefs, setPrefs] = useState<Prefecture[]>([]);
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);

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
      <div>{selectedPrefs.map((prefCode) => prefCode + " ")}</div>
    </div>
  );
};

export default PrefectureList;
