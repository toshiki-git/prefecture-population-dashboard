import { render, screen, fireEvent } from "@testing-library/react";
import PrefectureList from "@/components/prefectures/PrefectureList";
import { mockPrefectureData } from "../../mocks/mockPrefectureData";

describe("PrefectureList Component", () => {
  const mockSetSelectedPrefs = jest.fn();

  it("renders correctly with given props", () => {
    render(
      <PrefectureList
        prefs={mockPrefectureData}
        selectedPrefs={[]}
        setSelectedPrefs={mockSetSelectedPrefs}
      />
    );

    mockPrefectureData.forEach((pref) => {
      expect(screen.getByLabelText(pref.prefName)).toBeInTheDocument();
    });
  });

  it("checks the boxes according to selectedPrefs", () => {
    render(
      <PrefectureList
        prefs={mockPrefectureData}
        selectedPrefs={[2]}
        setSelectedPrefs={mockSetSelectedPrefs}
      />
    );

    const secondCheckbox: HTMLInputElement = screen.getByLabelText("青森県");
    expect(secondCheckbox.checked).toBe(true);
  });

  it("calls setSelectedPrefs when a checkbox is clicked", () => {
    render(
      <PrefectureList
        prefs={mockPrefectureData}
        selectedPrefs={[]}
        setSelectedPrefs={mockSetSelectedPrefs}
      />
    );

    const firstCheckbox: HTMLInputElement = screen.getByLabelText("北海道");
    fireEvent.click(firstCheckbox);
    expect(mockSetSelectedPrefs).toHaveBeenCalled();
  });
});
