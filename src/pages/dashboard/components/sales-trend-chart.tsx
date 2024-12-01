import { useState } from "react";

import ChartCard from "@/components/chart-card";
import Dropdown from "@/components/drop-down";
import BarChart from "@/components/ui/bar-chart";
import { DropdownOption } from "@/types/drop-down";

const dropdownOptions: DropdownOption[] = [
    { label: "This Week", value: "thisWeek" },
    { label: "This Month", value: "thisMonth" },
    { label: "This Year", value: "thisYear" },
];

const SALES_TRENDS = {
    thisWeek: [
        { duration: "Mon", sales: 50, color: "#F94144" },
        { duration: "Tue", sales: 70, color: "#F94144" },
        { duration: "Wed", sales: 30, color: "#F94144" },
        { duration: "Thu", sales: 90, color: "#F94144" },
        { duration: "Fri", sales: 60, color: "#F94144" },
        { duration: "Sat", sales: 100, color: "#F94144" },
        { duration: "Sun", sales: 80, color: "#F94144" },
    ],
    thisMonth: [
        { duration: "Week 1", sales: 400, color: "#F94144" },
        { duration: "Week 2", sales: 320, color: "#F94144" },
        { duration: "Week 3", sales: 270, color: "#F94144" },
        { duration: "Week 4", sales: 550, color: "#F94144" },
    ],
    thisYear: [
        { duration: "Jan", sales: 400, color: "#F94144" },
        { duration: "Feb", sales: 320, color: "#F94144" },
        { duration: "Mar", sales: 270, color: "#F94144" },
        { duration: "Apr", sales: 550, color: "#F94144" },
        { duration: "May", sales: 390, color: "#F94144" },
        { duration: "Jun", sales: 800, color: "#F94144" },
        { duration: "Jul", sales: 250, color: "#F94144" },
        { duration: "Aug", sales: 320, color: "#F94144" },
        { duration: "Sep", sales: 630, color: "#F94144" },
        { duration: "Oct", sales: 790, color: "#F94144" },
        { duration: "Nov", sales: 480, color: "#F94144" },
        { duration: "Dec", sales: 620, color: "#F94144" },
    ],
};

export default function Component() {
    const [selected, setSelected] = useState<DropdownOption>(
        dropdownOptions[0]
    );

    const chartData = SALES_TRENDS[selected.value as keyof typeof SALES_TRENDS];

    return (
        <ChartCard className="flex flex-col">
            <ChartCard.Header
                title="Sales Trend"
                description="Number Of Sales Made Over Time"
                dropdown={
                    <Dropdown
                        onChange={setSelected}
                        options={dropdownOptions}
                        value={selected}
                    />
                }
            />

            <hr />

            <ChartCard.Footer
                chart={<BarChart data={chartData} />}
                className="h-[14rem]"
            />
        </ChartCard>
    );
}
