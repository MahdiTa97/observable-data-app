import * as Plot from "npm:@observablehq/plot";

export function customScatterPlot(data, { width, height } = {}) {
  return Plot.plot({
    width,
    height,
    inset: 8,
    grid: true,
    color: {
      legend: true,
    },
    marks: [
      Plot.line(data, { x: d => d[0], y: d => d[1], stroke: "red" }),
      Plot.dot(data, { x: d => d[0], y: d => d[1], fill: "steelblue" })
    ]
  });
}
