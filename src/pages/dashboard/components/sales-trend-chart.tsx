import { ResponsiveBar } from "@nivo/bar";

import ChartCard from "@/components/chart-card";

const data = [
    {
        month: "Jan",
        sales: 400,
        color: "#F94144",
    },
    {
        month: "Feb",
        sales: 320,
        color: "#F94144",
    },
    {
        month: "Mar",
        sales: 270,
        color: "#F94144",
    },
    {
        month: "Apr",
        sales: 550,
        color: "#F94144",
    },
    {
        month: "May",
        sales: 390,
        color: "#F94144",
    },
    {
        month: "Jun",
        sales: 800,
        color: "#F94144",
    },
    {
        month: "Jul",
        sales: 250,
        color: "#F94144",
    },
    {
        month: "Aug",
        sales: 320,
        color: "#F94144",
    },
    {
        month: "Sep",
        sales: 630,
        color: "#F94144",
    },
    {
        month: "Oct",
        sales: 790,
        color: "#F94144",
    },
    {
        month: "Nov",
        sales: 480,
        color: "#F94144",
    },
    {
        month: "Dec",
        sales: 620,
        color: "#F94144",
    },
];

export const MyResponsiveBar = () => (
    <ResponsiveBar
        data={data}
        keys={["sales"]}
        indexBy="month"
        margin={{ top: 10, right: 0, bottom: 25, left: 30 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={({ data }) => data.color}
        fill={[
            {
                match: {
                    id: "fries",
                },
                id: "dots",
            },
            {
                match: {
                    id: "sandwich",
                },
                id: "lines",
            },
        ]}
        borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0,
        }}
        enableGridX={true}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
        }}
        legends={[]}
        role="application"
    />
);

export default function Component() {
    return (
        <ChartCard className="flex flex-col">
            <ChartCard.Header
                title="Sales Trend"
                description="Number Of Sales Made Over Time"
            />

            <hr />

            <ChartCard.Footer chart={<MyResponsiveBar />} className="flex-1" />
        </ChartCard>
    );
}
