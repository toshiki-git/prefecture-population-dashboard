import { render, fireEvent, screen } from "@testing-library/react";
import CategoryTab from "@/components/graph/CategoryTab";

describe("CategoryTab Component", () => {
  const mockCategories = ["Category 1", "Category 2", "Category 3"];
  const mockOnChange = jest.fn();

  it("renders the category tabs correctly", () => {
    render(<CategoryTab categories={mockCategories} onChange={mockOnChange} />);
    mockCategories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("sets the first category as active by default", () => {
    render(<CategoryTab categories={mockCategories} onChange={mockOnChange} />);
    const firstTab = screen.getByText(mockCategories[0]);
    expect(firstTab).toHaveClass("tabButtonActive");
  });

  it("calls onChange and sets active class on tab click", () => {
    render(<CategoryTab categories={mockCategories} onChange={mockOnChange} />);

    const secondTab = screen.getByText(mockCategories[1]);
    fireEvent.click(secondTab);

    expect(mockOnChange).toHaveBeenCalledWith(mockCategories[1]);
    expect(secondTab).toHaveClass("tabButtonActive");
  });
});
