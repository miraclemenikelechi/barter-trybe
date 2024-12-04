import { MayHaveLabel, ResponsivePie } from "@nivo/pie";

interface Props extends MayHaveLabel {
    [key: string]: unknown;
}
export default function Component({ data }: { data: Props[] }) {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 10, right: 25, bottom: 25, left: 25 }}
            innerRadius={0}
            padAngle={0}
            cornerRadius={0}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
            }}
            colors={({ data }) => String(data.color)}
            legends={[
                {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: false,
                    translateX: -80,
                    translateY: 80,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 10,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#000",
                            },
                        },
                    ],
                },
            ]}
        />
    );
}
