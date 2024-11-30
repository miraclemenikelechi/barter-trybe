import { ResponsiveLine } from "@nivo/line";

const data = [
    {
        id: "week",
        color: "hsl(279, 70%, 50%)",
        data: [
            {
                x: "Monday",
                y: 500000,
            },
            {
                x: "Tuesday",
                y: 400000,
            },
            {
                x: "Wednessday",
                y: 301000,
            },
            {
                x: "Thursday",
                y: 296000,
            },
            {
                x: "Friday",
                y: 303000,
            },
            {
                x: "Saturday",
                y: 300000,
            },
            {
                x: "Sunday",
                y: 201000,
            },
        ],
    },
];

export const MyResponsiveLine = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
            type: "linear",
            min: 0,
            max: "auto",
            stacked: true,
            reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
            truncateTickAt: 0,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
            truncateTickAt: 0,
            tickValues: [0, 100000, 200000, 300000, 400000, 500000],
            format: (value) => `${value / 1000}k`,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
    />
);
