import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

import { APP_CONSTANTS } from "@/lib/constants";
import { ChartDataProps } from "@/types/charts";

export default function Component({ data }: { data: ChartDataProps }) {
    const { categories, series } = data;

    const options: ApexOptions = {
        ...APP_CONSTANTS.APEX_CHART_CONFIG,

        grid: {
            show: true,
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        markers: {
            size: 2,
            colors: undefined,
            strokeColors: "#F94144",
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        xaxis: {
            categories,
        },
    };

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={"100%"}
            width={"100%"}
        />
    );
}
