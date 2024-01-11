import { render, screen } from "@testing-library/react";
import Graph from "@/components/graph/Graph";
import mockGraphData from "../../mocks/mockGraphData";
import Highcharts from "highcharts";

beforeAll(() => {
  Highcharts.setOptions({
    accessibility: {
      enabled: false,
    },
  });
});

describe("Graph Component", () => {
  it("displays a message when no data is provided", () => {
    render(<Graph dataList={[]} />);
    expect(
      screen.getByText("都道府県を選択してください。")
    ).toBeInTheDocument();
  });

  it("renders the HighchartsReact component when data is provided", () => {
    const { container } = render(<Graph dataList={mockGraphData} />);
    const svgElement = container.querySelector("svg.highcharts-root");
    expect(svgElement).toBeInTheDocument();

    const plotBackground = container.querySelector(
      ".highcharts-plot-background"
    );
    expect(plotBackground).toBeInTheDocument();
  });
});
