import Checkbox from "@/components/prefectures/Checkbox";
import { Prefecture } from "@/types/PrefectureTypes";

interface PrefectureListProps {
  prefs: Prefecture[];
  selectedPrefs: number[];
  setSelectedPrefs: React.Dispatch<React.SetStateAction<number[]>>;
}

const PrefectureList = ({
  prefs,
  selectedPrefs,
  setSelectedPrefs,
}: PrefectureListProps) => {
  const selectedSet = new Set(selectedPrefs);

  const handleCheckboxChange = (prefCode: number, isChecked: boolean) => {
    setSelectedPrefs((prevSelectedPrefs) =>
      isChecked
        ? [...prevSelectedPrefs, prefCode]
        : prevSelectedPrefs.filter((code) => code !== prefCode)
    );
  };

  return (
    <div>
      {prefs.map((pref) => (
        <Checkbox
          key={pref.prefCode}
          label={pref.prefName}
          isChecked={selectedSet.has(pref.prefCode)}
          onCheck={(isChecked) =>
            handleCheckboxChange(pref.prefCode, isChecked)
          }
        />
      ))}
    </div>
  );
};

export default PrefectureList;
