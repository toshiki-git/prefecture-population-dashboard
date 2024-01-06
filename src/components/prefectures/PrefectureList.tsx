import Checkbox from "@/components/prefectures/Checkbox";
import { Prefecture } from "@/types/PrefectureTypes";
import SubTitle from "@/components/common/SubTitle";
import styles from "./PrefectureList.module.css";

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
      <SubTitle subTitle="都道府県" />
      <div className={styles.prefectureList}>
        {prefs.map((pref) => (
          <div key={pref.prefCode} className={styles.checkboxItem}>
            <Checkbox
              label={pref.prefName}
              isChecked={selectedSet.has(pref.prefCode)}
              onCheck={(isChecked) =>
                handleCheckboxChange(pref.prefCode, isChecked)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrefectureList;
