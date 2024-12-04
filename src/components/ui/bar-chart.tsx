import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

type ChartData = {
    series: ApexOptions["series"];
    categories: string[];
};

export default function Component({ data }: { data: ChartData }) {
    const { series, categories } = data;

    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            fontFamily: "Inter, sans-serif",
            parentHeightOffset: 0,
        },
        colors: ["#F94144"],
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
            labels: {
                rotate: 0,
                style: {
                    fontSize: "0.75rem",
                },
                trim: true,
            },
        },
        yaxis: {
            // stepSize: 100,
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
