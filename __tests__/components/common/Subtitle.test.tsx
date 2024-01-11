import { render, screen } from "@testing-library/react";
import SubTitle from "@/components/common/SubTitle";

describe("SubTitle Component", () => {
  it("renders the subtitle text", () => {
    const testSubTitle: string = "Test SubTitle";
    render(<SubTitle subTitle={testSubTitle} />);

    const subTitleElement = screen.getByText(testSubTitle);
    expect(subTitleElement).toBeInTheDocument();
    expect(subTitleElement).toHaveClass("subTitle");
  });
});
