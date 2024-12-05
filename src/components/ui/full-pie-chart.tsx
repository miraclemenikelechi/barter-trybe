import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

import { ChartDataProps } from "@/types/charts";

export default function Component({ data }: { data: ChartDataProps }) {
    const { categories: labels, series } = data;

    const options: ApexOptions = {
        chart: {
            fontFamily: "Inter, sans-serif",
        },
        colors: ["#F94144", "#FFCC99"],
        dataLabels: {
            enabled: true,
            textAnchor: "middle",
        },
        labels,
        legend: {
            floating: false,
            markers: {
                size: 5,
            },
            position: "bottom",
            show: true,
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -15,
                },
            },
        },
        stroke: {
            colors: undefined,
            curve: "straight",
        },
    };

    return (
        <ReactApexChart
            options={options}
            series={(series![0] as { data: number[] }).data}
            type="pie"
            height={"100%"}
            width={"100%"}
        />
    );
}
