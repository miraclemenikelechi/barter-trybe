import ChartCard from "@/components/chart-card";
import PieChart from "@/components/ui/full-pie-chart";

const data = [
    {
        id: "scala",
        label: "scala",
        value: 54,
        color: "hsl(219, 70%, 50%)",
    },
    {
        id: "hack",
        label: "hack",
        value: 46,
        color: "hsl(152, 70%, 50%)",
    },
];

export default function Component() {
    return (
        <ChartCard className="border border-red-500">
            <ChartCard.Header
                title="Return Rate"
                description="New VS Returning Customers"
                dropdown={<></>}
            />

            <hr />

            <ChartCard.Footer chart={<PieChart data={data} />} />
        </ChartCard>
    );
}
