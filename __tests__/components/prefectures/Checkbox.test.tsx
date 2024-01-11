import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "@/components/prefectures/Checkbox";

describe("Checkbox Component", () => {
  test("renders with label and respects isChecked prop", () => {
    const testLabel: string = "Test Label";
    render(<Checkbox label={testLabel} isChecked={true} onCheck={() => {}} />);

    const checkbox: HTMLInputElement = screen.getByRole("checkbox");
    const label: HTMLElement = screen.getByText(testLabel);

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(true);
    expect(label).toBeInTheDocument();
  });

  test("calls onCheck with the right value when clicked", () => {
    const onCheckMock = jest.fn();
    render(<Checkbox label="Test" isChecked={false} onCheck={onCheckMock} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(onCheckMock).toHaveBeenCalledWith(true);
    expect(onCheckMock).toHaveBeenCalledTimes(1);
  });
});
