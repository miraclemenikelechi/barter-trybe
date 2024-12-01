import { useState } from "react";

import ChartCard from "@/components/chart-card";
import Dropdown from "@/components/drop-down";
import BarChart from "@/components/ui/bar-chart";
import { DropdownOption } from "@/types/drop-down";

import { SALES_TRENDS } from "../config";

const dropdownOptions: DropdownOption[] = [
    { label: "This Week", value: "thisWeek" },
    { label: "This Month", value: "thisMonth" },
    { label: "This Year", value: "thisYear" },
];

export default function Component() {
    const [selected, setSelected] = useState<DropdownOption>(
        dropdownOptions[0]
    );

    const chartData = SALES_TRENDS[selected.value as keyof typeof SALES_TRENDS];

    return (
        <ChartCard className="flex flex-col">
            <ChartCard.Header
                className=""
                title="Sales Trend"
                description="Number Of Sales Made Over Time"
                dropdown={
                    <Dropdown
                        onChange={(option) =>
                            setSelected(
                                dropdownOptions.find(
                                    (item) => item.value === option
                                )!
                            )
                        }
                        options={dropdownOptions}
                        value={selected}
                        placeholder="Filter By..."
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
