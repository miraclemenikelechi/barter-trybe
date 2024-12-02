import { BarDatum, ResponsiveBar } from "@nivo/bar";

import { chartTickValues, formatTickValue } from "@/utils/chart-tick-values";

export default function Component({ data }: { data: BarDatum[] }) {
    return (
        <ResponsiveBar
            data={data}
            keys={["sales"]}
            indexBy="duration"
            margin={{ top: 20, right: 0, bottom: 25, left: 45 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={({ data }) => String(data.color || "#F94144")}
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
                tickValues: chartTickValues({
                    data,
                    key: "sales",
                }),
                format: (value: number) => formatTickValue(value),
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
}
