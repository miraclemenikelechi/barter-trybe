import { ResponsiveLine, Serie } from "@nivo/line";

import { chartTickValues, formatTickValue } from "@/utils/chart-tick-values";

export default function Component({ data }: { data: Serie[] }) {
    return (
        <ResponsiveLine
            data={data}
            colors={({ data }) => String(data.color || "#F94144")}
            margin={{ top: 20, right: 20, bottom: 25, left: 40 }}
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
                legendOffset: 36,
                legendPosition: "middle",
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: "middle",
                truncateTickAt: 0,
                tickValues: chartTickValues({
                    data: data.flatMap((item) => item.data),
                    key: "y",
                }),
                format: (value: number) => formatTickValue(value),
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            crosshairType="cross"
            enablePointLabel={false}
        />
    );
}
