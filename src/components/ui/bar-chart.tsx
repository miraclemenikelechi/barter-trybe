import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

import { APP_CONSTANTS } from "@/lib/constants";
import { ChartDataProps } from "@/types/charts";

export default function Component({ data }: { data: ChartDataProps }) {
    const { categories, series } = data;

    const options: ApexOptions = {
        ...APP_CONSTANTS.APEX_CHART_CONFIG,

        dataLabels: {
            enabled: false,
        },
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
        plotOptions: {
            bar: {
                borderRadius: 0,
                borderRadiusApplication: "end",
                horizontal: false,
            },
        },
        xaxis: {
            categories,
        },
    };

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={"100%"}
            width={"100%"}
        />
    );
}
