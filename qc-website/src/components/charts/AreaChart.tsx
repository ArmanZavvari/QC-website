// import React from "react";
// import { AgChartsReact } from "ag-charts-react";
// import { AgChartOptions } from "ag-charts-community"; // Import the correct type
// import { getAreaData } from "../../helper/chartData";

// interface IData {
//   month: string;
//   subscriptions: number;
//   services: number;
//   products: number;
// }

// const data: IData[] = getAreaData();

// const options: AgChartOptions = {
//   data,
//   title: {
//     text: "area chart",
//   },
//   series: [
//     {
//       //   stacked: true,
//       // normalizedTo: 1000
//       // customized is avalable
//       type: "area",
//       xKey: "month",
//       yKey: "subscriptions",
//       yName: "Subscriptions",
//     },
//     {
//       type: "area",
//       xKey: "month",
//       yKey: "services",
//       yName: "Services",
//     },
//     {
//       type: "area",
//       xKey: "month",
//       yKey: "products",
//       yName: "Products",
//     },
//   ],
// };

// const AreaChart: React.FC = () => {
//   return <AgChartsReact options={options} />;
// };

// export default AreaChart;
