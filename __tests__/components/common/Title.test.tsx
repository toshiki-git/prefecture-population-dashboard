import { render, screen } from "@testing-library/react";
import Title from "@/components/common/Title";

describe("Title Component", () => {
  it("renders the title text", () => {
    const testTitle: string = "Test Title";
    render(<Title title={testTitle} />);

    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("title");
  });
});
